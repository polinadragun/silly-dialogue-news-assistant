const { recognizeIntent } = require("./intents");
const NewsService = require("../services/newsService");
const { transition, states } = require("./fsm");

class DialogueHandler {
    constructor() {
        this.newsService = new NewsService();
    }

    async handleMessage(userInput) {
        const { intent, entities } = recognizeIntent(userInput);

        switch (intent) {
            case "GREETING":
                transition(states.ASK_NEWS_TYPE);
                return "Hello! What kind of news are you interested in? (e.g., 'latest news', 'news about smth')";

            case "GET_NEWS":
                transition(states.SHOW_NEWS);
                const news = await this.newsService.fetchNews();
                return this.newsService.formatNews(news);

            case "CATEGORY_NEWS":
                transition(states.SHOW_NEWS);
                const category = entities.category || "general";
                const categoryNews = await this.newsService.fetchNews(category);
                return this.newsService.formatNews(categoryNews);

            case "DATE_NEWS":
                transition(states.SHOW_NEWS);
                const date = entities.date;
                const dateNews = await this.newsService.fetchNews("", date);
                return this.newsService.formatNews(dateNews);

            case "END_CONVERSATION":
                transition(states.END_CONVERSATION);
                return "You're welcome! bye, bye";

            default:
                return "I'm not sure I understand. Try asking for 'latest news' or 'news about sports'.";
        }
    }

}

module.exports = DialogueHandler;