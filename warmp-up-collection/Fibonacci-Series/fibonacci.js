/**
 * Naive Approach
 * Time Complexity: O(2^n)
 * Space Complexity: O(1)
 * @param {Number} n
 * @return {Number} The Nth term.
 */

// Compute the nth Fibonacci number by going through Brute Force Approach
// We assume that n >= 0.

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

/**
 * Top down dynamic Approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Number} n
 * @return {Number} The Nth term.
 */

// Compute the nth Fibonacci number recursively.
// Optimized by caching subproblem results.

function fib(n) {
    if (n < 2) {
        return n;
    }
    let cache = new Array(n + 1);
    for(let i = 0; i < cache.length; i++) {
        cache[i] = -1;
    }
    cache[0] = 0;
    cache[1] = 1;
    return fibTopDown(n, cache);
}

function fibTopDown(n, cache) {
    if(cache[n] >= 0) {
        return cache[n];
    } else {
        cache[n] = fibTopDown(n - 1, cache) + fibTopDown(n - 2, cache);
        return cache[n];
    }
}


/**
 * Bottom Up dynamic Approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Number} n
 * @return {Number} The Nth term.
 */

// Compute the nth Fibonacci number recursively.
// Optimized by caching subproblem results.

function fib(n) {
    if(n === 0) return 0;
    
    let memo = new Array(n + 1);
    memo[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
