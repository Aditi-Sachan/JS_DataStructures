// a. Generate 10 Random 3 Digit Numbers
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * 900) + 100; // 100 to 999
        numbers.push(randomNum);
    }
    return numbers;
}

// b. Store the numbers in an array
let randomNumbers = generateRandomNumbers();
console.log("Generated Random Numbers:", randomNumbers);

// c. Find 2nd Largest and 2nd Smallest without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // Check for largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Check for smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return {
        secondLargest: secondLargest,
        secondSmallest: secondSmallest
    };
}

// Find 2nd largest and 2nd smallest without sorting
let resultWithoutSorting = findSecondLargestAndSmallest(randomNumbers);
console.log("2nd Largest Number (Without Sorting):", resultWithoutSorting.secondLargest);
console.log("2nd Smallest Number (Without Sorting):", resultWithoutSorting.secondSmallest);

// d. Sort the array to find 2nd Largest and 2nd Smallest
function findUsingSort(arr) {
    // Sort the array in ascending order
    let sortedArr = arr.slice().sort(function (a, b) {
        return a - b;
    });

    return {
        secondSmallest: sortedArr[1],
        secondLargest: sortedArr[sortedArr.length - 2],
        sortedArray: sortedArr
    };
}

// Get the sorted result
let resultWithSorting = findUsingSort(randomNumbers);
console.log("Sorted Array:", resultWithSorting.sortedArray);
console.log("2nd Smallest Number (With Sorting):", resultWithSorting.secondSmallest);
console.log("2nd Largest Number (With Sorting):", resultWithSorting.secondLargest);
