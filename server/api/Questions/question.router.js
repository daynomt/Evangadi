const router = require("express").Router();

const auth = require("../middleware/auth");

const { postQuestion, getQuestions } = require("./question.controller");

router.post("/ask", auth, postQuestion);
router.get("/ask", auth, getQuestions);

module.exports = router;
