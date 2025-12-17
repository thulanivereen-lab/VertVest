import React, { ReactNode, useCallback, useState } from 'react';
import { SeriesFormContext } from './SeriesFormContext';
import {
    CastCrewFormData,
    DetailsFormData,
    MediaFormData,
    PricingFormData,
    SeriesFormContextValue,
    SeriesFormData,
    SeriesStep,
    TOTAL_STEPS,
    initialFormData,
} from './SeriesFormContext.types';

interface SeriesFormProviderProps {
    children: ReactNode;
}

export const SeriesFormProvider: React.FC<SeriesFormProviderProps> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState<SeriesStep>(SeriesStep.DETAILS);
    const [formData, setFormData] = useState<SeriesFormData>(initialFormData);

    const updateDetailsForm = useCallback((data: Partial<DetailsFormData>) => {
        setFormData((prev) => ({
            ...prev,
            details: { ...prev.details, ...data },
        }));
    }, []);

    const updateCastCrewForm = useCallback((data: Partial<CastCrewFormData>) => {
        setFormData((prev) => ({
            ...prev,
            castCrew: { ...prev.castCrew, ...data },
        }));
    }, []);

    const updateMediaForm = useCallback((data: Partial<MediaFormData>) => {
        setFormData((prev) => ({
            ...prev,
            media: { ...prev.media, ...data },
        }));
    }, []);

    const updatePricingForm = useCallback((data: Partial<PricingFormData>) => {
        setFormData((prev) => ({
            ...prev,
            pricing: { ...prev.pricing, ...data },
        }));
    }, []);

    const goToNextStep = useCallback(() => {
        setCurrentStep((prev) => {
            if (prev < TOTAL_STEPS) {
                return (prev + 1) as SeriesStep;
            }
            return prev;
        });
    }, []);

    const goToPreviousStep = useCallback(() => {
        setCurrentStep((prev) => {
            if (prev > 1) {
                return (prev - 1) as SeriesStep;
            }
            return prev;
        });
    }, []);

    const saveDraft = useCallback(async () => {
        // TODO: Implement actual draft saving to AsyncStorage or backend
        console.log('Saving draft:', formData);
    }, [formData]);

    const clearDraft = useCallback(() => {
        setFormData(initialFormData);
        setCurrentStep(SeriesStep.DETAILS);
    }, []);

    const isStepValid = useCallback((step: SeriesStep): boolean => {
        // TODO: Implement actual validation per step
        // For now, return true to allow navigation
        switch (step) {
            case SeriesStep.DETAILS:
                // return formData.details.title.length > 0;
                return true;
            case SeriesStep.DETAILS2:
                return true;
            case SeriesStep.MEDIA:
                return true;
            case SeriesStep.REVIEW:
                return true;
            default:
                return true;
        }
    }, []);

    const resetForm = useCallback(() => {
        setFormData(initialFormData);
        setCurrentStep(SeriesStep.DETAILS);
    }, []);

    const contextValue: SeriesFormContextValue = {
        currentStep,
        setCurrentStep,
        formData,
        updateDetailsForm,
        updateCastCrewForm,
        updateMediaForm,
        updatePricingForm,
        goToNextStep,
        goToPreviousStep,
        saveDraft,
        clearDraft,
        isStepValid,
        resetForm,
    };

    return (
        <SeriesFormContext.Provider value={contextValue}>
            {children}
        </SeriesFormContext.Provider>
    );
};
