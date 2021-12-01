//TODO: Make it match with storybook action method

export const action = actionName => {
    return event => {
        if (event) {
            console.log(event);
            alert(`Action Executed: ${actionName}, check console for event data`);
        } else {
            alert(`Action Executed: ${actionName}`);
        }
    };
};
