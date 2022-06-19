
export default class Strings {

  static slugify(str: string): string {
    return str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  }
}
