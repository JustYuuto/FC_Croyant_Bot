/**
 * Creates an async function
 * @param {function} fn
 * @param {any} args
 */
module.exports.async = async (fn, ...args) => {
  await fn(args);
}