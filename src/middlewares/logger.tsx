export const logger = store => next => action => {
  console.log("action fired", action);
  next(action);
};
