import express from "express";

const app = express();

app.get("/user/ping", (req, res, next) => {
  return res.json({success: true, message: "user server is up"});
});

app.listen(3000, () => console.log("user server is listening on port 3000"))