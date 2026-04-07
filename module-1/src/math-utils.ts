/**
 * Calculates the arithmetic average of an array of numbers.
 */
export const calculateAverage = (numbers: number[]): number | null => {
  if (numbers.length === 0) return null;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
};

/**
 * Calculates the median of an array of numbers.
 */
export const calculateMedian = (numbers: number[]): number | null => {
  if (numbers.length === 0) return null;
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1]! + sorted[middle]!) / 2;
  }
  
  return sorted[middle]!;
};

/**
 * Filters values that exceed a certain limit (outliers).
 */
export const filterOutliers = (numbers: number[], limit: number): number[] => {
  return numbers.filter(num => Math.abs(num) <= limit);
};
