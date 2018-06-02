
export default (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
};
