

export const format = (number: any) => {
    if (typeof number === 'number') {
        return parseInt(number).toLocaleString('en-US');
    } else {
        return number.toLocaleString('en-US');
    }

}