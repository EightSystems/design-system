![Eight System's Design System Cover](https://raw.githubusercontent.com/EightSystems/design-system/development/.github/assets/Cover.jpg)

This Design System is used in the building of internal products at @EightSystems. It is built with Storybook, React and
Styled Components.

As this is an internal design system, we don't accept suggestions to change or add new components.

# Quick Start

Clone the repository and run the following:

```jsx
yarn install
```

Once the project dependencies finish installing, you can navigate to the directory and start the Storybook preview with:

```jsx
yarn storybook
```

Open [`http://localhost:6006/`](http://localhost:6006/) (it should open automatically) to see the Storybook interface
with the component library.

# Component library

1. To install the component library, run:

```bash
yarn add @8sistemas/design-system
```

2. Inject the `ThemeProvider` in the project root:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@8sistemas/design-system";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
```

3. Use the components in any place of the project that is in the scope of `ThemeProvider` and the project root. Use the
   Storybook generated documentation as reference for the components, props, and API's available.

```jsx
import React from "react";
import { Button } from "@8sistemas/design-system";

const Example = () => <Button color="primary">Hello World</Button>;
```

# What's inside?

The project is configured with a set of addons to automatize the internal documentation process:

-   `@storybook/addon-a11y`- Used to run essential accessibility audits for components on the fly.
-   `@storybook/addon-essentials` - Used to create MDX documentation and parse trough prop definitions

# License

Copyright © 2021 [@EightSystems](https://github.com/EightSystems).
