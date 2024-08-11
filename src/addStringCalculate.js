export function add(numbers) {
    if (numbers === "") return 0;
  
    // Handle custom delimiters
    let delimiter = /,|\n|;|/;
    if (numbers.startsWith("//")) {
      const delimiterLineEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterLineEndIndex));
      numbers = numbers.substring(delimiterLineEndIndex + 1);
    }
  
    const numberArray = numbers.split(delimiter).map(Number);
    
    // Check for negative numbers
    const negatives = numberArray.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numberArray.reduce((sum, number) => sum + number, 0);
}
  