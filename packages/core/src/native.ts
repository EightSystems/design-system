import { nativeTheme as Theme } from "./theme";
import ThemeProviderInjector from "./components/core/ThemeProviderInjector/index.native";

// Layout components
import Box from "./components/layout/Box/index.native";
import Spacer from "./components/layout/Spacer/index.native";

// Form components
import Button from "./components/forms/Button/index.native";
import TextField from "./components/forms/TextField/index.native";

// Composite components
import Modal from "./components/composites/Modal/index.native";

// Utility hooks
import { useClipboard } from "./hooks/useClipboard";
import { useExtendedTheme } from "./hooks/useExtendedTheme";
import { useKeyboardDismissable } from "./hooks/useKeyboardDismissable";

export {
    ThemeProviderInjector,
    Theme,
    Box,
    Spacer,
    Button,
    Modal,
    TextField,
    useClipboard,
    useExtendedTheme,
    useKeyboardDismissable,
};
