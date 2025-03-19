// Function to roll a die and return a number between 1 to 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Dictionary to store die roll results
let dieRolls = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// Roll the die until one number reaches 10 times
let maxRolls = 10;
let reachedMax = false;

while (!reachedMax) {
    // Roll the die
    let result = rollDie();
    
    // Increment the count of that number
    dieRolls[result]++;

    // Check if any number has reached 10 rolls
    if (dieRolls[result] === maxRolls) {
        reachedMax = true;
    }
}

// Display the dictionary with roll results
console.log("Die roll results:", dieRolls);

// Find the number with maximum and minimum occurrences
let maxNumber = 1, minNumber = 1;
let maxCount = dieRolls[1], minCount = dieRolls[1];

// Iterate over the dictionary to find max and min
for (let num in dieRolls) {
    if (dieRolls[num] > maxCount) {
        maxCount = dieRolls[num];
        maxNumber = num;
    }
    if (dieRolls[num] < minCount) {
        minCount = dieRolls[num];
        minNumber = num;
    }
}

// Display the result
console.log("Number that reached maximum times:", maxNumber, "with", maxCount, "rolls.");
console.log("Number that reached minimum times:", minNumber, "with", minCount, "rolls.");
