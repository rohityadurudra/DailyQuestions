//C Code: Find Missing Number Without Using Sum Formula

#include <stdio.h>
#include <stdbool.h>

// Function to find the missing number
int findMissingNumber(int arr[], int size) {
    int n = size + 1; // Since one number is missing
    for (int i = 1; i <= n; i++) {
        bool found = false;
        for (int j = 0; j < size; j++) {
            if (arr[j] == i) {
                found = true;
                break;
            }
        }
        if (!found) {
            return i; // Missing number found
        }
    }
    return -1; // If no missing number is found (should not happen in correct input)
}

int main() {
    int arr[] = {1, 2, 4, 6, 3, 7, 8};
    int size = sizeof(arr) / sizeof(arr[0]);
    int missing = findMissingNumber(arr, size);
    printf("Missing number is: %d\n", missing);
    return 0;
}

//⏱️ Time Complexity:
// Time: O(n²) in the worst case, due to the nested loops

// Space: O(1), as no additional space is used