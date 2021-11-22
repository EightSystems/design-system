import IntroductionStory from "../core/src/stories/0_Introduction.stories";
import UsageStory from "../core/src/stories/1_Usage.stories";
import ThemingStory from "../core/src/stories/2_Theming.stories";
import NativeSupportStory from "../core/src/stories/4_NativeSupport.stories";
//import AccordionStory from "../core/src/stories/Accordion.stories";
import AvatarStory from "../core/src/stories/Avatar.stories";
import BoxStory from "../core/src/stories/Box.stories";
import ButtonStory from "../core/src/stories/Button.stories";
import CurrencyLabelStory from "../core/src/stories/CurrencyLabel.stories";
import DividerStory from "../core/src/stories/Divider.stories";
import GridStory from "../core/src/stories/Grid.stories";
import HeadingStory from "../core/src/stories/Heading.stories";
import IconStory from "../core/src/stories/Icon.stories";
import ModalStory from "../core/src/stories/Modal.stories";
import PaymentStatusStory from "../core/src/stories/PaymentStatus.stories";
import ProgressRingStory from "../core/src/stories/ProgressRing.stories";
import SelectStory from "../core/src/stories/Select.stories";
import SkeletonStory from "../core/src/stories/Skeleton.stories";
import SpinnerStory from "../core/src/stories/Spinner.stories";
import StepperStory from "../core/src/stories/Stepper.stories";
import TextStory from "../core/src/stories/Text.stories";
import TextFieldStory from "../core/src/stories/TextField.stories";
import TooltipStory from "../core/src/stories/Tooltip.stories";

const storyList = {
    Introduction: IntroductionStory,
    Usage: UsageStory,
    Theming: ThemingStory,
    "Native Support": NativeSupportStory,
    "Typography/Heading": HeadingStory,
    "Typography/Text": TextStory,
    //Accordion: AccordionStory,
    Tooltip: TooltipStory,
    Avatar: AvatarStory,
    Button: ButtonStory,
    CurrencyLabel: CurrencyLabelStory,
    Divider: DividerStory,
    Box: BoxStory,
    Grid: GridStory,
    Icon: IconStory,
    Modal: ModalStory,
    PaymentStatus: PaymentStatusStory,
    ProgressRing: ProgressRingStory,
    Select: SelectStory,
    Skeleton: SkeletonStory,
    Spinner: SpinnerStory,
    Stepper: StepperStory,
    TextField: TextFieldStory,
};

export default storyList;
