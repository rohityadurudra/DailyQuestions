//same question to find the leaders but using brute force which wil ltake O(n*n) time complexity

function findLeadersLeftToRight(arr) {
    const n = arr.length;
    const leaders = [];

    for (let i = 0; i < n; i++) {
        let isLeader = true;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                isLeader = false;
                break;
            }
        }
        if (isLeader) {
            leaders.push(arr[i]);
        }
    }

    return leaders;
}

// Example usage:
const array = [16, 17, 4, 3, 5, 2];
console.log(findLeadersLeftToRight(array)); // Output: [17, 5, 2]