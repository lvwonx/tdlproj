export function parseMenuExpression(menuExpression) {
    // Women -> Tops -> Jackets
    const parts = menuExpression.split('->');

    return parts.map((p) => p.trim());
}

export function priceStringToNumber(priceString) {
    const numberString = priceString.replace('$', '');

    return Number(numberString);
}