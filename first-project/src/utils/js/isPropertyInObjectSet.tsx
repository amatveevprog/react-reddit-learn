export function isPropertyInObject(
  obj: object, property: string): property is keyof object {
  return property in obj;
}

export function isPropertyInObjectSet(property: string) {
  return (obj: object) => {
    if (isPropertyInObject(obj, property)) {
      return(
        Object.hasOwnProperty.call(obj, property) &&
        obj[property] !== undefined &&
        obj[property] !== null
      );
    }
    else {
      return false;
    }
  };
};

