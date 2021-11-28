//TODO: Make it match with storybook action method

export const action = actionName => {
    return event => {
        console.log(event);
        alert(`Action Executed: ${actionName}, check console for event data`);
    };
};
