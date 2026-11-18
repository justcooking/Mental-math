export const chapters = [
  {
    id: 1,
    title: 'Foundations',
    level: 'Beginner',
    focus: 'Build the foundations of mental calculation.',
    lessons: [
      {
        id: '1.1',
        title: 'Left-to-Right Calculation',
        skill:
          'Learn to process arithmetic from left to right instead of relying on the traditional right-to-left written approach.',

        // Teaching flow — drives the lesson UI.
        // Each step is a typed teaching beat: narration, worked-example, or insight.
        steps: [
          {
            type: 'narration',
            text: 'Written arithmetic follows a paper-friendly algorithm: start with the ones, carry when needed, and work toward the left. That order was designed for pencil and paper, where intermediate numbers can be written down.',
          },
          {
            type: 'narration',
            text: 'In your head, you don’t have paper to hold intermediate notes. Instead, you hold a single running total. By calculating left to right — adding the largest parts first — your running total stays meaningful from the very first step.',
          },

          // Curriculum original examples:
          // 42 + 3, 42 + 30, 42 + 300
          {
            type: 'worked-example',
            label: 'Single-digit addition',
            expression: '42 + 3',
            steps: [
              {
                addedChunk: '3',
                calculation: '42 + 3',
                result: '45',
                explanation: 'Start with 42 as your anchor and add 3 directly: 42 + 3 = 45.',
              },
            ],
          },
          {
            type: 'worked-example',
            label: 'Adding tens',
            expression: '42 + 30',
            steps: [
              {
                addedChunk: '30',
                calculation: '42 + 30',
                result: '72',
                explanation: 'Keep 42 in your head and add 30. The running total becomes 72.',
              },
            ],
          },
          {
            type: 'worked-example',
            label: 'Adding hundreds',
            expression: '42 + 300',
            steps: [
              {
                addedChunk: '300',
                calculation: '42 + 300',
                result: '342',
                explanation: 'Keep 42 in your head and add 300. The running total becomes 342.',
              },
            ],
          },

          {
            type: 'insight',
            heading: 'The mental math rule',
            text: 'In mental arithmetic, we do not tear both numbers into separate place-value piles. Keep the first number intact as your anchor, then add the largest part of the second number first.',
          },

          // Generalization examples:
          // 47 + 32, 342 + 215
          {
            type: 'worked-example',
            label: 'Two-digit addition',
            expression: '47 + 32',
            steps: [
              {
                addedChunk: '30',
                calculation: '47 + 30',
                result: '77',
                explanation: 'Add the tens first. Keep 47 in your head and add 30.',
              },
              {
                addedChunk: '2',
                calculation: '77 + 2',
                result: '79',
                explanation: 'Now add the remaining 2.',
              },
            ],
          },
          {
            type: 'worked-example',
            label: 'Three-digit addition',
            expression: '342 + 215',
            steps: [
              {
                addedChunk: '200',
                calculation: '342 + 200',
                result: '542',
                explanation: 'Add the hundreds first. Keep 342 in your head and add 200.',
              },
              {
                addedChunk: '10',
                calculation: '542 + 10',
                result: '552',
                explanation: 'Now add the remaining 10 to 542.',
              },
              {
                addedChunk: '5',
                calculation: '552 + 5',
                result: '557',
                explanation: 'Finally add the remaining 5 to 552.',
              },
            ],
          },

          {
            type: 'narration',
            text: 'Notice the mental journey: 342 → 542 → 552 → 557. Instead of trying to juggle multiple separate columns and carry-overs in your head, you carry forward one running number that gets refined at each step.',
          },
        ],

        // Kept for backwards-compatibility (used when steps is absent).
        examples: [
          { first: '42', second: '3', operator: '+', answer: '45' },
          { first: '42', second: '30', operator: '+', answer: '72' },
          { first: '42', second: '300', operator: '+', answer: '342' },
        ],
        practice: [
          { first: '56', second: '4', operator: '+', answer: '60' },
          { first: '73', second: '20', operator: '+', answer: '93' },
          { first: '125', second: '300', operator: '+', answer: '425' },
          { first: '64', second: '7', operator: '+', answer: '71' },
        ],
      },
      {
        id: '1.2',
        title: 'Multiplication by 11',
      },
      {
        id: '1.3',
        title: 'Squaring Numbers Ending in 5',
      },
      {
        id: '1.4',
        title: 'Teen Multiplication',
      },
    ],
  },
]
