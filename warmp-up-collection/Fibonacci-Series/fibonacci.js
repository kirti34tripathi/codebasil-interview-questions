/**
 * Naive Approach
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {Number} n
 * @return {Number} The Nth term.
 */

function fibSequence(n) {
    for(let i = 0; i < n; i++) {
      console.log(i , fib(i));
    }
}
  
function fib(n) {
    if( n <= 0) return 0;
    if( n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

// test-naive-fibSequence
// console.log(fibSequence(9));