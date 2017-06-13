/**
 * defaults
 *
 * @function defaults
 *
 * @param {Object} obj - Object to fill default
 * @param {Object} def - Object with default values 
 * @return {Object}
 */
export const defaults = (obj, def) => {
  // clone object to map keys;
  const defaultObject = Object.create(def);

  // Take every 
  Object.keys(def).forEach(key => deafultObject[key] = obj[key]);
  return defaultObject;
};
