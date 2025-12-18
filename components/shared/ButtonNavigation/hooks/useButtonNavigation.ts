import { useCallback } from 'react';
import type {
    UseButtonNavigationOptions,
    UseButtonNavigationReturn,
} from './useButtonNavigation.types';

export const useButtonNavigation = ({
    currentStep,
    totalSteps,
    minStep = 1,
    setCurrentStep,
    onBack,
    onContinue,
    onPublish,
}: UseButtonNavigationOptions): UseButtonNavigationReturn => {
    const isFirstStep = currentStep === minStep;
    const isLastStep = currentStep === totalSteps;

    const handleBack = useCallback(() => {
        if (onBack) {
            onBack();
        } else if (setCurrentStep && currentStep > minStep) {
            setCurrentStep(currentStep - 1);
        }
    }, [onBack, setCurrentStep, currentStep, minStep]);

    const handleContinue = useCallback(() => {
        if (onContinue) {
            onContinue();
        } else if (setCurrentStep && currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    }, [onContinue, setCurrentStep, currentStep, totalSteps]);

    const handlePublish = useCallback(() => {
        onPublish();
    }, [onPublish]);

    return {
        handleBack,
        handleContinue,
        handlePublish,
        isFirstStep,
        isLastStep,
    };
};
