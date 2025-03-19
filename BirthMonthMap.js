// Function to generate a random birth month between 1 and 12
function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

// Dictionary to store individuals by birth month
let birthMonthMap = {};

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    // Get random birth month
    let month = getRandomMonth();
    
    // If month is not already a key, create an empty array
    if (!birthMonthMap[month]) {
        birthMonthMap[month] = [];
    }
    
    // Store individual in respective month
    birthMonthMap[month].push(`Person${i}`);
}

// Display the grouped individuals by birth month
console.log("Individuals grouped by birth month:");
for (let month in birthMonthMap) {
    console.log(`Month ${month}:`, birthMonthMap[month]);
}
