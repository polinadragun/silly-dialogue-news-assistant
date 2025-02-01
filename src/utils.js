const states = {
    GREETING: "GREETING",
    ASK_NEWS_TYPE: "ASK_NEWS_TYPE",
    ASK_CATEGORY: "ASK_CATEGORY",
    SHOW_NEWS: "SHOW_NEWS",
    ASK_MORE_DETAILS: "ASK_MORE_DETAILS",
    ASK_DATE_RANGE: "ASK_DATE_RANGE",
    END_CONVERSATION: "END_CONVERSATION"
};

let currentState = states.GREETING;

function transition(newState) {
    console.log(`Transitioning to: ${newState}`);
    currentState = newState;
}

module.exports = { states, transition, currentState };
