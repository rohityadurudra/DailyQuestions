// Optimization (Optional):
// If you want to improve the time complexity to O(n), 
// you can use a hash table or an auxiliary array to keep track of the numbers present. 
// Here's how

#include <stdio.h>
#include <stdbool.h>

int findMissingNumberOptimized(int arr[], int size) {
    int n = size + 1;
    bool present[n + 1]; // Create a boolean array to mark present numbers
    for (int i = 0; i <= n; i++) {
        present[i] = false;
    }

    // Mark the numbers present in the array
    for (int i = 0; i < size; i++) {
        present[arr[i]] = true;
    }

    // Find the number that is not marked
    for (int i = 1; i <= n; i++) {
        if (!present[i]) {
            return i;
        }
    }

    return -1; // If no missing number is found
}

int main() {
    int arr[] = {1, 2, 4, 6, 3, 7, 8};
    int size = sizeof(arr) / sizeof(arr[0]);
    int missing = findMissingNumberOptimized(arr, size);
    printf("Missing number is: %d\n", missing);
    return 0;
}
//This optimized version reduces the time complexity to O(n) by using additional space.


