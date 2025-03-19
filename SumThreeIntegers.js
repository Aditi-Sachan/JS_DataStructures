// Function to find all unique triplets that sum up to zero
function findTriplets(arr) {
    let n = arr.length;
    let found = false;

    // Store triplets that sum to zero
    let triplets = [];

    // Check all possible combinations of 3 elements
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                // Check if sum is zero
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                    found = true;
                }
            }
        }
    }

    if (found) {
        return triplets;
    } else {
        return "No triplets found that sum to zero.";
    }
}

// Input: Array of integers
let arr = [0, -1, 2, -3, 1, -2, 3, 4];

// Get the result
let result = findTriplets(arr);

// Display the result
if (Array.isArray(result)) {
    console.log("Triplets whose sum is zero:", result);
} else {
    console.log(result);
}
