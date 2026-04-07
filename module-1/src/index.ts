import { calculateAverage, calculateMedian, filterOutliers } from './math-utils.js';

const myData: number[] = [10, 20, 15, 100, 25, 30];
const limit: number = 50;

console.log("--- Statistical Analysis ---");

// 1. Calculate Average
const avg = calculateAverage(myData);
console.log(`Average: ${avg?.toFixed(2) ?? "N/A"}`);

// 2. Calculate Median
const median = calculateMedian(myData);
console.log(`Median: ${median ?? "N/A"}`);

// 3. Filter Outliers (values above 50)
const cleanData = filterOutliers(myData, limit);
console.log(`Clean Data (limit ${limit}):`, cleanData);
