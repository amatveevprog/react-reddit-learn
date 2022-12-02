export function isPropertyInObjectSet<K extends string>(property: K) {
  return (obj: object) => (
    Object.hasOwnProperty.call(obj, property) &&
    obj[property as keyof typeof obj] !== undefined) &&
    obj[property as keyof typeof obj] !== null;
};
