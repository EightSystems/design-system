import IntroductionStory from "../core/src/stories/0_Introduction.stories";
import UsageStory from "../core/src/stories/1_Usage.stories";
import ThemingStory from "../core/src/stories/2_Theming.stories";
//import AccordionStory from "../core/src/stories/Accordion.stories";
import AvatarStory from "../core/src/stories/Avatar.stories";
import ButtonStory from "../core/src/stories/Button.stories";
import ProgressRingStory from "../core/src/stories/ProgressRing.stories";
import StepperStory from "../core/src/stories/Stepper.stories";

const storyList = {
    Introduction: IntroductionStory,
    Usage: UsageStory,
    Theming: ThemingStory,
    //Accordion: AccordionStory,
    Avatar: AvatarStory,
    Button: ButtonStory,
    ProgressRing: ProgressRingStory,
    Stepper: StepperStory,
};

export default storyList;
