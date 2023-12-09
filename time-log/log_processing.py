

with open("timeTJ.txt", "r") as file:
    totalTime = 0
    length = 0
    for line in file:
        totalTime += float(line.strip())
        length += 1
    totalTime /= 1000000000
    print(f"TJ total time = {totalTime} seconds", end=" ")
    print(f"TJ average time = {totalTime/length} seconds")


with open("timeTS.txt", "r") as file:
    totalTime = 0
    length = 0
    for line in file:
        totalTime += float(line.strip())
        length += 1
    totalTime /= 1000000000
    print(f"TS total time = {totalTime} seconds", end=" ")
    print(f"TS average time = {totalTime/length} seconds")