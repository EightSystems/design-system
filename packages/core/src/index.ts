// Core components
import ThemeProviderInjector from "./components/core/ThemeProviderInjector";
import { theme as Theme } from "./theme";

// Layout Components
import Box from "./components/layout/Box";
import Spacer from "./components/layout/Spacer";

// Typography Components
import { Heading, WebHeadingProps } from "./components/typography/Heading";
import { Text, WebTextProps } from "./components/typography/Text";

// Composite components
import Accordion from "./components/composites/Accordion";
import AccordionItem from "./components/composites/AccordionItem";
import PaymentMethodItem from "./components/composites/PaymentMethodItem";
import PaymentPrompt from "./components/composites/PaymentMethodItem";
import { PaymentStatus, WebPaymentStatusProps } from "./components/composites/PaymentStatus";
import SavedCardBadge from "./components/composites/SavedCardBadge";
import Modal from "./components/composites/Modal";

// Feedback components
import Stepper from "./components/feedback/Stepper";
import { Tooltip, WebTooltipProps } from "./components/feedback/Tooltip";
import Toast from "./components/feedback/Toast";
import { Spinner, SpinnerWebProps } from "./components/feedback/Spinner";

// Form components
import { Button, WebButtonProps } from "./components/forms/Button";

import Select from "./components/forms/Select";
import { TextField, WebTextFieldProps } from "./components/forms/TextField";

// Primitve components
import { Avatar, WebAvatarProps } from "./components/primitives/Avatar";
import { CurrencyLabel } from "./components/primitives/CurrencyLabel";
import ProgressRing from "./components/feedback/ProgressRing";
import { Skeleton, WebSkeletonProps } from "./components/primitives/Skeleton";
import { Icon, WebIconProps } from "./components/primitives/Icon";

// Hooks
import { useDetectOutsideClick } from "./hooks/useDetectOutsideClick";
import { useContainerDimensions } from "./hooks/useContainerDimensions";
import { useExtendedTheme } from "./hooks/useExtendedTheme";

export {
    Box,
    Spacer,
    Heading,
    Text,
    Theme,
    Accordion,
    AccordionItem,
    Avatar,
    Button,
    CurrencyLabel,
    Icon,
    PaymentMethodItem,
    PaymentPrompt,
    PaymentStatus,
    SavedCardBadge,
    Select,
    Stepper,
    ProgressRing,
    TextField,
    Tooltip,
    Skeleton,
    Toast,
    Spinner,
    Modal,
    ThemeProviderInjector,
    useExtendedTheme,
    useContainerDimensions,
    useDetectOutsideClick,
};

export type {
    WebHeadingProps,
    WebButtonProps,
    WebTextProps,
    WebAvatarProps,
    SpinnerWebProps,
    WebTextFieldProps,
    WebSkeletonProps,
    WebPaymentStatusProps,
    WebTooltipProps,
    WebIconProps,
};
