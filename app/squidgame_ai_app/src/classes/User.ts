export default class User {
  private readonly _userId: string;

  constructor(userId: string) {
    this._userId = userId;
  }

  public get getUserId(): { "userId": string } {
    return {"userId": this._userId};
  }
}
