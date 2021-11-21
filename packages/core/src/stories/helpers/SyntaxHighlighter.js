import { Source } from "@storybook/components";
import React from "react";

export const CodeSyntaxHighlighter = ({ codeString, language }) => <Source language={language} code={codeString} />;
