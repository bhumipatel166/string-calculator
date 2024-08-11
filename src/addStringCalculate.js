export function add(numbers) {
    if (numbers === "") return 0;
  
    // Handle custom delimiters
    let delimiter = /,|\n|;|\|/;
    const escapedDelimiter = numbers.replace(/[^0-9|-]/g, ',');
  
    const numberArray = escapedDelimiter.split(delimiter).map(Number);
    console.log(numberArray);
    // Check for negative numbers
    const negatives = numberArray.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numberArray.reduce((sum, number) => sum + number, 0);
}
  