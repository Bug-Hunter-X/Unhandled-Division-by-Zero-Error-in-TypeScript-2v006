# Unhandled Division by Zero Error in TypeScript

This repository demonstrates a common error in TypeScript: unhandled division by zero.  The `bug.ts` file contains code that throws an error when attempting to divide by zero. The solution in `bugSolution.ts` shows how to gracefully handle this error using a `try...catch` block.

## Bug

The `bug.ts` file shows a simple function that performs division. However, there is no error handling for the case where the divisor is zero. This results in an unhandled exception and program termination.

## Solution

The `bugSolution.ts` file demonstrates the correct way to handle potential division by zero errors. A `try...catch` block is used to catch the error and prevent program termination. A more user-friendly error message can also be displayed.

## How to run

1. Clone the repository
2. Navigate to the repository directory
3. Compile and run the code using TypeScript compiler: `tsc bug.ts && node bug.js` (for the unhandled version) and `tsc bugSolution.ts && node bugSolution.js` (for the handled version)