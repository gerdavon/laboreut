function isNumber(value: any): boolean {
  // Check if the value is of type number
  return typeof value === 'number' && !isNaN(value);
}
