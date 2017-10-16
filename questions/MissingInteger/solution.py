# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 2.7
    
    if not A:
        return 0
    
    size = len(A)
    max = A[0]
    
    for a in A:
        if a > max:
            max = a
    if max <= 0:
        return 1
        
    missing = [False]* (max+1)
    for a in A:
        if a < 0:
            continue
        missing[a] = True
        
    for i in range(1, max+1):
        if missing[i] == False:
            return i
    
    return max+1