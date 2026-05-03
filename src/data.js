export const electionData = {
  timeline: [
    {
      id: 1,
      date: "September 15",
      title: "Voter Registration Deadline",
      description: "Last day to register to vote in the upcoming general election. Ensure your details are up to date."
    },
    {
      id: 2,
      date: "October 10",
      title: "Early Voting Begins",
      description: "Polling stations open for early voting. Check your local county website for locations and hours."
    },
    {
      id: 3,
      date: "October 25",
      title: "Absentee Ballot Request Deadline",
      description: "Final day to request an absentee ballot if you cannot vote in person."
    },
    {
      id: 4,
      date: "November 5",
      title: "Election Day",
      description: "Polls are open from 7:00 AM to 8:00 PM. Make your voice heard!"
    }
  ],
  steps: [
    {
      id: 1,
      title: "Check Your Eligibility",
      description: "You must be a citizen, a resident of your state, and at least 18 years old on Election Day."
    },
    {
      id: 2,
      title: "Register to Vote",
      description: "Complete your voter registration online, by mail, or in person before the deadline."
    },
    {
      id: 3,
      title: "Know Your Ballot",
      description: "Research the candidates and measures on your ballot beforehand. You can find sample ballots online."
    },
    {
      id: 4,
      title: "Cast Your Vote",
      description: "Vote early, mail in your absentee ballot, or head to your polling place on Election Day."
    }
  ],
  botResponses: [
    {
      keywords: ["register", "registration", "sign up"],
      response: "To register to vote, you must meet eligibility requirements (18+, citizen). You can register online, by mail, or in person at your local election office before the deadline (Sept 15)."
    },
    {
      keywords: ["where", "location", "polling place", "place"],
      response: "You can find your polling place by visiting your state's election website and entering your home address. Make sure to check it before Election Day!"
    },
    {
      keywords: ["id", "identification", "bring"],
      response: "Voter ID laws vary by state. Many states require a government-issued photo ID (like a driver's license), while others may accept a utility bill or signature match. Please check your state's specific requirements."
    },
    {
      keywords: ["absentee", "mail", "post"],
      response: "If you cannot vote in person, you can request an absentee ballot. The deadline to request one is typically a few weeks before the election (Oct 25 for our timeline). Make sure to mail it back early!"
    },
    {
      keywords: ["early", "before"],
      response: "Early voting allows you to vote in person before Election Day. In our timeline, it begins on October 10. Check your local county website for specific locations and hours."
    },
    {
      keywords: ["process", "how does it work", "steps", "complete process"],
      response: "The complete election process generally involves: 1. Checking eligibility. 2. Registering to vote before the deadline. 3. Researching candidates and issues on your ballot. 4. Casting your vote either early, by mail (absentee), or in-person on Election Day."
    }
  ],
  defaultBotResponse: "I'm not entirely sure about that. Try asking about voter registration, ID requirements, early voting, absentee ballots, or finding your polling place!",
  vocabulary: [
    {
      id: 1,
      term: "Ballot",
      definition: "A piece of paper or electronic system used to cast a vote."
    },
    {
      id: 2,
      term: "Incumbent",
      definition: "The person who currently holds the political office being contested."
    },
    {
      id: 3,
      term: "Constituent",
      definition: "A person living in an area who is represented by an elected official."
    },
    {
      id: 4,
      term: "Primary Election",
      definition: "An election in which political parties choose their candidates for the general election."
    },
    {
      id: 5,
      term: "Gerrymandering",
      definition: "The manipulation of voting district boundaries to favor a particular political party."
    },
    {
      id: 6,
      term: "Absentee Voting",
      definition: "Voting by mail or other means without going to a polling place on Election Day."
    }
  ],
  dosAndDonts: {
    dos: [
      "Do verify your voter registration status well before the deadline.",
      "Do research all candidates and ballot measures beforehand.",
      "Do bring required identification to your polling place if your state mandates it.",
      "Do ask poll workers for help if you have questions about the voting process or equipment."
    ],
    donts: [
      "Don't wear campaign clothing or buttons inside the polling place (electioneering laws).",
      "Don't take photos of your marked ballot inside the polling station in states where it is illegal.",
      "Don't leave the polling place if you are in line when polls close; you still have the right to vote.",
      "Don't let anyone intimidate or coerce you into voting a certain way."
    ]
  },
  quizQuestions: [
    {
      questionText: "What is the minimum voting age in the United States?",
      answerOptions: [
        { answerText: "16", isCorrect: false },
        { answerText: "18", isCorrect: true },
        { answerText: "21", isCorrect: false },
        { answerText: "25", isCorrect: false }
      ]
    },
    {
      questionText: "Which body conducts elections in India?",
      answerOptions: [
        { answerText: "Supreme Court", isCorrect: false },
        { answerText: "Election Commission of India", isCorrect: true },
        { answerText: "Lok Sabha", isCorrect: false },
        { answerText: "Rajya Sabha", isCorrect: false }
      ]
    },
    {
      questionText: "What do you call an election where parties choose their candidates?",
      answerOptions: [
        { answerText: "General Election", isCorrect: false },
        { answerText: "Primary Election", isCorrect: true },
        { answerText: "Midterm Election", isCorrect: false },
        { answerText: "Recall Election", isCorrect: false }
      ]
    }
  ],
  scenarios: [
    { id: 1, title: "What happens if I don't vote?", icon: "UserX" },
    { id: 2, title: "What if a candidate gets equal votes?", icon: "Scale" },
    { id: 3, title: "How are votes counted?", icon: "ClipboardList" },
    { id: 4, title: "What happens after voting ends?", icon: "Flag" }
  ],
  badges: [
    { id: 1, name: "First Steps", icon: "Star", color: "#10b981" },
    { id: 2, name: "Timeline Explorer", icon: "Clock", color: "#84cc16" },
    { id: 3, name: "Quiz Master", icon: "Trophy", color: "#10b981" },
    { id: 4, name: "Scenario Solver", icon: "Award", color: "#555" }
  ],
  mapData: [
    { id: 1, name: "Central Station", x: 120, y: 150, type: "active", density: "High" },
    { id: 2, name: "West Library", x: 340, y: 80, type: "active", density: "Low" },
    { id: 3, name: "East Community Center", x: 450, y: 220, type: "closed", density: "N/A" },
    { id: 4, name: "South High School", x: 280, y: 350, type: "active", density: "Medium" },
    { id: 5, name: "North Post Office", x: 520, y: 120, type: "active", density: "Medium" }
  ]
};
