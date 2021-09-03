import IntroductionStory from "../core/src/stories/0_Introduction.stories";
import UsageStory from "../core/src/stories/1_Usage.stories";
import ThemingStory from "../core/src/stories/2_Theming.stories";
//import AccordionStory from "../core/src/stories/Accordion.stories";
import AvatarStory from "../core/src/stories/Avatar.stories";
import ButtonStory from "../core/src/stories/Button.stories";
import CurrencyLabelStory from "../core/src/stories/CurrencyLabel.stories";
import IconStory from "../core/src/stories/Icon.stories";
import PaymentStatusStory from "../core/src/stories/PaymentStatus.stories";
import ProgressRingStory from "../core/src/stories/ProgressRing.stories";
import SkeletonStory from "../core/src/stories/Skeleton.stories";
import SpinnerStory from "../core/src/stories/Spinner.stories";
import StepperStory from "../core/src/stories/Stepper.stories";
import TextFieldStory from "../core/src/stories/TextField.stories";

const storyList = {
    Introduction: IntroductionStory,
    Usage: UsageStory,
    Theming: ThemingStory,
    //Accordion: AccordionStory,
    Avatar: AvatarStory,
    Button: ButtonStory,
    CurrencyLabel: CurrencyLabelStory,
    Icon: IconStory,
    PaymentStatus: PaymentStatusStory,
    ProgressRing: ProgressRingStory,
    Skeleton: SkeletonStory,
    Spinner: SpinnerStory,
    Stepper: StepperStory,
    TextField: TextFieldStory,
};

export default storyList;
