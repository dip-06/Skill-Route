const dsaLearningPath = {
  hero: {
    title: "DSA Learning Router",
    subtitle:
      "Select a topic card below to view its detailed, phase-wise roadmap. You can click on the roadmap points to see practical code examples.",
    audience: "Current focus: Arrays only."
  },
  topics: [
    {
      id: "arrays",
      title: "Arrays",
      shortDescription:
        "A complete phase-wise roadmap for arrays, from beginner basics to interview-level problem solving."
    }
  ],
  content: {
    arrays: {
      title: "Arrays Roadmap",
      intro:
        "Mastering arrays is the foundation of DSA. Follow this phased approach: start with fundamentals, build logic patterns, and advance to interview-level problem solving.",
      phases: [
        {
          id: "phase-1",
          title: "PHASE 1: ARRAY BASICS (Beginner)",
          sections: [
            {
              heading: "1) Crystal Clear Concepts",
              points: [
                { id: "array-definition", title: "What is an Array (Continuous Memory)" },
                { id: "array-indexing", title: "Indexing (0-based)" },
                { id: "size-vs-capacity", title: "Size vs Capacity" },
                { id: "array-traversal", title: "Traversal using loops" },
                { id: "time-complexity-basics", title: "Time complexity basics: Access O(1), Traversal/Search O(n)" }
              ]
            },
            {
              heading: "2) Must-do Basic Operations",
              points: [
                { id: "print-array", title: "Print array" },
                { id: "take-input-output", title: "Take input and output" },
                { id: "find-max-min", title: "Find max and min" },
                { id: "sum-and-average", title: "Sum and average" },
                { id: "count-even-odd", title: "Count even and odd" },
                { id: "reverse-array", title: "Reverse array" }
              ]
            }
          ],
          note: "Mindset: Viewing every element once = O(n)."
        },
        {
          id: "phase-2",
          title: "PHASE 2: LOGIC BUILDING (Beginner -> Intermediate)",
          sections: [
            {
              heading: "3) Searching Techniques",
              points: [
                { id: "linear-search", title: "Linear Search" },
                { id: "binary-search", title: "Binary Search (Sorted arrays only)" },
                { id: "binary-search-logic", title: "Binary Search specifics: low-high-mid logic, loop vs recursion" },
                { id: "searching-practice", title: "Practice: Element presence, first/last occurrence, count occurrences" }
              ]
            },
            {
              heading: "4) Sorting Basics (Conceptual Understanding)",
              points: [
                { id: "bubble-sort", title: "Bubble Sort" },
                { id: "selection-sort", title: "Selection Sort" },
                { id: "insertion-sort", title: "Insertion Sort" },
                { id: "sorting-focus", title: "Focus: Swapping mechanisms, worst vs best cases, basic stability concepts" }
              ]
            }
          ]
        },
        {
          id: "phase-3",
          title: "PHASE 3: INTERMEDIATE ARRAY PATTERNS (Very Important)",
          sections: [
            {
              heading: "5) Two Pointer Technique",
              points: [
                { id: "two-pointer-usage", title: "Use case: Sorted arrays or processing from opposite ends" },
                { id: "two-pointer-practice", title: "Practice: Reverse array, pair with target sum, move zeros to end, sort 0s-1s-2s" }
              ]
            },
            {
              heading: "6) Sliding Window Technique",
              points: [
                { id: "sliding-window-usage", title: "Use case: Subarrays or continuous elements (fixed or variable window)" },
                { id: "sliding-window-practice", title: "Practice: Max sum subarray of size K, smallest subarray with sum >= X, longest subarray with condition" },
                { id: "subarray-rule", title: "Rule: Subarrays must be continuous elements" }
              ]
            },
            {
              heading: "7) Prefix Sum",
              points: [
                { id: "prefix-sum-usage", title: "Use case: Range sum queries and subarray sum problems" },
                { id: "prefix-sum-practice", title: "Practice: Range sum from L to R, subarray sum equal to K, equilibrium index" }
              ]
            }
          ]
        },
        {
          id: "phase-4",
          title: "PHASE 4: ADVANCED ARRAY CONCEPTS",
          sections: [
            {
              heading: "8) Kadane's Algorithm",
              points: [
                { id: "kadanes-usage", title: "Use case: Maximum subarray sum" },
                { id: "kadanes-mindset", title: "Mindset: Reset on negative sum, make a decision at every index" }
              ]
            },
            {
              heading: "9) Hashing with Arrays",
              points: [
                { id: "hashing-usage", title: "Use case: Frequency counting, duplicate detection, fast lookups" },
                { id: "hashing-practice", title: "Practice: Two sum, majority element, first repeating element, longest subarray with sum 0" }
              ]
            },
            {
              heading: "10) Sorting + Logic Combined",
              points: [
                { id: "merge-intervals", title: "Merge intervals" },
                { id: "rearrange-array", title: "Rearrange arrays" },
                { id: "missing-repeating-number", title: "Missing & repeating numbers" },
                { id: "next-permutation", title: "Next permutation" }
              ]
            }
          ]
        },
        {
          id: "phase-5",
          title: "PHASE 5: ADVANCED PATTERNS (Interview Level)",
          sections: [
            {
              heading: "11) Cyclic Sort Pattern",
              points: [
                { id: "cyclic-sort-usage", title: "Use case: Numbers fall within the range of 1 to N" },
                { id: "cyclic-sort-practice", title: "Practice: Find missing number, find duplicate number, find all missing numbers" }
              ]
            },
            {
              heading: "12) Matrices (2D Arrays)",
              points: [
                { id: "row-wise-traversal", title: "Row-wise traversal" },
                { id: "col-wise-traversal", title: "Column-wise traversal" },
                { id: "spiral-matrix", title: "Spiral matrix traversal" },
                { id: "search-sorted-matrix", title: "Search in a sorted matrix" }
              ]
            }
          ]
        }
      ]
    }
  }
}

export default dsaLearningPath
