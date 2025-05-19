import Human from "@/classes/Human";

export default class HumanGenerator extends Human {
  private _generatorId?: string;
  private _base?: string;
  private _numberOfPeople?: string;
  private _style?: string;
  private _clothing?: Array<string>;
  private _poses?: string;
  private _filter?: string;

  constructor
  (
    hairColor: string,
    hairStyle: string,
    ethnicity: string,
    body: Array<string>,
  ) {
    super(hairColor, hairStyle, ethnicity, body);
  }

  public set setBase(parameter: string) {
    this._base = parameter;
  }

  public get getBase(): { "Base": string | undefined } {
    return {"Base": this._base};
  }

  public set setNumberOfPeople(parameter: string) {
    this._numberOfPeople = parameter;
  }

  public get getNumberOfPeople(): { "Number of people": string | undefined } {
    return {"Number of people": this._numberOfPeople};
  }

  public set setStyle(parameter: string) {
    this._style = parameter;
  }

  public get getStyle(): { "Style": string | undefined } {
    return {"Style": this._style};
  }

  public set setClothing(parameter: string[]) {
    this._clothing = parameter;
  }

  public get getClothing(): { "Clothing": Array<string> | undefined } {
    return {"Clothing": this._clothing};
  }

  public set setGeneratorId(parameter: string) {
    this._generatorId = parameter;
  }

  public get getGeneratorId(): { "generatorId": string | undefined } {
    return {"generatorId": this._generatorId};
  }

  public set setPoses(parameter: string) {
    this._poses = parameter;
  }

  public get getPoses(): { "poses": string | undefined } {
    return {"poses": this._poses};
  }

  public set setFilter(parameter: string) {
    this._filter = parameter;
  }

  public get getFilter(): { "filter": string | undefined } {
    return {"filter": this._filter};
  }

}
