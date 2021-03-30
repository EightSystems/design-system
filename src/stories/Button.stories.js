import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "../components/Button"

storiesOf("Button", module).add("Primary Button", () => (
    <Button color='primary' outline={false}>
        Primary Button
    </Button>
))

storiesOf("Button", module).add("Danger Button", () => (
    <Button color='danger' outline={false}>
        Danger Button
    </Button>
))

storiesOf("Button", module).add("Primary Button (Outline)", () => (
    <Button color='primary' outline={true}>
        Primary Button Outline
    </Button>
))

storiesOf("Button", module).add("Danger Button (Outline)", () => (
    <Button color='danger' outline={true}>
        Danger Button Outline
    </Button>
))
