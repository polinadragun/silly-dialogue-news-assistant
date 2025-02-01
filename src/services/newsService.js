const axios = require("axios");
const { NEWS_API_KEY, NEWS_API_URL } = require("../config/config");
console.log("The key we got: ", NEWS_API_KEY);

class NewsService {
    constructor() {
        this.apiKey = NEWS_API_KEY;
        this.apiUrl = NEWS_API_URL;
    }

    getDateRange(dateString) {
        const today = new Date();
        let fromDate, toDate;

        switch (dateString) {
            case "yesterday":
                fromDate = new Date(today);
                fromDate.setDate(today.getDate() - 1);
                toDate = new Date(fromDate);
                break;

            case "last week":
                fromDate = new Date(today);
                fromDate.setDate(today.getDate() - 7);
                toDate = new Date(today);
                break;

            case "last month":
                fromDate = new Date(today);
                fromDate.setMonth(today.getMonth() - 1);
                toDate = new Date(today);
                break;

            case "today":
                fromDate = new Date(today);
                toDate = new Date(today);
                break;

            default:
                return null;
        }

        return {
            from: fromDate.toISOString().split("T")[0],
            to: toDate.toISOString().split("T")[0]
        };
    }

    async fetchNews(category = "", date = "") {
        try {
            const params = { apiKey: this.apiKey, country: "us" };

            if (category) params.category = category;

            if (date) {
                const dateRange = this.getDateRange(date);
                if (dateRange) {
                    params.from = dateRange.from;
                    params.to = dateRange.to;
                }
            }

            console.log("Fetching news with params:", params);

            const response = await axios.get(this.apiUrl, { params });
            return response.data.articles.slice(0, 5);
        } catch (error) {
            console.error("Error fetching news:", error.message);
            return [];
        }
    }


    formatNews(articles) {
        if (!articles.length) return "No news found.";
        return articles.map(a => `   ${a.title} - ${a.source.name}`).join("\n");
    }
}

module.exports = NewsService;