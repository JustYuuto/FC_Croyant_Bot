/**
 * Returns `true` if the given number is negative, `false` if not
 * @param {number} number
 * @returns {boolean}
 */
module.exports.isNegativeNumber = (number) => {
  return Math.sign(number) === -1 || isNaN(Math.sign(number));
}

/**
 * Convert milliseconds to minutes and seconds format (00:00)
 * @param {number|string} ms
 * @returns {string}
 */
module.exports.msToMinsAndSecs = (ms) => {
  if (typeof ms !== 'number') ms = parseInt(ms);
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}