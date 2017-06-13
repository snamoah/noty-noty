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
  const defaultObject = JSON.parse(JSON.stringify(def));

  // Take every
  Object.keys(defaultObject).forEach((key) => {
    // only reassign if value exists for key
    if (obj[key]) {
      defaultObject[key] = obj[key];
    }
  });

  return defaultObject;
};

export default defaults;
