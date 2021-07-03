// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    const MAX_PASSING = 1000000000;
    const onesByIdx = {[N]: 0};
    let counter = 0;
    for(let i = N-1 ; i >= 0 ; i--){
        if(A[i] === 1){
            onesByIdx[i] = onesByIdx[i+1] +1;
        }
        else {
            onesByIdx[i] = onesByIdx[i+1];
            counter += onesByIdx[i+1];
            if(counter > MAX_PASSING){
                return -1
            }
        }
    }

    return counter;
}
