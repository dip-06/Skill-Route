import React from 'react';

// Basic Visual Components using Tailwind CSS for concepts
const MemoryGridVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Contiguous Memory Allocation</div>
        <div className="flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-colors">
            {[10, 20, 30, 40, 50].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center border-r last:border-0 border-gray-200 dark:border-gray-700 p-4 transition-colors">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors">Index {idx}</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">{val}</div>
                    <div className="text-xs text-cyan-600 dark:text-cyan-500 font-mono transition-colors">0x100{idx * 4}</div>
                </div>
            ))}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-center transition-colors">
            Each element is placed right after the previous one in memory, allowing instant O(1) access by calculating its exact address.
        </div>
    </div>
);

const TwoPointerVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Two Pointer Technique (Meeting in Middle)</div>
        <div className="relative flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none rounded-lg overflow-hidden p-2 gap-2 transition-colors">
            {[1, 3, 5, 7, 9, 11].map((val, idx) => (
                <div key={idx} className={`w-12 h-12 flex items-center justify-center rounded-md font-bold text-lg transition-colors
          ${idx === 0 ? 'bg-indigo-100 dark:bg-indigo-900 border border-indigo-300 dark:border-indigo-500 text-indigo-700 dark:text-indigo-200' :
                        idx === 5 ? 'bg-emerald-100 dark:bg-emerald-900 border border-emerald-300 dark:border-emerald-500 text-emerald-700 dark:text-emerald-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-transparent'}`}
                >
                    {val}
                </div>
            ))}
        </div>
        <div className="flex w-full max-w-xs justify-between px-4 mt-2">
            <div className="flex flex-col items-center text-indigo-600 dark:text-indigo-400 transition-colors">
                <span className="text-xl">↑</span>
                <span className="font-mono font-bold">Left</span>
            </div>
            <div className="flex flex-col items-center text-emerald-600 dark:text-emerald-400 transition-colors">
                <span className="text-xl">↑</span>
                <span className="font-mono font-bold">Right</span>
            </div>
        </div>
    </div>
);

const SlidingWindowVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Fixed Sliding Window (Size K = 3)</div>
        <div className="relative flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none rounded-lg overflow-hidden p-2 gap-2 transition-colors">
            <div className="absolute top-1 bottom-1 left-2 w-[calc(3rem*3+1rem)] border-2 border-dashed border-amber-500 dark:border-amber-500 rounded-lg z-0 bg-amber-100/50 dark:bg-amber-500/10 pointer-events-none transition-colors"></div>
            {[2, 5, 1, 8, 2, 9].map((val, idx) => (
                <div key={idx} className="z-10 w-12 h-12 flex items-center justify-center rounded-md font-bold text-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-transparent transition-colors">
                    {val}
                </div>
            ))}
        </div>
        <div className="text-sm text-amber-600 dark:text-amber-400 max-w-sm text-center transition-colors">
            The "window" slides across the array one element at a time, moving Left out and Right in, removing the O(n²) loop.
        </div>
    </div>
);

const BinarySearchVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Binary Search (Target = 23)</div>
        <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="relative flex bg-white dark:bg-gray-900 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 rounded-lg p-2 gap-2 transition-colors">
                <div className="absolute -top-3 left-2 text-xs text-gray-500 dark:text-gray-400 transition-colors">Step 1: Mid is 16 (Too small, go Right)</div>
                {[2, 5, 8, 12, 16, 23, 38, 56, 72].map((val, idx) => (
                    <div key={idx} className={`w-10 h-10 flex flex-col items-center justify-center rounded-sm font-bold text-sm transition-colors border
            ${idx === 4 ? 'bg-rose-100 dark:bg-rose-900 border-rose-300 dark:border-rose-500 text-rose-700 dark:text-rose-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-transparent'}`}
                    >
                        {val}
                        {idx === 4 && <span className="absolute -bottom-5 text-xs text-rose-600 dark:text-rose-500 transition-colors">Mid</span>}
                        {idx === 0 && <span className="absolute -bottom-5 text-xs text-gray-500 transition-colors">Low</span>}
                        {idx === 8 && <span className="absolute -bottom-5 text-xs text-gray-500 transition-colors">High</span>}
                    </div>
                ))}
            </div>
            {/* Step 2 */}
            <div className="relative flex bg-white dark:bg-gray-900 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 rounded-lg p-2 gap-2 mt-4 opacity-75 transition-colors">
                <div className="absolute -top-3 left-2 text-xs text-gray-500 dark:text-gray-400 transition-colors">Step 2: Narrowed space</div>
                {[2, 5, 8, 12, 16, 23, 38, 56, 72].map((val, idx) => (
                    <div key={idx} className={`w-10 h-10 flex flex-col items-center justify-center rounded-sm font-bold text-sm transition-colors border
            ${idx < 5 ? 'opacity-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-transparent' : idx === 6 ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-300 dark:border-emerald-500 text-emerald-700 dark:text-emerald-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-transparent'}`}
                    >
                        {val}
                        {idx === 6 && <span className="absolute -bottom-5 text-xs text-emerald-600 dark:text-emerald-500 transition-colors">Mid(Too Big)</span>}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const SpiralMatrixVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Spiral Matrix Traversal</div>
        <div className="grid grid-cols-3 gap-2 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none rounded-lg relative transition-colors">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 15,15 L 85,15 L 85,50 L 15,50 L 15,85 L 50,85" fill="none" className="stroke-cyan-400/50 animate-pulse transition-colors" strokeWidth="3" strokeDasharray="4 2" stroke="currentColor" />
            </svg>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, idx) => (
                <div key={idx} className="w-12 h-12 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-transparent text-gray-900 dark:text-white font-bold z-10 transition-colors">
                    {val}
                </div>
            ))}
        </div>
        <div className="text-sm text-cyan-600 dark:text-cyan-400 mt-2 transition-colors">1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5</div>
    </div>
);

const GenericArrayVisualizer = ({ inputArray, outputArray, outputVariable, description, highlightIndices = [] }) => (
    <div className="flex flex-col items-center gap-4 my-6 w-full max-w-2xl mx-auto">
        {description && <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors text-center">{description}</div>}

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            {/* Input Section */}
            {inputArray && (
                <div className="flex flex-col items-center gap-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors">Input Array</div>
                    <div className="flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-colors max-w-full overflow-x-auto">
                        {inputArray.map((val, idx) => (
                            <div key={idx} className={`min-w-10 h-10 px-2 flex flex-col items-center justify-center border-r last:border-0 border-gray-200 dark:border-gray-700 font-bold text-sm md:text-base transition-colors
                                ${highlightIndices.includes(idx) ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300' : 'text-gray-900 dark:text-white'}`}>
                                <span className="text-[10px] text-gray-400 font-normal leading-none mb-1">{idx}</span>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Arrow */}
            {(outputArray || outputVariable !== undefined) && (
                <div className="text-gray-400 dark:text-gray-600 text-2xl hidden md:block transition-colors">➔</div>
            )}
            {(outputArray || outputVariable !== undefined) && (
                <div className="text-gray-400 dark:text-gray-600 text-2xl md:hidden transition-colors">↓</div>
            )}

            {/* Output Section */}
            {outputArray && (
                <div className="flex flex-col items-center gap-2">
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium transition-colors">Output Array</div>
                    <div className="flex bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-colors max-w-full overflow-x-auto">
                        {outputArray.map((val, idx) => (
                            <div key={idx} className="min-w-10 h-10 px-2 flex flex-col items-center justify-center border-r last:border-0 border-emerald-200 dark:border-emerald-800 font-bold text-sm md:text-base text-emerald-700 dark:text-emerald-400 transition-colors">
                                <span className="text-[10px] text-emerald-400/70 font-normal leading-none mb-1">{idx}</span>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {outputVariable !== undefined && (
                <div className="flex flex-col items-center gap-2">
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium transition-colors">Output</div>
                    <div className="h-10 px-6 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg shadow-sm dark:shadow-none font-bold text-lg text-emerald-700 dark:text-emerald-400 transition-colors">
                        {outputVariable}
                    </div>
                </div>
            )}
        </div>
    </div>
);

export const dsaTopicsContent = {
    "array-definition": {
        title: "What is an Array (Continuous Memory)",
        explanation: "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together, making it easier to calculate the position of each element by simply adding an offset to a base value (the memory location of the first element).",
        visual: <MemoryGridVisual />,
        code: {
            cpp: `// C++ snippet
int arr[5] = {10, 20, 30, 40, 50};
// The memory address of arr[0] could be 1000
// Since an integer takes 4 bytes, arr[1] will be at 1004, arr[2] at 1008, and so on.`,
            java: `// Java snippet
int[] arr = new int[]{10, 20, 30, 40, 50};
// Similar continuous heap memory concept applies to Java primitive arrays.`
        }
    },
    "array-indexing": {
        title: "Indexing (0-based)",
        explanation: "In most programming languages, arrays are 0-indexed. This means that the first element of the array is accessed via index 0, the second element via index 1, and so forth.",
        visual: <GenericArrayVisualizer inputArray={[100, 200, 300]} outputVariable={100} description="Accessing arr[0]" highlightIndices={[0]} />,
        code: {
            cpp: `// C++ snippet
int arr[] = {100, 200, 300};
cout << arr[0] << endl; // Prints 100
cout << arr[2] << endl; // Prints 300`,
            java: `// Java snippet
int[] colors = {1, 2, 3};
System.out.println(colors[0]); // 1
System.out.println(colors[1]); // 2
System.out.println(colors[2]); // 3`
        }
    },
    "size-vs-capacity": {
        title: "Size vs Capacity",
        explanation: "Size refers to the number of elements currently present in the array, while capacity refers to the maximum number of elements the array can hold before it needs to be resized.",
        visual: <GenericArrayVisualizer inputArray={[5, 8, "Empty", "Empty"]} outputVariable="Size: 2, Capacity: 4" description="Dynamic Array (Vector/ArrayList)" />,
        code: {
            cpp: `// C++ snippet using std::vector
#include <vector>
std::vector<int> vec;
vec.reserve(10); // Capacity becomes 10
vec.push_back(5); // Size is 1, Capacity is 10`,
            java: `// Java snippet
// ArrayList handles dynamic sizing
ArrayList<Integer> list = new ArrayList<>(10); // Initial capacity is 10
list.add(5); // Size is now 1
list.add(8); // Size is now 2`
        }
    },
    "array-traversal": {
        title: "Traversal using loops",
        explanation: "Traversal means visiting every element in the array exactly once, usually applying an operation such as printing or modifying the elements.",
        visual: <GenericArrayVisualizer inputArray={[10, 20, 30, 40, 50]} outputVariable="[Print] 10 20 30 40 50" description="Visiting elements sequentially from index 0 to N-1" highlightIndices={[0, 1, 2, 3, 4]} />,
        code: {
            cpp: `// C++ snippet
int arr[] = {1, 2, 3, 4, 5};
int n = sizeof(arr) / sizeof(arr[0]);

for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}`,
            java: `// Java snippet
int[] arr = {1, 2, 3, 4, 5};

// Advanced: Enhanced for-loop
for (int element : arr) {
    System.out.print(element + " ");
}`
        }
    },
    "time-complexity-basics": {
        title: "Time complexity basics: Access O(1), Traversal/Search O(n)",
        explanation: "Accessing an element by its index takes O(1) constant time because the memory address is calculated instantly. Traversing the entire array or sequentially searching for an element takes O(n) linear time, as you may have to visit every element in the worst case.",
        visual: <GenericArrayVisualizer inputArray={['A', 'B', 'C', 'D']} outputVariable="O(1) Access, O(N) Traversal" description="arr[2] -> 'C' is instant" highlightIndices={[2]} />,
        code: {
            cpp: `// Access: O(1)
int value = arr[3];

// Search/Traversal: O(n)
for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
        return i; // Found
    }
}`,
            java: `// Access: O(1)
int value = arr[3];

// Search/Traversal: O(n)
for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
        return i; // Found
    }
}`
        }
    },
    "print-array": {
        title: "Print array",
        explanation: "Printing an array involves iterating over each element and displaying its value.",
        visual: <GenericArrayVisualizer inputArray={[3, 6, 9]} outputVariable="Console: 3 6 9" />,
        code: {
            cpp: `// C++ snippet
void printArray(int arr[], int size) {
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}`,
            java: `// Java snippet (Utility)
import java.util.Arrays;
int[] arr = {10, 20, 30};
System.out.println(Arrays.toString(arr));`
        }
    },
    "take-input-output": {
        title: "Take input and output",
        explanation: "You can read values from standard input and assign them to an array, then print them back out.",
        visual: <GenericArrayVisualizer description="User inputs stream of values into Array" outputArray={[12, 45, 7, 9]} />,
        code: {
            cpp: `// C++ snippet
int arr[5];
// Input
for (int i = 0; i < 5; i++) {
    cin >> arr[i];
}
// Output
for (int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
}`,
            java: `// Java snippet
Scanner sc = new Scanner(System.in);
int[] arr = new int[5];

for(int i = 0; i < 5; i++) {
    arr[i] = sc.nextInt();
}`
        }
    },
    "find-max-min": {
        title: "Find max and min",
        explanation: "Initialize max or min variables with the first element, then iterate through the array to find elements strictly greater or smaller, updating the variables accordingly.",
        visual: <GenericArrayVisualizer inputArray={[5, 2, 9, 1, 7]} outputVariable="Max: 9, Min: 1" description="Scanning array to track highest and lowest values" highlightIndices={[2, 3]} />,
        code: {
            cpp: `// C++ snippet
int findMax(int arr[], int n) {
    int maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}`,
            java: `// Java snippet
int findMax(int[] arr) {
    int maxVal = arr[0]; // Assuming arr is non-empty
    for (int num : arr) {
        if (num > maxVal) maxVal = num;
    }
    return maxVal;
}`
        }
    },
    "sum-and-average": {
        title: "Sum and average",
        explanation: "Keep a running total while iterating through the array. The average is the sum divided by the number of elements.",
        visual: <GenericArrayVisualizer inputArray={[10, 20, 30]} outputVariable="Sum: 60, Avg: 20" />,
        code: {
            cpp: `// C++ snippet
long long sum = 0;
for(int i = 0; i < n; i++){
    sum += arr[i];
}
double average = (double)sum / n;`,
            java: `// Java snippet
int[] arr = {10, 20, 30, 40, 50};
int sum = 0;

for (int num : arr) sum += num;

double average = (double) sum / arr.length;
System.out.println("Sum: " + sum + ", Average: " + average);`
        }
    },
    "count-even-odd": {
        title: "Count even and odd",
        explanation: "Check the remainder of each element when divided by 2. If it's 0, it's even; otherwise, it's odd.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3, 4, 5]} outputVariable="Evens: 2, Odds: 3" description="2 and 4 are even; 1, 3, 5 are odd" highlightIndices={[1, 3]} />,
        code: {
            cpp: `// C++ snippet
int evens = 0, odds = 0;
for(int i = 0; i < n; i++){
    if(arr[i] % 2 == 0) evens++;
    else odds++;
}`,
            java: `// Java snippet
int evens = 0, odds = 0;
for(int num : arr) {
    if(num % 2 == 0) evens++;
    else odds++;
}`
        }
    },
    "reverse-array": {
        title: "Reverse array",
        explanation: "You can reverse an array efficiently using the two-pointer approach, swapping the start and end until they meet in the middle.",
        visual: <TwoPointerVisual />,
        code: {
            cpp: `// C++ snippet
void reverseArray(int arr[], int n) {
    int start = 0, end = n - 1;
    while (start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}`,
            java: `// Java snippet
void reverseArray(int[] arr) {
    int start = 0;
    int end = arr.length - 1;
    while(start < end) {
        // Swap
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}`
        }
    },
    "linear-search": {
        title: "Linear Search",
        explanation: "Linear search sequentially checks each element of the array until a match is found or the whole list has been searched. Time complexity: O(n).",
        visual: <GenericArrayVisualizer inputArray={[10, 20, 30, 40]} outputVariable="Index: 2" description="Target = 30" highlightIndices={[0, 1, 2]} />,
        code: {
            cpp: `// C++ snippet
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
            java: `// Java snippet
int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // Target found
        }
    }
    return -1; // Target not found
}`
        }
    },
    "binary-search": {
        title: "Binary Search (Sorted arrays only)",
        explanation: "Binary search finds the position of a target value within a sorted array. It compares the target value to the middle element, eliminating half the search space. Time complexity: O(log n).",
        visual: <BinarySearchVisual />,
        code: {
            cpp: `// C++ snippet
int binarySearch(int arr[], int low, int high, int x) {
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
            java: `// Java snippet
int binarySearch(int[] arr, int x) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
        }
    },
    "binary-search-logic": {
        title: "Binary Search specifics: low-high-mid logic, loop vs recursion",
        explanation: "Calculating mid as \`low + (high - low) / 2\` prevents integer overflow. Binary search can be written iteratively with loops (which is typically more space-efficient) or recursively.",
        visual: <GenericArrayVisualizer inputArray={['L', '.', 'M', '.', 'H']} description="Preventing Overflow: mid = low + (high - low) / 2" highlightIndices={[2]} />,
        code: {
            cpp: `// Recursive Binary Search C++
int recursiveBinarySearch(int arr[], int low, int high, int x) {
    if (high >= low) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) return recursiveBinarySearch(arr, low, mid - 1, x);
        return recursiveBinarySearch(arr, mid + 1, high, x);
    }
    return -1;
}`,
            java: `// Recursive Binary Search Java
int bs(int[] arr, int low, int high, int target) {
    if(low > high) return -1;
    int mid = low + (high - low) / 2;
    if(arr[mid] == target) return mid;
    if(arr[mid] > target) return bs(arr, low, mid-1, target);
    return bs(arr, mid+1, high, target);
}`
        }
    },
    "searching-practice": {
        title: "Practice: Element presence, first/last occurrence, count occurrences",
        explanation: "Variations of binary search can be used to find boundary occurrences of an element in a sorted array by continuing the search even after finding a match.",
        visual: <GenericArrayVisualizer inputArray={[2, 4, 10, 10, 10, 18, 20]} outputVariable="First Index: 2, Last Index: 4" description="Target = 10" highlightIndices={[2, 3, 4]} />,
        code: {
            cpp: `// C++ - Find first occurrence
int firstOccurrence(int arr[], int n, int x) {
    int low = 0, high = n - 1, res = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x) {
            res = mid;
            high = mid - 1; // Continue searching left
        } else if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return res;
}`,
            java: `// Java - Find first occurrence
int firstOccurrence(int[] arr, int x) {
    int low = 0, high = arr.length - 1, res = -1;
    while(low <= high) {
        int mid = low + (high - low) / 2;
        if(arr[mid] == x) {
            res = mid;
            high = mid - 1; // Search left
        } else if(arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return res;
}`
        }
    },
    "bubble-sort": {
        title: "Bubble Sort",
        explanation: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        visual: <GenericArrayVisualizer inputArray={[5, 3, 8, 4, 2]} outputArray={[2, 3, 4, 5, 8]} description="Repeatedly bubbling up the largest element to the end" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// C++ snippet
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
            java: `// Java snippet
void bubbleSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`
        }
    },
    "selection-sort": {
        title: "Selection Sort",
        explanation: "An algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.",
        visual: <GenericArrayVisualizer inputArray={[5, 3, 8, 4, 2]} outputArray={[2, 3, 4, 5, 8]} description="Finding overall min (2) and swapping with front (5)" highlightIndices={[0, 4]} />,
        code: {
            cpp: `// C++ snippet
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        swap(arr[min_idx], arr[i]);
    }
}`,
            java: `// Java snippet
void selectionSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}`
        }
    },
    "insertion-sort": {
        title: "Insertion Sort",
        explanation: "Builds the final sorted array one item at a time by picking elements from the unsorted part and inserting them into their correct sorted position.",
        visual: <GenericArrayVisualizer inputArray={[5, 3, 8, 4, 2]} outputArray={[2, 3, 4, 5, 8]} description="Card playing approach: inserting 3 before 5 in sorted left-half" highlightIndices={[1]} />,
        code: {
            cpp: `// C++ snippet
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
            java: `// Java snippet
void insertionSort(int arr[]) {
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`
        }
    },
    "sorting-focus": {
        title: "Focus: Swapping mechanisms, worst vs best cases, stability",
        explanation: "A sorting algorithm is stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array. Bubble and Insertion sorts are typically stable; Selection sort is not.",
        visual: <GenericArrayVisualizer inputArray={['5a', '3', '5b', '2']} outputArray={['2', '3', '5a', '5b']} description="Stability: 5a remains before 5b after sort" highlightIndices={[0, 2]} />,
        code: {
            cpp: `// Time Complexities
// Bubble Sort - Best: O(n), Worst: O(n^2)
// Selection Sort - Best: O(n^2), Worst: O(n^2)
// Insertion Sort - Best: O(n), Worst: O(n^2)`,
            java: `// Spatial Complexities
// Bubble Sort - O(1) in-place
// Selection Sort - O(1) in-place
// Insertion Sort - O(1) in-place`
        }
    },
    "two-pointer-usage": {
        title: "Use case: Sorted arrays or processing from opposite ends",
        explanation: "The two-pointer technique uses two indices to traverse the array from different locations, usually from the start and end towards the middle, operating mostly on strictly sorted arrays.",
        visual: <TwoPointerVisual />,
        code: {
            cpp: `// C++ snippet - Two Sum (Sorted Array)
bool hasTargetSum(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}`,
            java: `// Java snippet - Two Sum (Sorted Array)
boolean hasTargetSum(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while(left < right) {
        int sum = arr[left] + arr[right];
        if(sum == target) return true;
        else if(sum < target) left++;
        else right--;
    }
    return false;
}`
        }
    },
    "two-pointer-practice": {
        title: "Practice: Reverse array, target sum, move zeros, sort 0s-1s-2s",
        explanation: "Another popular problem is the Dutch National Flag problem (sorting an array of 0s, 1s, and 2s) which can be solved elegantly with three pointers.",
        visual: <GenericArrayVisualizer inputArray={[2, 0, 2, 1, 1, 0]} outputArray={[0, 0, 1, 1, 2, 2]} description="Dutch National Flag Problem (Sort Colors)" />,
        code: {
            cpp: `// C++ snippet - Sort Colors (0, 1, 2)
void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    while (mid <= high) {
        if (nums[mid] == 0) swap(nums[low++], nums[mid++]);
        else if (nums[mid] == 1) mid++;
        else swap(nums[mid], nums[high--]);
    }
}`,
            java: `// Java snippet - Sort Colors (0, 1, 2)
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            // Swap low and mid
            int t = nums[low]; nums[low] = nums[mid]; nums[mid] = t;
            low++; mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            // Swap mid and high
            int t = nums[mid]; nums[mid] = nums[high]; nums[high] = t;
            high--;
        }
    }
}`
        }
    },
    "sliding-window-usage": {
        title: "Use case: Subarrays or continuous elements (fixed or variable window)",
        explanation: "Sliding window helps optimize solutions that calculate something among all contiguous subarrays of a given size, transforming O(n^2) nested loops into a single O(n) loop.",
        visual: <SlidingWindowVisual />,
        code: {
            cpp: `// C++ snippet - Max Sum of Subarray of Size K
int maxSum(int arr[], int n, int k) {
    int maxSum = 0, windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;

    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = max(maxSum, windowSum);
    }
    return maxSum;
}`,
            java: `// Java snippet - Max Sum of Subarray of Size K
int maxSum(int[] arr, int k) {
    int max = 0, windowSum = 0;
    for(int i = 0; i < k; i++) windowSum += arr[i];
    max = windowSum;

    for(int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i-k];
        max = Math.max(max, windowSum);
    }
    return max;
}`
        }
    },
    "sliding-window-practice": {
        title: "Practice: Max sum, smallest subarray, longest subarray with condition",
        explanation: "In variable-sized sliding window problems, you continuously expand the right side of the window, and occasionally shrink the left side to satisfy the required condition.",
        visual: <GenericArrayVisualizer inputArray={[2, 3, 1, 2, 4, 3]} outputVariable="Len: 2 ([4,3])" description="Smallest subarray sum >= 7" highlightIndices={[4, 5]} />,
        code: {
            cpp: `// C++ snippet - Smallest Subarray Length with Sum >= target
int minSubArrayLen(int target, vector<int>& nums) {
    int left = 0, minLen = INT_MAX, windowSum = 0;
    for (int right = 0; right < nums.size(); right++) {
        windowSum += nums[right];
        while (windowSum >= target) {
            minLen = min(minLen, right - left + 1);
            windowSum -= nums[left++];
        }
    }
    return minLen == INT_MAX ? 0 : minLen;
}`,
            java: `// Java snippet - Smallest Subarray
int minSubArrayLen(int target, int[] nums) {
    int left = 0, minLen = Integer.MAX_VALUE, sum = 0;
    for(int right = 0; right < nums.length; right++) {
        sum += nums[right];
        while(sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }
    return minLen == Integer.MAX_VALUE ? 0 : minLen;
}`
        }
    },
    "subarray-rule": {
        title: "Rule: Subarrays must be continuous elements",
        explanation: "A subarray is a continuous part of array. Unlike subsequences which just preserve relative ordering, a subarray's elements are strictly adjacent.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3]} outputArray={[1, 2]} description="[1,2] is a subarray, [1,3] is a subsequence (not continuous)" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// Array: [1, 2, 3]
// Subarrays: [1], [2], [3], [1,2], [2,3], [1,2,3]
// Non-subarray: [1,3] (This is a subsequence!)`,
            java: `// Subarray sizes formula:
// Total subarrays = n * (n + 1) / 2`
        }
    },
    "prefix-sum-usage": {
        title: "Use case: Range sum queries and subarray sum problems",
        explanation: "Prefix sum is a precomputation technique where you create an auxiliary array storing the cumulative sum, which allows computing the sum of any continuous range in O(1) time.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3, 4]} outputArray={[1, 3, 6, 10]} description="Prefix Array precomputation for fast range queries" />,
        code: {
            cpp: `// C++ snippet - Prefix Sum array
vector<int> prefixSum(vector<int>& arr) {
    vector<int> prefix(arr.size());
    prefix[0] = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}`,
            java: `// Java snippet - Prefix Sum
int[] createPrefix(int[] arr) {
    int[] prefix = new int[arr.length];
    prefix[0] = arr[0];
    for(int i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i-1] + arr[i];
    }
    return prefix;
}`
        }
    },
    "prefix-sum-practice": {
        title: "Practice: Range sum from L to R, subarray sum equal to K",
        explanation: "To find the sum of elements from index L to R (inclusive), you compute `prefix[R] - prefix[L-1]`.",
        visual: <GenericArrayVisualizer inputArray={[1, 3, 6, 10]} outputVariable="10 - 1 = 9 (Sum of [2,3,4])" description="Querying sum from index 1 to 3: prefix[3] - prefix[0]" highlightIndices={[0, 3]} />,
        code: {
            cpp: `// C++ snippet
int getRangeSum(vector<int>& prefix, int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}`,
            java: `// Java snippet
int getRangeSum(int[] prefix, int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}`
        }
    },
    "kadanes-usage": {
        title: "Use case: Maximum subarray sum (Kadane's Algorithm)",
        explanation: "Kadane's algorithm evaluates the maximum sum contiguous subarray within a one-dimensional array. It's an elegant application of DP acting as a linear scan.",
        visual: <GenericArrayVisualizer inputArray={[-2, 1, -3, 4, -1, 2, 1, -5, 4]} outputVariable="Max Sum: 6 ([4, -1, 2, 1])" description="Kadane evaluates current sequence vs completely new sequence" highlightIndices={[3, 4, 5, 6]} />,
        code: {
            cpp: `// C++ snippet - Kadane's Algorithm
int maxSubArray(vector<int>& nums) {
    int max_so_far = nums[0];
    int curr_max = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        curr_max = max(nums[i], curr_max + nums[i]);
        max_so_far = max(max_so_far, curr_max);
    }
    return max_so_far;
}`,
            java: `// Java snippet - Kadane
public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`
        }
    },
    "kadanes-mindset": {
        title: "Mindset: Reset on negative sum, make a decision at every index",
        explanation: "The core philosophy is deciding whether to continue the existing contiguous segment by adding the current element, or to start a new segment completely.",
        visual: <GenericArrayVisualizer inputArray={[5, -8, 2, 3]} outputVariable="Sum dropped to < 0, sequence resets at 2" description="Resetting subarray search when sequence becomes detrimental" highlightIndices={[1]} />,
        code: {
            cpp: `// C++ variation
int maxSubArraySum(vector<int>& arr) {
    int max_val = INT_MIN, sum = 0;
    for (int x : arr) {
        sum += x;
        if (max_val < sum) max_val = sum;
        if (sum < 0) sum = 0; // Reset!
    }
    return max_val;
}`,
            java: `// Java variation
int maxSubArraySum(int[] arr) {
    int max_val = Integer.MIN_VALUE, sum = 0;
    for (int i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (max_val < sum) max_val = sum;
        if (sum < 0) sum = 0; // Reset
    }
    return max_val;
}`
        }
    },
    "hashing-usage": {
        title: "Use case: Frequency counting, duplicate detection, fast lookups",
        explanation: "A Hash Map or Hash Set can reduce nested loops to single passes by storing previously seen elements, leveraging O(1) lookup speeds.",
        visual: <GenericArrayVisualizer inputArray={[2, 7, 11, 15]} outputVariable="Indices: [0, 1]" description="Two Sum with Hash Map (Target = 9)" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// C++ snippet - Two Sum Hash
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numMap;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (numMap.count(complement)) {
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;
    }
    return {};
}`,
            java: `// Java snippet - Two Sum Hash
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for(int i = 0; i < nums.length; i++) {
        int comp = target - nums[i];
        if(map.containsKey(comp)) {
            return new int[]{map.get(comp), i};
        }
        map.put(nums[i], i);
    }
    return new int[]{};
}`
        }
    },
    "hashing-practice": {
        title: "Practice: Two sum, majority element, first repeating, longest 0-sum subarray",
        explanation: "Combining Prefix Sum and Hashing solves complex subarray questions in linear time.",
        visual: <GenericArrayVisualizer inputArray={[1, -1, 3, 2, -2, -3, 3]} outputVariable="Max Length: 6" description="Longest Subarray with 0-Sum map prefix hashes" highlightIndices={[1, 2, 3, 4, 5, 6]} />,
        code: {
            cpp: `// C++ snippet - Max subarray length sum 0
int maxLen(vector<int>& A, int n) {
    unordered_map<int, int> presum;
    int sum = 0, maxi = 0;
    for(int i = 0; i < n; i++) {
        sum += A[i];
        if(sum == 0) maxi = i + 1;
        else {
            if(presum.find(sum) != presum.end())
                maxi = max(maxi, i - presum[sum]);
            else presum[sum] = i;
        }
    }
    return maxi;
}`,
            java: `// Java snippet - Max subarray length sum 0
int maxLen(int arr[], int n) {
    HashMap<Integer, Integer> map = new HashMap<>();
    int sum = 0, max_len = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == 0) max_len = i + 1;
        Integer prev = map.get(sum);
        if (prev != null) max_len = Math.max(max_len, i - prev);
        else map.put(sum, i);
    }
    return max_len;
}`
        }
    },
    "merge-intervals": {
        title: "Merge intervals",
        explanation: "Sort the intervals by their starting times. Then iterate over them, comparing the current interval with the continuously merging tail of processed intervals.",
        visual: <GenericArrayVisualizer inputArray={['[1,3]', '[2,6]', '[8,10]']} outputArray={['[1,6]', '[8,10]']} description="Merging overlapping time intervals" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// C++ snippet
vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if(intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    merged.push_back(intervals[0]);
    for(int i = 1; i < intervals.size(); i++) {
        if(merged.back()[1] >= intervals[i][0])
            merged.back()[1] = max(merged.back()[1], intervals[i][1]);
        else
            merged.push_back(intervals[i]);
    }
    return merged;
}`,
            java: `// Java snippet
public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    LinkedList<int[]> merged = new LinkedList<>();
    for (int[] interval : intervals) {
        if (merged.isEmpty() || merged.getLast()[1] < interval[0]) {
            merged.add(interval);
        } else {
            merged.getLast()[1] = Math.max(merged.getLast()[1], interval[1]);
        }
    }
    return merged.toArray(new int[merged.size()][]);
}`
        }
    },
    "rearrange-array": {
        title: "Rearrange arrays",
        explanation: "Problems that require arranging arrays logically (e.g., swapping positives/negatives, moving zeroes). Often rely on two-pointer mechanics.",
        visual: <GenericArrayVisualizer inputArray={[0, 1, 0, 3, 12]} outputArray={[1, 3, 12, 0, 0]} description="Moving all zeroes to the end" highlightIndices={[0, 2]} />,
        code: {
            cpp: `// C++ - Move zeroes to end
void moveZeroes(vector<int>& nums) {
    int insertPos = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != 0) {
            nums[insertPos++] = nums[i];
        }
    }
    while(insertPos < nums.size()) {
        nums[insertPos++] = 0;
    }
}`,
            java: `// Java - Move zeroes
public void moveZeroes(int[] nums) {
    int ptr = 0;
    for(int num : nums) {
        if(num != 0) nums[ptr++] = num;
    }
    while(ptr < nums.length) nums[ptr++] = 0;
}`
        }
    },
    "missing-repeating-number": {
        title: "Missing & repeating numbers",
        explanation: "Several clever ways exist: mathematics formula (math tricks), XOR properties, or placing numbers in their exact index iteratively.",
        visual: <GenericArrayVisualizer inputArray={[3, 0, 1]} outputVariable="Missing: 2" description="Array containing elements [0..N]. N=3, missing 2" />,
        code: {
            cpp: `// C++ snippet - Find Missing Number (0 to n)
int missingNumber(vector<int>& nums) {
    int expectedSum = nums.size() * (nums.size() + 1) / 2;
    int actualSum = 0;
    for (int num : nums) actualSum += num;
    return expectedSum - actualSum;
}`,
            java: `// Java snippet - Missing Number XOR
public int missingNumber(int[] nums) {
    int missing = nums.length;
    for(int i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}`
        }
    },
    "next-permutation": {
        title: "Next permutation",
        explanation: "Find the next lexicographical sequence of an array by finding the first break in descending order from the end, then swapping and reversing the suffix.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3]} outputArray={[1, 3, 2]} description="Next lexicographically greater arrangement" />,
        code: {
            cpp: `// C++ snippet
void nextPermutation(vector<int>& nums) {
    int i = nums.size() - 2;
    while(i >= 0 && nums[i] >= nums[i+1]) i--;
    if(i >= 0) {
        int j = nums.size() - 1;
        while(nums[j] <= nums[i]) j--;
        swap(nums[i], nums[j]);
    }
    reverse(nums.begin() + i + 1, nums.end());
}`,
            java: `// Java snippet
public void nextPermutation(int[] nums) {
    int i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) i--;
    if (i >= 0) {
        int j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
}
// Helpers swap & reverse omitted for brevity`
        }
    },
    "cyclic-sort-usage": {
        title: "Use case: Numbers fall within the range of 1 to N",
        explanation: "If you have an array containing numbers in a given range, Cyclic Sort puts each number in its correct placeholder index in O(n) without extra space.",
        visual: <GenericArrayVisualizer inputArray={[3, 1, 5, 4, 2]} outputArray={[1, 2, 3, 4, 5]} description="Sending elements to index = value - 1" />,
        code: {
            cpp: `// C++ snippet - Cyclic Sort
void cyclicSort(vector<int>& arr) {
    int i = 0;
    while (i < arr.size()) {
        int correctIndex = arr[i] - 1; // 1-based index mapping
        if (arr[i] > 0 && arr[i] <= arr.size() && arr[i] != arr[correctIndex]) {
            swap(arr[i], arr[correctIndex]);
        } else {
            i++;
        }
    }
}`,
            java: `// Java snippet - Cyclic Sort
void cyclicSort(int[] arr) {
    int i = 0;
    while (i < arr.length) {
        int correctIndex = arr[i] - 1;
        if (arr[i] > 0 && arr[i] <= arr.length && arr[i] != arr[correctIndex]) {
            int t = arr[i]; arr[i] = arr[correctIndex]; arr[correctIndex] = t;
        } else {
            i++;
        }
    }
}`
        }
    },
    "cyclic-sort-practice": {
        title: "Practice: Find missing number, find duplicate number",
        explanation: "Once sorted cyclically, any index `i` that doesn't hold `i + 1` indicates either a duplicated or a missing number depending on the requirements.",
        visual: <GenericArrayVisualizer inputArray={[1, 3, 4, 2, 2]} outputArray={[1, 2, 3, 4, 2]} outputVariable="Duplicate: 2 (at index 4)" description="Element 2 maps to position, pushing original out" highlightIndices={[4]} />,
        code: {
            cpp: `// C++ snippet - Find all numbers disappeared
vector<int> findDisappearedNumbers(vector<int>& nums) {
    for (int i = 0; i < nums.size(); i++) {
        int index = abs(nums[i]) - 1;
        if (nums[index] > 0) nums[index] = -nums[index];
    }
    vector<int> res;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] > 0) res.push_back(i + 1);
    }
    return res;
}`,
            java: `// Java snippet - Find Duplicate
public int findDuplicate(int[] nums) {
    while(nums[0] != nums[nums[0]]) {
        int next = nums[nums[0]];
        nums[nums[0]] = nums[0];
        nums[0] = next;
    }
    return nums[0];
}`
        }
    },
    "row-wise-traversal": {
        title: "Row-wise traversal",
        explanation: "A standard matrix iteration where the outer loop traverses the rows, and the inner loop iterates over columns.",
        visual: <GenericArrayVisualizer inputArray={['[1,2]', '[3,4]']} outputVariable="1 → 2 → 3 → 4" description="Traveling left-to-right across rows first" />,
        code: {
            cpp: `// C++ snippet
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
}`,
            java: `// Java snippet
int[][] matrix = {{1, 2}, {3, 4}};
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[0].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
}`
        }
    },
    "col-wise-traversal": {
        title: "Column-wise traversal",
        explanation: "Here, the outer loop advances the column index, while the inner loop travels down the rows.",
        visual: <GenericArrayVisualizer inputArray={['[1,2]', '[3,4]']} outputVariable="1 → 3 → 2 → 4" description="Traveling top-to-bottom down columns first" />,
        code: {
            cpp: `// C++ snippet
int matrix[2][2] = {{1, 2}, {3, 4}};
for (int j = 0; j < 2; j++) {
    for (int i = 0; i < 2; i++) {
        cout << matrix[i][j] << " ";
    }
}`,
            java: `// Java snippet
int[][] matrix = {{1, 2}, {3, 4}};
for (int j = 0; j < matrix[0].length; j++) {
    for (int i = 0; i < matrix.length; i++) {
        System.out.print(matrix[i][j] + " ");
    }
}`
        }
    },
    "spiral-matrix": {
        title: "Spiral matrix traversal",
        explanation: "Navigating the matrix boundary by maintaining 4 pointers (top, bottom, left, right) and curling inwards layer by layer.",
        visual: <SpiralMatrixVisual />,
        code: {
            cpp: `// C++ snippet
vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> res;
    if(matrix.empty()) return res;
    int top = 0, bottom = matrix.size()-1;
    int left = 0, right = matrix[0].size()-1;
    while(top <= bottom && left <= right) {
        for(int i = left; i <= right; i++) res.push_back(matrix[top][i]);
        top++;
        for(int i = top; i <= bottom; i++) res.push_back(matrix[i][right]);
        right--;
        if(top <= bottom) {
            for(int i = right; i >= left; i--) res.push_back(matrix[bottom][i]);
            bottom--;
        }
        if(left <= right) {
            for(int i = bottom; i >= top; i--) res.push_back(matrix[i][left]);
            left++;
        }
    }
    return res;
}`,
            java: `// Java snippet
public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> res = new ArrayList<>();
    if(matrix.length == 0) return res;
    int top = 0, bottom = matrix.length - 1;
    int left = 0, right = matrix[0].length - 1;
    while(top <= bottom && left <= right) {
        for(int i = left; i <= right; i++) res.add(matrix[top][i]);
        top++;
        for(int i = top; i <= bottom; i++) res.add(matrix[i][right]);
        right--;
        if(top <= bottom) {
            for(int i = right; i >= left; i--) res.add(matrix[bottom][i]);
            bottom--;
        }
        if(left <= right) {
            for(int i = bottom; i >= top; i--) res.add(matrix[i][left]);
            left++;
        }
    }
    return res;
}`
        }
    },
    "search-sorted-matrix": {
        title: "Search in a sorted matrix",
        explanation: "If rows and columns are sorted, we can search in O(m+n) by starting from the top-right corner, moving down if the target is larger, and left if the target is smaller.",
        code: {
            cpp: `// C++ snippet
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int row = 0, col = matrix[0].size() - 1;
    while (row < matrix.size() && col >= 0) {
        if (matrix[row][col] == target) return true;
        if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`,
            java: `// Java snippet
public boolean searchMatrix(int[][] matrix, int target) {
    if(matrix == null || matrix.length == 0) return false;
    int row = 0, col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] == target) return true;
        else if(matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`
        }
    }
};
