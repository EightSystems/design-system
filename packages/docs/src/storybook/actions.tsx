//TODO: Make it match with storybook action method

export const action = actionName => {
    return event => {
        if (event) {
            console.log(`Action Executed: ${actionName}, check console for event data`);
            console.log(event);
        } else {
            console.log(`Action Executed: ${actionName}`);
        }
    };
};
