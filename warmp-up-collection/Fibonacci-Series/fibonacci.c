/* C Program to Find Nth Fibonacci Sequence using Recursion */

#include<stdio.h>
int fib(int num);

//Brute Force solution of Fibonacci Sequence in C
int fib(int num)
{
   	if ( num == 0 )
    	    return 0;
   	else if ( num == 1 )
    	    return 1;
   	else
    	    return ( fib(num - 1) + fib(num - 2) );
}

int main()
{
	int N, result;
	printf("\n To find Nth Fibonacci Number in the series, please enter N:  ");
	scanf("%d", &N);
	result = fib(N);
	printf("\n %d Fibonacci Number = %d", N, result);
	return 0;
}
