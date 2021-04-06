export const dbURL = () =>
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.g8nbz.mongodb.net/authentication?retryWrites=true&w=majority`;
