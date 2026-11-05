// Lets us write async route code without try/catch everywhere.
// Any error is passed to the error handler in server.js.
export const wrap = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)