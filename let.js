function generateArray(size, min = 1, max = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    let left = arr.slice(1).filter(x => x <= pivot);
    let right = arr.slice(1).filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return [...result, ...left, ...right];
}

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        arr[mid] < target ? low = mid + 1 : high = mid - 1;
    }
    return -1;
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return str === reverseString(str);
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

function main() {
    let arr = generateArray(10, 1, 100);
    console.log("Original Array:", arr);
    console.log("Quick Sort:", quickSort([...arr]));
    console.log("Merge Sort:", mergeSort([...arr]));
    console.log("Max Element:", findMax(arr));
    console.log("Min Element:", findMin(arr));
    console.log("Sum of Elements:", sumArray(arr));
    console.log("Fibonacci Sequence:", fibonacci(10));
    console.log("Factorial of 5:", factorial(5));
    console.log("GCD of 56 and 98:", gcd(56, 98));
    console.log("LCM of 15 and 20:", lcm(15, 20));
    console.log("Palindrome Check:", isPalindrome("racecar"));
    console.log("Reversed String:", reverseString("hello"));
    console.log("Unique Elements:", removeDuplicates(arr));
    console.log("Occurrences of 5:", countOccurrences(arr, 5));
    console.log("Chunked Array (size 3):", chunkArray(arr, 3));
    console.log("Shuffled Array:", shuffleArray([...arr]));
    console.log("Flattened Array:", flattenArray([[1, 2, [3, 4]], 5, [6, 7]]));
}

main();
