// Greater than and less than in a matrix

// Detect values in a matrix that is greater than or equal to every element in its row and less than or equal to every element in its column.
// So say you have a matrix-like so:
//     1  2  3
//   |---------
// 1 | 7  8  7
// 2 | 5  4  2    value at column 1, row 2, with 5 (Ans)
// 3 | 8  6  7
// A matrix may have zero or more values like these which are greater than or equal and less than or equal.
// Your code should be able to provide a list of all the values for any given matrix. If no values are found it should return an empty list.
// The matrix can have a different number of rows and columns (Non-square matrix).

function findSpecialValues(matrix) {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const currentValue = matrix[i][j];
            const isGreater= matrix[i].every(value => currentValue >= value)
            const isLess = matrix.every(row => currentValue <= row[j])

            if (isGreater && isLess) {
                result.push(currentValue)
            }
        }
    }

    return result
}
console.log(findSpecialValues(( [
    [7, 8, 7],
    [5, 4, 2],
    [8, 6, 7]
])))
  
