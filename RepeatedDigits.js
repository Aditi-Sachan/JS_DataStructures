// Function to find numbers with repeated digits
function findRepeatedDigits() {
    let repeatedDigits = [];

    // Loop through numbers from 10 to 99 (since 0-9 doesn't have repeated digits)
    for (let i = 10; i <= 99; i++) {
        let numStr = i.toString();

        // Check if the digits are the same
        if (numStr[0] === numStr[1]) {
            repeatedDigits.push(i);
        }
    }

    return repeatedDigits;
}

// Get the array of repeated digit numbers
let result = findRepeatedDigits();

// Display the result
console.log("Numbers with repeated digits between 0 and 100:", result);
