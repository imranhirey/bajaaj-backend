export const generateId = (): string => {
    // random id must be 8 numbers
    const randomId = Math.floor(Math.random() * 100000000);
    return randomId.toString();
}