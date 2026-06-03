const user = {
  name: "Henrique Amorim",
  user: "HenriqueAmorim",
  followers: "1.2k",
  following: "300",
  post: "235",
};

function ramdomLikes() {
  const likes = Math.floor(Math.random() * 1000);

  return likes;
}

const posts = [
  {
    user: "HenriqueAmorim",
    image: "https://picsum.photos/seed/post1/600/400",
    description: "Um dia incrível na praia! 🌊",
    likes: ramdomLikes(),
    comments: [],
    id: 1,
  },
  {
    user: "MariaSouza",
    image: "https://picsum.photos/seed/post2/600/400",
    description: "Café da manhã perfeito ☕",
    likes: ramdomLikes(),
    comments: [],
    id: 2,
  },
  {
    user: "JoaoPedro",
    image: "https://picsum.photos/seed/post3/600/400",
    description: "Fim de semana com a galera 🎉",
    likes: ramdomLikes(),
    comments: [],
    id: 3,
  },
  {
    user: "anafernanda",
    image: "https://picsum.photos/seed/post4/600/400",
    description: "Pôr do sol incrível hoje! 🌅",
    likes: ramdomLikes(),
    comments: [],
    id: 4,
  },
];

export const usePerson = () => {
  return { user, posts };
};
