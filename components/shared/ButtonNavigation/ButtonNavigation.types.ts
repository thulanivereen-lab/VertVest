export interface ButtonNavigationProps {
    currentStep: number;
    totalSteps: number;
    onBack: () => void;
    onContinue: () => void;
    onPublish: () => void;
    isPublishing?: boolean;
    isContinueDisabled?: boolean;
}
