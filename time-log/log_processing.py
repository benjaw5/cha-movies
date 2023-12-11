import sys

def processTJ(filepaths):
    totalTime = 0
    length = 0
    for fp in filepaths:
        with open(fp, "r") as file:
            for line in file:
                totalTime += float(line.strip())
                length += 1
    totalTime /= 1000000
    print(f"TJ total time = {totalTime} ms", end=" ")
    print(f"TJ average time = {totalTime/length} ms")


def processTS(filepaths):
    totalTime = 0
    length = 0
    for fp in filepaths:
        with open(fp, "r") as file:
            for line in file:
                totalTime += float(line.strip())
                length += 1
    totalTime /= 1000000
    print(f"TS total time = {totalTime} ms", end=" ")
    print(f"TS average time = {totalTime/length} ms")
    
 
if __name__ == "__main__":
    filepathsTJ = [sys.argv[1]]
    filepathsTS = [sys.argv[2]]
    if len(sys.argv) > 3:
        filepathsTJ.append(sys.argv[3])
        filepathsTS.append(sys.argv[4])

    processTJ(filepathsTJ)
    processTS(filepathsTS)