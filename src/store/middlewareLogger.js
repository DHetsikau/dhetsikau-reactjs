const logger = () => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching: ', action);
            const result = next(action);
            return result;
        }
    }
};

export default logger;