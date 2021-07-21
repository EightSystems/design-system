![Eight System's Design System Cover](https://raw.githubusercontent.com/EightSystems/design-system/development/.github/assets/Cover.jpg)

This Design System is used in the building of internal products at @EightSystems. It is built with Storybook, React and
Styled Components.

As this is an internal design system, we don't accept suggestions to change or add new components.

# Quick Start

Clone the repository and run the following:

`yarn install`

This will install all the project dependencies on both packages (core components with Storybook under `packages/core`
and native documentation preview under `packages/docs`).

Once the project dependencies finish installing, you can navigate to `packages/core` and start the Storybook(Web)
preview with:

`yarn storybook`

Open [http://localhost:6006/](http://localhost:6006/) (it should open automatically) to see the Storybook interface with
the component library.

To see the native version of the components, they need to be compiled in the UI Explorer app. Providing that you have an
React Native environment, you can navigate to `packages/docs` and run `yarn start` to start the Metro bundler, and
`yarn android` or `yarn ios` to compile the app to the given platform.

# Overview

This project contains the following directories under `./package`:

-   `core` - The core codebase for both the web and mobile version of the components, as well as a basic Storybook
    configuration for component visualization.

-   `docs` - The UI Explorer for native mobile components bundled in a React Native app.

# What's inside?

The project is configured with a set of Storybook addons to automatize the internal documentation process:

-   `@storybook/addon-a11y`Used to run essential accessibility audits for components on the fly.
-   `@storybook/addon-essentials` - Used to create MDX documentation and parse trough prop definitions.

It's also using the TypeScript compiler to generate the type definitions required by editors auto-complete features, and
Rollup as the assets bundler.

# License

Copyright © 2021 [@EightSystems](https://github.com/EightSystems).
