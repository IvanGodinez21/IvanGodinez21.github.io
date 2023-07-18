import moment from 'moment';
import { IUser, IUserConstructor } from '@/types/user';

const override = process.env.USER_NAME_OVERRIDE?.toLowerCase() === 'true' ?? false;

export default class User implements IUser {
  public birthdate: IUser['birthdate'];
  public description: IUser['description'];
  public email: IUser['email'];
  public education: IUser['education'];
  public fathersName: IUser['fathersName'];
  public firstName: IUser['firstName'];
  public gender: IUser['gender'];
  public jobTitle: IUser['jobTitle'];
  public mothersName: IUser['mothersName'];
  public secondaryName: IUser['secondaryName'];
  public _social: IUser['social'];
  public technologies: IUser['technologies'];
  public telephone: IUser['telephone'];
  public username: IUser['username'];

  constructor({
    birthdate,
    description,
    email,
    fathersName,
    firstName,
    gender,
    jobTitle,
    mothersName,
    secondaryName,
    education,
    social,
    technologies,
    telephone,
    username,
  }: IUserConstructor) {
    this.birthdate = birthdate;
    this.description = description;
    this.email = email;
    this.fathersName = fathersName;
    this.firstName = firstName;
    this.gender = gender;
    this.jobTitle = jobTitle;
    this.mothersName = mothersName;
    this.secondaryName = secondaryName;
    this.education = education;
    this._social = social;
    this.technologies = technologies;
    this.telephone = telephone;
    this.username = username;
  }

  public get age(): IUser['age'] {
    if (!this.birthdate) return undefined;
    return moment().diff(this.birthdate, 'years');
  }

  public get birthday(): IUser['birthday'] {
    if (!this.birthdate) return undefined;
    const birthday = moment(this.birthdate).set('year', moment().year());
    const today = moment();
    if (birthday.isBefore(today, 'day') && !birthday.isSame(today, 'day')) birthday.add(1, 'year');
    return birthday.toDate();
  }

  public get fullName(): IUser['fullName'] {
    const names = [this.firstName, this.secondaryName, this.fathersName, this.mothersName];
    const name = names.filter((name) => name !== undefined).join(' ');
    return name.length > 0 ? name : undefined;
  }

  public get social(): IUser['social'] {
    return {
      discord: {
        ...this._social.discord,
        id: this._social.discord.id,
        username: this._social.discord.username ?? (override ? this.username : undefined),
      },
      facebook: {
        username: this._social.facebook.username ?? (override ? this.username : undefined),
      },
      github: {
        ...this._social.github,
        username: this._social.github.username ?? (override ? this.username : undefined),
      },
      linkedin: {
        username: this._social.linkedin.username ?? (override ? this.username : undefined),
      },
      telegram: {
        telephone: this._social.telegram.telephone ?? (override ? this.telephone : undefined),
        username: this._social.telegram.username ?? (override ? this.username : undefined),
      },
      twitter: {
        username: this._social.twitter.username ?? (override ? this.username : undefined),
      },
      whatsapp: {
        telephone: this._social.whatsapp.telephone ?? (override ? this.telephone : undefined),
      },
    };
  }

  private sortObjectKeys({ object }: { object: { [key: string]: unknown } }): IUser {
    const sortedObj: { [key: string]: unknown } = {};
    const sortedKeys = Object.keys(object).sort();

    for (const key of sortedKeys) {
      const value = object[key];
      sortedObj[key] =
        typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)
          ? this.sortObjectKeys({ object: value as { [key: string]: unknown } })
          : value;
    }

    return sortedObj as object as IUser;
  }

  public toJSON(): ReturnType<typeof this.sortObjectKeys> {
    const jsonObj: { [key: string]: unknown } = Object.assign(Object(), this);
    const proto = Object.getPrototypeOf(this);

    Object.entries(Object.getOwnPropertyDescriptors(proto))
      .filter(([, descriptor]) => typeof descriptor.get === 'function')
      .forEach(([key, descriptor]) => {
        if (descriptor && key[0] !== '_') {
          try {
            const val = descriptor.get?.call(this);
            if (val) jsonObj[key] = val;
          } catch (error) {
            console.error(`Error calling getter ${key}`, error);
          }
        }
      });

    for (const prop of Object.keys(jsonObj)) {
      if (prop[0] === '_') {
        delete jsonObj[prop];
      }
    }

    return this.sortObjectKeys({ object: jsonObj });
  }
}
