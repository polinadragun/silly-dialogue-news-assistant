const express = require("express");
const DialogueHandler = require("./automata/dialogueHandler");

const app = express();
app.use(express.json());

const dialogueHandler = new DialogueHandler();

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    const response = await dialogueHandler.handleMessage(userMessage);
    res.json({ reply: response });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
