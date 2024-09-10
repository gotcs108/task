export const initialTasksData = [
    {
      id: 100,
      ticketNumber: "#TSK-100",
      item: "Call Richard",
      assignees: ["John","Jack"],
      about: "Tell him happy birthday",
      comments: [
        {author: "John", comment: "almost done"},
        {author: "Jack", comment: "yup me too"},
        {author: "John", comment: "sounds good"}
      ],
      subtasks: [
        {
          item: "Buy a phone",
          status: "Pending"
        },
        {
          item: "Buy subscription",
          status: "Complete"
        },
        {
          item: "Dial in",
          status: "Verified"
        },
        {
          item: "Wait for them",
          status: "Issue"
        }
      ]
    },
    {
      id: 101,
      ticketNumber: "#TSK-101",
      item: "Call Jamy",
      assignees: ["Jack"],
      about: "Tell him that I got the keys",
      comments: [{author: "Jack", comment: "good to go"}],
      subtasks: [
        {
          item: "Buy a phone",
          status: "Pending"
        },
        {
          item: "Buy subscription",
          status: "Complete"
        },
        {
          item: "Dial in",
          status: "Verified"
        }
      ]
    },
    {
      id: 102,
      ticketNumber: "#TSK-102",
      item: "Call Santa",
      assignees: ["John"],
      about: "tell him that I want to buy a gift for him",
      comments: [
        {author: "John", comment: "where is he?"},
        {author: "Jack", comment: "Not sure!"}
      ],
      subtasks: [
        {
          item: "Buy a phone",
          status: "Pending"
        },
        {
          item: "Buy subscription",
          status: "Complete"
        },
        {
          item: "Dial in",
          status: "Complete"
        }
      ]
    }
];