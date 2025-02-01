const intents = [
    {
        name: "GREETING",
        regex: /hello|hi|hey/i,
    },
    {
        name: "GET_NEWS",
        regex: /latest news|top news|headlines/i,
    },
    {
        name: "CATEGORY_NEWS",
        regex: /(news about|category|topics related to)\s+(technology|sports|business|health|entertainment|science|politics|general)/i,
        extract: (message) => {
            const match = message.match(/technology|sports|business|health|entertainment|science|politics|general/i);
            return { category: match ? match[0] : "general" };
        },
    },
    {
        name: "DATE_NEWS",
        regex: /(news from|news about)\s+(yesterday|last week|last month)/i,
        extract: (message) => {
            const match = message.match(/yesterday|last week|last month/i);
            return { date: match ? match[0] : null };
        },
    },
    {
        name: "END_CONVERSATION",
        regex: /bye|exit|quit|thanks/i,
    },
];

function recognizeIntent(message) {
    for (const intent of intents) {
        const match = message.match(intent.regex);
        if (match) {
            const entities = intent.extract ? intent.extract(message) : {};
            return { intent: intent.name, entities };
        }
    }
    return { intent: "UNKNOWN", entities: {} };
}

module.exports = { recognizeIntent };
