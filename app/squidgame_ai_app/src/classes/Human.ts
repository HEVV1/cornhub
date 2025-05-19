export default abstract class Human {
  private readonly _body: Array<string>;
  private readonly _hairColor: string;
  private readonly _hairStyle: string;
  private readonly _ethnicity: string;

  constructor(hairColor: string, hairStyle: string, ethnicity: string, body: Array<string>) {
    this._hairColor = hairColor;
    this._hairStyle = hairStyle;
    this._ethnicity = ethnicity;
    this._body = body;
  }

  public get getBody(): { Body: Array<string> } {
    return {Body: this._body};
  }

  public get getHairColor(): { "Hair Color": string } {
    return {"Hair Color": this._hairColor};
  }

  public get getHairStyle(): { "Hair Style": string } {
    return {"Hair Style": this._hairStyle};
  }

  public get getEthnicity(): { Ethnicity: string } {
    return {Ethnicity: this._ethnicity};
  }
}
