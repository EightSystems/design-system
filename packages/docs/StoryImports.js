import IntroductionStory from "../core/src/stories/0_Introduction.stories";
import UsageStory from "../core/src/stories/1_Installing.stories";
import ThemingStory from "../core/src/stories/2_Theming.stories";
import NativeSupportStory from "../core/src/stories/4_NativeSupport.stories";
//import AccordionStory from "../core/src/stories/Accordion.stories";
import AvatarStory from "../core/src/stories/5_Avatar.stories";
import ProgressRingStory from "../core/src/stories/7_ProgressRing.stories";
import SelectStory from "../core/src/stories/8_Select.stories";
import BoxStory from "../core/src/stories/9_Box.stories";
import ButtonStory from "../core/src/stories/Button.stories";
import CurrencyLabelStory from "../core/src/stories/CurrencyLabel.stories";
import DividerStory from "../core/src/stories/Divider.stories";
import FlexBox from "../core/src/stories/FlexBox.stories";
import GridStory from "../core/src/stories/Grid.stories";
import HeadingStory from "../core/src/stories/Heading.stories";
import IconStory from "../core/src/stories/Icon.stories";
import Image from "../core/src/stories/Image.stories";
import ModalStory from "../core/src/stories/Modal.stories";
import PaymentMethodItemStory from "../core/src/stories/PaymentMethodItem.stories";
import PaymentStatusStory from "../core/src/stories/PaymentStatus.stories";
import SkeletonStory from "../core/src/stories/Skeleton.stories";
import SpacerStory from "../core/src/stories/Spacer.stories";
import SpinnerStory from "../core/src/stories/Spinner.stories";
import StepperStory from "../core/src/stories/Stepper.stories";
import TextStory from "../core/src/stories/Text.stories";
import TextFieldStory from "../core/src/stories/TextField.stories";
import ToastStory from "../core/src/stories/Toast.stories";
import TooltipStory from "../core/src/stories/Tooltip.stories";
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

    "Feedback/ProgressRing": ProgressRingStory,
    "Feedback/Spinner": SpinnerStory,
    "Feedback/Stepper": StepperStory,
    "Feedback/Toast": ToastStory,
    "Feedback/Tooltip": TooltipStory,

    "Forms/Button": ButtonStory,
    "Forms/Select": SelectStory,
    "Forms/TextField": TextFieldStory,

    "Layout/Box": BoxStory,
    "Layout/FlexBox": FlexBox,
    "Layout/Grid": GridStory,
    "Layout/Spacer": SpacerStory,

    "Molecules/PaymentMethodItem": PaymentMethodItemStory,
    "Molecules/PaymentStatus": PaymentStatusStory,

    "Primitives/Divider": DividerStory,
    "Primitives/Icon": IconStory,
    "Primitives/Image": Image,
    "Primitives/Streaming Video Player": WebVideoStory,

    "Typography/Heading": HeadingStory,
    "Typography/Text": TextStory,
    //Accordion: AccordionStory,
};

export default storyList;
