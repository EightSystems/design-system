import AccordionStory from "../core/src/stories/Accordion.stories";
import AvatarStory from "../core/src/stories/05_Avatar.stories";
import BadgeStory from "../core/src/stories/Badge.stories";
import BoxStory from "../core/src/stories/09_Box.stories";
import ApplicationContainerStory from "../core/src/stories/ApplicationContainer.stories";
import ButtonStory from "../core/src/stories/08_Button.stories";
import CheckboxStory from "../core/src/stories/Checkbox.stories";
import CurrencyLabelStory from "../core/src/stories/CurrencyLabel.stories";
import DividerStory from "../core/src/stories/Divider.stories";
import FlexBox from "../core/src/stories/FlexBox.stories";
import GridStory from "../core/src/stories/Grid.stories";
import HeadingStory from "../core/src/stories/Heading.stories";
import IconStory from "../core/src/stories/Icon.stories";
import Image from "../core/src/stories/Image.stories";
import IntroductionStory from "../core/src/stories/00_Introduction.stories";
import ModalStory from "../core/src/stories/Modal.stories";
import NativeSupportStory from "../core/src/stories/04_NativeSupport.stories";
import PaymentMethodItemStory from "../core/src/stories/PaymentMethodItem.stories";
import PaymentPromptStory from "../core/src/stories/PaymentPrompt.stories";
import PaymentStatusStory from "../core/src/stories/PaymentStatus.stories";
import PlatformStory from "../core/src/stories/10_Platform.stories";
import KeyPadStory from "../core/src/stories/KeyPad.stories";
import ProgressBarStory from "../core/src/stories/ProgressBar.stories";
import ProgressRingStory from "../core/src/stories/07_ProgressRing.stories";
import RadioStory from "../core/src/stories/Radio.stories";
import SavedCardBadge from "../core/src/stories/SavedCardBadge.stories";
import SelectStory from "../core/src/stories/Select.stories";
import SearchBarStory from "../core/src/stories/Searchbar.stories";
import SkeletonStory from "../core/src/stories/Skeleton.stories";
import SpacerStory from "../core/src/stories/Spacer.stories";
import SpinnerStory from "../core/src/stories/Spinner.stories";
import StepperStory from "../core/src/stories/Stepper.stories";
import SwitchStory from "../core/src/stories/Switch.stories";
import TextFieldStory from "../core/src/stories/TextField.stories";
import TextStory from "../core/src/stories/Text.stories";
import ThemingStory from "../core/src/stories/02_Theming.stories";
import ToastStory from "../core/src/stories/Toast.stories";
import TooltipStory from "../core/src/stories/Tooltip.stories";
import UsageStory from "../core/src/stories/01_Installing.stories";
import WebVideoStory from "../core/src/stories/WebVideo.stories";

const storyList = {
    Introduction: IntroductionStory,
    Installing: UsageStory,
    Theming: ThemingStory,
    "Native Support": NativeSupportStory,
    "Atoms/Avatar": AvatarStory,
    "Atoms/CurrencyLabel": CurrencyLabelStory,
    "Atoms/Skeleton": SkeletonStory,

    "Composites/Modal": ModalStory,
    "Composites/KeyPad": KeyPadStory,
    "Composites/SearchBar": SearchBarStory,

    "Feedback/ProgressRing": ProgressRingStory,
    "Feedback/Badge": BadgeStory,
    "Feedback/ProgressBar": ProgressBarStory,
    "Feedback/Spinner": SpinnerStory,
    "Feedback/Stepper": StepperStory,
    "Feedback/Toast": ToastStory,
    "Feedback/Tooltip": TooltipStory,

    "Forms/Button": ButtonStory,
    "Forms/Checkbox": CheckboxStory,
    "Forms/Radio": RadioStory,
    "Forms/Select": SelectStory,
    "Forms/Switch": SwitchStory,
    "Forms/TextField": TextFieldStory,

    "Layout/ApplicationContainer": ApplicationContainerStory,
    "Layout/Box": BoxStory,
    "Layout/FlexBox": FlexBox,
    "Layout/Grid": GridStory,
    "Layout/Spacer": SpacerStory,

    "Molecules/Accordion": AccordionStory,
    "Molecules/PaymentMethodItem": PaymentMethodItemStory,
    "Molecules/PaymentPrompt": PaymentPromptStory,
    "Molecules/PaymentStatus": PaymentStatusStory,
    "Molecules/SavedCardBadge": SavedCardBadge,

    "Primitives/Divider": DividerStory,
    "Primitives/Icon": IconStory,
    "Primitives/Image": Image,
    "Primitives/Streaming Video Player": WebVideoStory,

    "Typography/Heading": HeadingStory,
    "Typography/Text": TextStory,

    "Utils/Platform": PlatformStory,
};

export default storyList;
