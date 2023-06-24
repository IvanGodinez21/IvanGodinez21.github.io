import IPerson from '../interfaces/person';

export default class Person implements IPerson {
  public birthDay?: string | Date;
  public email?: string;
  public fathersName: string;
  public firstName: string;
  public mothersName?: string;
  public userName: string;
  public secondaryName?: string;
  constructor({
    birthDay,
    email,
    fathersName,
    firstName,
    mothersName,
    userName,
    secondaryName,
  }: IPerson) {
    this.birthDay = birthDay;
    this.email = email;
    this.fathersName = fathersName;
    this.firstName = firstName;
    this.mothersName = mothersName;
    this.userName = userName;
    this.secondaryName = secondaryName;
  }
  public get fullName(): string {
    return `${this.firstName}${
      this.secondaryName ? ` ${this.secondaryName}` : ''
    } ${this.fathersName}${this.mothersName ? ` ${this.mothersName}` : ''}`;
  }
}
