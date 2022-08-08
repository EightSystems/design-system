import { useState } from "react";

const fallbackCopyTextToClipboard = text => {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
};

export const useClipboard = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const [value, setValue] = useState<string>("");

    const onCopy = async (copiedValue: string) => {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(copiedValue);
        } else {
            await navigator.clipboard.writeText(copiedValue);
        }

        setValue(copiedValue);
        setHasCopied(true);
    };

    return {
        value,
        onCopy,
        hasCopied,
    };
};
