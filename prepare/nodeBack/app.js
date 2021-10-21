const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const postsRouter = require("./routes/posts");
const hashtagRouter = require("./routes/hashtag");

const db = require("./models");
const app = express();
const passportConfig = require("./passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const hpp = require("hpp");

dotenv.config();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: "https://devkeravi.site",
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
} else {
  app.use(morgan("dev"));
}
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUnitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    proxy: ture,
    cookie: {
      httpOnly: true,
      secure: true,
      domain: process.env.NODE_ENV === "production" && ".devkeravi.site",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/hashtag", hashtagRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});
