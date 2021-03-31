import express from "express";

const app = express();

app.get("/auth/ping", (req, res, next) => {
  return res.json({success: true, message: "authentication server is up"});
});

app.listen(3000, () => console.log("authentication server is listening on port 3000"))