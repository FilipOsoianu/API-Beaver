export class SchemaModel {
  path: string;
  resourceType: string;
  children: SchemaModel[];

  toJSON() {
    let obj = {
      type: this.resourceType,
    };
    if (this.children.length > 0) {
      this.children.forEach(value => {
        obj['/' + value.path] = value.toJSON();
      })
    }
    return obj;
  }


  private static getValue(value: Map<any, any>) {
    return Object.values(value);
  }

  private static getName(value: Map<any, any>) {
    return Object.keys(value);
  }


}
