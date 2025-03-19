// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to get prime factors and store them in an array
function getPrimeFactors(n) {
    let primeFactors = [];

    // Divide by 2 while n is even
    while (n % 2 === 0) {
        primeFactors.push(2);
        n = n / 2;
    }

    // Check for odd factors
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            primeFactors.push(i);
            n = n / i;
        }
    }

    // If n is still a prime number greater than 2
    if (n > 2) {
        primeFactors.push(n);
    }

    return primeFactors;
}

// Input: Number for prime factorization
let n = parseInt(process.argv[2]);

// Check if the input is valid
if (isNaN(n) || n <= 1) {
    console.log("Please enter a valid number greater than 1.");
} else {
    // Get prime factors and store in an array
    let primeFactorsArray = getPrimeFactors(n);

    // Display the prime factors
    console.log("Prime factors of", n, "are:", primeFactorsArray);
}
