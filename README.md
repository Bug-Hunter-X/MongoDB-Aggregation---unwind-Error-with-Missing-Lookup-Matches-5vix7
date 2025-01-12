# MongoDB Aggregation $unwind Error with Missing Lookup Matches

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines. The error occurs when attempting to unwind an array field that is empty due to a missing match in a preceding `$lookup` stage.

The `bug.js` file contains code that reproduces the error. The `bugSolution.js` file shows how to correctly handle such situations using $ifNull and $unwind.

## Setup

1.  Ensure you have MongoDB installed and running.
2.  Create the collections as defined in the code comments.
3.  Run the `bug.js` file to see the error.
4.  Run the `bugSolution.js` file to see the corrected code.

## Problem
The issue is caused by trying to unwind an empty array returned when the `$lookup` fails to find any matches. The solution involves using conditional operators such as `$ifNull` to check for the presence of data before unwinding the field, ensuring the pipeline doesn't fail.