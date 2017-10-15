# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N):
    # write your code in Python 2.7
    opener = 0
    max_counter = 0
    counter = 0
    
    while N:
        c = bin(N)[2:][-1]
        
        if c == '1' and not opener:
            opener = 1
            
        if c == '1' and opener:
            if max_counter < counter:
                max_counter = counter
            counter = 0
            
        if c == '0' and opener:
            counter += 1

        N = N >> 1
    
    return max_counter