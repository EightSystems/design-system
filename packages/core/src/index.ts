// Core components
import { theme as Theme } from "./theme";
import ThemeProviderInjector from "./components/core/ThemeProviderInjector";

// Layout Components
import Box from "./components/layout/Box";
import Spacer from "./components/layout/Spacer";

// Typography Components
import { Heading, WebHeadingProps } from "./components/typography/Heading";
import { Text, WebTextProps } from "./components/typography/Text";

// Composite components
import { PaymentStatus, WebPaymentStatusProps } from "./components/composites/PaymentStatus";
import Accordion from "./components/composites/Accordion";
import AccordionItem from "./components/composites/AccordionItem";
import Modal from "./components/composites/Modal";
import PaymentMethodItem from "./components/composites/PaymentMethodItem";
import PaymentPrompt from "./components/composites/PaymentMethodItem";
import SavedCardBadge from "./components/composites/SavedCardBadge";

// Feedback components
import { Spinner, WebSpinnerProps } from "./components/feedback/Spinner";
import { Stepper, StepperProps } from "./components/feedback/Stepper";
import { Tooltip, WebTooltipProps } from "./components/feedback/Tooltip";
import Toast from "./components/feedback/Toast";

// Form components
import { Button, WebButtonProps } from "./components/forms/Button";
import { TextField, WebTextFieldProps } from "./components/forms/TextField";
import Select from "./components/forms/Select";

// Primitve components
import { Avatar, WebAvatarProps } from "./components/primitives/Avatar";
import { CurrencyLabel } from "./components/primitives/CurrencyLabel";
import { Divider, WebDividerProps } from "./components/primitives/Divider";
import { Icon, WebIconProps } from "./components/primitives/Icon";
import { ProgressRing, ProgressRingProps } from "./components/feedback/ProgressRing";
import { Skeleton, WebSkeletonProps } from "./components/primitives/Skeleton";

// Hooks
import { useContainerDimensions } from "./hooks/useContainerDimensions";
import { useDetectOutsideClick } from "./hooks/useDetectOutsideClick";
import { useExtendedTheme } from "./hooks/useExtendedTheme";

export {
    Accordion,
    AccordionItem,
    Avatar,
    Box,
    Button,
    CurrencyLabel,
    Divider,
    Heading,
    Icon,
    Modal,
    PaymentMethodItem,
    PaymentPrompt,
    PaymentStatus,
    ProgressRing,
    SavedCardBadge,
    Select,
    Skeleton,
    Spacer,
    Spinner,
    Stepper,
    Text,
    TextField,
    Theme,
    ThemeProviderInjector,
    Toast,
    Tooltip,
    useContainerDimensions,
    useDetectOutsideClick,
    useExtendedTheme,
};

export type {
    WebAvatarProps,
    WebButtonProps,
    WebDividerProps,
    WebHeadingProps,
    WebIconProps,
    WebPaymentStatusProps,
    WebSkeletonProps,
    WebSpinnerProps,
    WebTextFieldProps,
    WebTextProps,
    WebTooltipProps,
    ProgressRingProps,
    StepperProps,
};
