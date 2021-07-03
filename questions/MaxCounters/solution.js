// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const M = A.length;
    let counters = {};
    let max = 0;
    let lastMax = 0;
    
    A.forEach((a, k) => {
        const x = A[k]; // equals to a
        if(x >= 1 && x <= N){
            const prev = counters[x-1]? counters[x-1]: 0;
            counters[x-1] = prev +1;
            max = Math.max(max, lastMax + counters[x-1]);
        }
        else if(x == N+1){
            counters = {};
            lastMax = max;
        }
    });

    const result = [];
    for(let i = 0 ; i < N ; i++){
        if(counters[i] !== undefined){
            result[i] = counters[i] + lastMax;
        }
        else {
            result[i] = lastMax;
        }
    }
    return result

}
