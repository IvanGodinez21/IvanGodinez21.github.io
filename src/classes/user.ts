import { IUser } from '@/types/user';

const override = process.env.NEXT_PUBLIC_OVERRIDE?.toLowerCase() === 'true' ?? false;

export default class User implements IUser {
  public birthdate: IUser['birthdate'];
  public email: IUser['email'];
  public fathersName: IUser['fathersName'];
  public firstName: IUser['firstName'];
  public mothersName: IUser['mothersName'];
  public secondaryName: IUser['secondaryName'];
  public _social: IUser['social'];
  public telephone: IUser['telephone'];
  public username: IUser['username'];

  constructor({
    birthdate,
    email,
    fathersName,
    firstName,
    mothersName,
    username,
    secondaryName,
    social,
    telephone,
  }: IUser) {
    this.username = username;
    this.birthdate = birthdate ? new Date(birthdate) ?? undefined : undefined;
    this.email = email;
    this.fathersName = fathersName;
    this.firstName = firstName;
    this.mothersName = mothersName;
    this.secondaryName = secondaryName;
    this._social = social;
    this.telephone = telephone;
  }

  public get age(): number | undefined {
    if (!this.birthdate) return undefined;
    if (typeof this.birthdate === 'string') this.birthdate = new Date(this.birthdate);
    return Math.abs(new Date(Date.now() - this.birthdate.getTime()).getUTCFullYear() - 1970);
  }

  public get birthday(): string | undefined {
    if (!this.birthdate) return undefined;
    if (typeof this.birthdate === 'string') this.birthdate = new Date(this.birthdate);
    return `${this.birthdate.getMonth() + 1}/${this.birthdate.getDate()}`;
  }

  public get fullName(): string | undefined {
    const envName = `${this.firstName}${this.secondaryName ? ` ${this.secondaryName}` : ''} ${this.fathersName}${
      this.mothersName ? ` ${this.mothersName}` : ''
    }`;
    if (!envName.includes('undefined')) return envName;
    if (this._social.github.name) return this._social.github.name;
    return undefined;
  }

  public get nextBirthDay():
    | {
        date: Date;
        countdown: {
          days: number;
          hours: number;
          minutes: number;
          seconds: number;
        };
      }
    | undefined {
    if (!this.birthdate) return undefined;
    if (typeof this.birthdate === 'string') this.birthdate = new Date(this.birthdate);
    const today = new Date();
    const birthdate = new Date(today.getFullYear(), this.birthdate.getMonth(), this.birthdate.getDate());

    if (birthdate < today) {
      birthdate.setFullYear(birthdate.getFullYear() + 1);
    }

    const timeDiffMs = birthdate.getTime() - today.getTime();
    const timeDiffSecs = Math.floor(timeDiffMs / 1000);

    const seconds = timeDiffSecs % 60;
    const minutes = Math.floor(timeDiffSecs / 60) % 60;
    const hours = Math.floor(timeDiffSecs / (60 * 60)) % 24;
    const days = Math.floor(timeDiffSecs / (60 * 60 * 24));

    return {
      date: birthdate,
      countdown: {
        days,
        hours,
        minutes,
        seconds,
      },
    };
  }

  public get social(): IUser['social'] {
    return {
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

  private sortObjectKeys({ object }: { object: { [key: string]: unknown } }): { [key: string]: unknown } {
    const sortedObj: { [key: string]: unknown } = {};
    const sortedKeys = Object.keys(object).sort();

    for (const key of sortedKeys) {
      const value = object[key];
      sortedObj[key] =
        typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)
          ? this.sortObjectKeys({ object: value as { [key: string]: unknown } })
          : value;
    }

    return sortedObj;
  }

  public toJSON(): ReturnType<typeof this.sortObjectKeys> {
    const jsonObj: { [key: string]: unknown } = Object.assign(Object(), this);
    const proto = Object.getPrototypeOf(this);

    Object.entries(Object.getOwnPropertyDescriptors(proto))
      .filter(([, descriptor]) => typeof descriptor.get === 'function')
      .map(([key, descriptor]) => {
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
