/*
    Author: Pablo Quintana
    Desc: JavaScript Functions Exercise
    Date: 02/15/2023
*/

/**
 * Function that calculate the sale price
 * @param {number} originalPrice The original price value
 * @param {number} discountPercentage The porcentaje discount
 * @returns {number} The sale price result
 */
function calculateSalePrice(originalPrice, discountPercentage) {
    return (parseFloat(originalPrice) * parseFloat(discountPercentage / 100)).toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD'
    });
}
console.log('---- Sales price ----');
console.log(calculateSalePrice(2000, 5));
console.log(calculateSalePrice(40000, 15));
console.log(calculateSalePrice(700500, 25));

/**
 * Function that convert from Fahrenheit To Celsius
 * @param {number} fahrenheit The fahrenheit value
 * @returns {number} The Celsius result
 */
const fahrenheitToCelsius = function (fahrenheit) {
    return Math.round((parseFloat(fahrenheit) - 32) * .5556);
}

console.log('---- Fahrenheit To Celsius ----');
console.log(fahrenheitToCelsius(40));
console.log(fahrenheitToCelsius(50));
console.log(fahrenheitToCelsius(-10));

/**
 * Function that determine if a number is prime
 * @param {number} num The number value
 * @returns {boolean} True is a prime number, otherwise false
 */
const isPrime = (num) => {
    let isPrime = true;
    num = parseInt(num);

    try {
        if (isNaN(num) || num <= 1) {
            isPrime = false;
            throw new Error('Please enter a valid number and greater than 1');
        }

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

    } catch (error) {
        console.log(error.message);
    }

    return isPrime;
}

console.log('---- Number is prime? ----');
console.log(isPrime('abcd'));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(23));
console.log(isPrime(7));
console.log(isPrime(4));
