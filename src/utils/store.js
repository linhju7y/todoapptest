const cards = [
  {
    id: "card-1",
    title: "Interstellar",
    isCompleted: true,
  },
  {
    id: "card-2",
    title: "The martian",
    isCompleted: false,
  },
  {
    id: "card-3",
    title: "WW2",
    isCompleted: false,
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Movies to watch",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "Zombie Furniture",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2"],
};

export default data;
