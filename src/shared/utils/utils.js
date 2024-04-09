/**
 * @param {[]} array 
 * @returns {boolean}
 */
export const isEmptyArray = array => !(array !== undefined && array !== null && array.length > 0);

/**
 * @param {string[]} classes
 * @returns {string}
 */
export const joinClasses = classes => classes.join(' ');