export const isEmpty = (obj: any): boolean => {
  if (obj === undefined || obj === null) return true;
  if (typeof obj === "string") return obj.trim().length === 0;
  if (Array.isArray(obj)) return obj.length === 0;
  if (obj instanceof Set) return obj.size === 0;
  if (typeof obj === "object") return Object.keys(obj).length === 0;
  return false;
};

export const isNotEmpty = (obj: any): boolean => !isEmpty(obj);

export const isServer = (): boolean => {
  return !(typeof window != "undefined" && window.document);
};
