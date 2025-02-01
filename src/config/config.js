require('dotenv').config({ path: './config/.env' });
console.log("Loaded NEWS_API_KEY:", process.env.NEWS_API_KEY);


console.log("The key we got in config: ", process.env.NEWS_API_KEY);
module.exports = {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEWS_API_URL: "https://newsapi.org/v2/top-headlines"
};