import { nativeTheme as Theme } from "./theme";
import ThemeProviderInjector from "./components/core/ThemeProviderInjector/index.native";

// Layout components
import Box from "./components/layout/Box/index.native";
import Spacer from "./components/layout/Spacer/index.native";

// Form components
import { Button, NativeButtonProps } from "./components/forms/Button/index.native";
import { TextField, NativeTextFieldProps } from "./components/forms/TextField/index.native";

// Primitive components
import { CurrencyLabel, CurrencyLabelProps } from "./components/primitives/CurrencyLabel/index.native";
import { Skeleton, NativeSkeletonProps } from "./components/primitives/Skeleton/index.native";

// Feedback components
import { Spinner, SpinnerNativeProps } from "./components/feedback/Spinner/index.native";

// Composite components
import Modal from "./components/composites/Modal/index.native";

// Typography Components
import { Heading, NativeHeadingProps } from "./components/typography/Heading/index.native";
import { Text, NativeTextProps } from "./components/typography/Text/index.native";

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
    Heading,
    Text,
    CurrencyLabel,
    Spinner,
    Skeleton,
    useClipboard,
    useExtendedTheme,
    useKeyboardDismissable,
};

export type {
    NativeButtonProps,
    NativeHeadingProps,
    NativeTextProps,
    CurrencyLabelProps,
    SpinnerNativeProps,
    NativeTextFieldProps,
    NativeSkeletonProps,
};
