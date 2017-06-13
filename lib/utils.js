/**
 * defaults
 *
 * @function defaults
 *
 * @param {Object} obj - Object to fill default
 * @param {Object} def - Object with default values
 * @return {Object}
 */

const defaults = (obj, def) => {
  // clone object to map keys;
  let defaultObject = Object.create(def);
  defaultObject = Object.assign(def);

  // Take every
  Object.keys(def).forEach((key) => {
    // only reassign if value exists for key
    if (obj[key]) {
      defaultObject[key] = obj[key];
    }
  });

  return defaultObject;
};

export default {
  defaults,
};
