import path from "path";

export default {
  dbUrl:
    "mongodb+srv://florent:ycF4El4iR1uvBciT@cluster0.bgnw6.mongodb.net/mini_twitter?retryWrites=true&w=majority",
  cert: path.join(__dirname, "../../ssl/local.crt"),
  key: path.join(__dirname, "../../ssl/local.key"),
  portHttp: 3000,
  portHttps: 3001,
};
