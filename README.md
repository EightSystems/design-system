This Design System is used in the building of internal products at @EightSystems. It is built with Storybook, React and Sass.

As this is an internal design system, we don't accept suggestions to change or add new components.

# ⚡️ Quick Start

Clone the repository and run the following:

```jsx
yarn install
```

Once the project dependencies finish installing, you can navigate to the directory and start the Storybook preview with:

```jsx
yarn storybook
```

Open [`http://localhost:6006/`](http://localhost:6006/) (it should open automatically) to see the Storybook interface with the component library.

# 🧐 What's inside?

The project is configured with a set of addons to automatize the internal documentation process:

- `@storybook/addon-a11y`- Used to run essential accessibility audits for components on the fly.
- `storybook-addon-react-docgen` - Used to create automatic documentation based on the props defined in the component's code.

# 📝 License

Copyright © 2021 [@EightSystems](https://github.com/EightSystems).
