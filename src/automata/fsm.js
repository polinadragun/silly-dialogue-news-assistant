const states = {
    START: "START",
    ASK_NEWS_TYPE: "ASK_NEWS_TYPE",
    SHOW_NEWS: "SHOW_NEWS",
    ASK_MORE: "ASK_MORE"
};

let currentState = states.START;

function transition(newState) {
    console.log(`Transitioning to: ${newState}`);
    currentState = newState;
}

module.exports = { states, transition, currentState };
