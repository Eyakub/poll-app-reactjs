const polls = [
  {
    id: '1',
    title: 'What is your favorite programming language',
    description: 'There are a lot of popular languages available. Among them what is your favorite?',
    options: [
      { id: '1', value: 'C', vote: 0},
      { id: '2', value: 'Python', vote: 0},
      { id: '3', value: 'Java', vote: 0},
      { id: '4', value: 'JS', vote: 0},
    ],
    created: new Date(),
    totalVote: 0,
    opinions: []
  },
  {
    id: '2',
    title: 'Which one is the Covid-19 reason?',
    description: 'There are a lot of popular languages available. Among them what is your favorite?',
    options: [
      { id: '1', value: 'Fever', vote: 0},
      { id: '2', value: 'Cold', vote: 0},
      { id: '3', value: 'High pressure', vote: 0},
      { id: '4', value: 'Others', vote: 0},
    ],
    created: new Date(),
    totalVote: 0,
    opinions: []
  },
  {
    id: '3',
    title: 'What is your favorite programming language',
    description: 'There are a lot of popular languages available. Among them what is your favorite?',
    options: [
      { id: '1', value: 'C', vote: 0},
      { id: '2', value: 'Python', vote: 0},
      { id: '3', value: 'Java', vote: 0},
      { id: '4', value: 'JS', vote: 0},
    ],
    created: new Date(),
    totalVote: 0,
    opinions: []
  }
]

export default polls;