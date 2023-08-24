// Am I Perfect?

// Write a function that tells if a given number is perfect or not. A number is called perfect if the sum of the factors of a number (excluding the number itself) is the number itself.
// Output
// Return “Perfect” if the number is perfect
// if the sum of factors is greater than the input return “Abundant”
// if the sum of factors is lesser than the input return “Deficient”.
// Example:

// 1) 6 -> factors(1,2,3) -> sum (1+2+3) = 6 (perfect number)
// 2) 12 -> factors(1,2,3,4,6) -> sum(1+2+3+4+6) = 16 > 12 (Abundant)
// 3) 8 -> factors(1,2,4) -> sum(1+2+4) = 7 < 8 (Deficient)

function is_perfect(num){
    let sum = 0

    for(let i=1; i<=num/2; i++){
        if(num % i == 0){
            sum = sum + i
        }
    }

    if(sum === num && sum !== 0 ){
        console.log("perfect number")
    } else if( sum > num){
        console.log("Abudant")
    } else if( sum < num){
        console.log("Dificient")
    } else {
        console.log('It is not perfect')
    }
}
is_perfect(6)
is_perfect(12)
is_perfect(8)