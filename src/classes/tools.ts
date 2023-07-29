export default class Tools {
  public static toCamelCase({
    object,
  }: {
    object: { [key: string | number]: object };
  }): {
    [key: string | number]: object;
  } {
    if (typeof object !== 'object' || Array.isArray(object)) {
      return object;
    }

    const result: { [key: string]: object } = {};

    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) => {
          return letter.toUpperCase();
        });
        if (typeof object[key] === 'object' && object[key] !== null) {
          if (Array.isArray(object[key])) {
            const convertedArray = (
              object[key] as Array<{ [key: string]: object }>
            ).map((item) => {
              return this.toCamelCase({ object: item });
            });
            result[camelCaseKey] = convertedArray;
          } else {
            result[camelCaseKey] = this.toCamelCase({
              object: object[key] as { [key: string]: object },
            });
          }
        } else {
          result[camelCaseKey] = object[key];
        }
      }
    }

    return result;
  }
}
