export class Collection {
  public collectionName: string;
  public urlArr: string[];

  constructor(collectionName, urlArr) {
    this.collectionName = collectionName;
    this.urlArr = urlArr;
  }
}
