function hasContiguousSum(arr, targetSum) {
    let currentSum = arr[0];
    let start = 0;

    for (let i = 1; i <= arr.length; i++) {
        while (currentSum > targetSum && start < i) {
            currentSum -= arr[start];
            start++;
        }
        if (currentSum === targetSum) {
            return true;
        }
        if (i < arr.length) {
            currentSum += arr[i];
        }
    }

    return false;
}
