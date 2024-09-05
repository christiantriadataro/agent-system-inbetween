

export const format = (number: string | number) => {
    if (typeof number === 'number') {
        return Number(number).toLocaleString('en-US');
    } else {
        return number.toLocaleString();
    }

}