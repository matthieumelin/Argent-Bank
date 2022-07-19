/**
 * Format a string to decimal format
 * @param {string} value 
 * @returns Format string in decimal
 */
 export const format = (value) => {
    let [integerPart, decimalPart] = value.toString().split(".");
    decimalPart = decimalPart ? decimalPart.padEnd(2, "0") : "00";
  
    const args = [];
  
    while (integerPart.length > 3) {
      args.push(integerPart.slice(-3));
      integerPart = integerPart.slice(0, -3);
    }
  
    args.push(integerPart);
    args.reverse();
  
    return `${args.join(",")}.${decimalPart}`;
}

/**
 * Check e-mail is in good format.
 * @param {string} email 
 * @returns A valid e-mail address in good format
 */
export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}
