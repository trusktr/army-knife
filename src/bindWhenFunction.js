
// If the first arg to bindWhenFunction is a function, bind it to context.
export function bindWhenFunction(possibleFunction, context) {
    if (typeof possibleFunction === 'function') {
        possibleFunction = possibleFunction.bind(context);
    }

    return possibleFunction;
}
export default bindWhenFunction;
