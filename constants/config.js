const corsOptions = {
  // origin: [
  //   // "http://localhost:5173",
  //   // "http://localhost:4173",
  //   process.env.CLIENT_URL,
  // ],
  origin: 'https://chitchat-frontend-opal.vercel.app',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const ChitChat_TOKEN = "ChitChat-token";

export {
  ChitChat_TOKEN,
  corsOptions
};