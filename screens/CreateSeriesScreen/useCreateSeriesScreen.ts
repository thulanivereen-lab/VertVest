import { useCallback } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useSeriesForm, TOTAL_STEPS } from '@/context/SeriesForm';
import { useButtonNavigation } from '@/components/shared/ButtonNavigation';

export const useCreateSeriesScreen = () => {
    const router = useRouter();
    const {
        currentStep,
        goToNextStep,
        goToPreviousStep,
        saveDraft,
        isStepValid,
    } = useSeriesForm();

    const handleBackPress = useCallback(() => {
        Alert.alert(
            'Save as draft?',
            'Would you like to save your progress before leaving?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                    onPress: () => router.back(),
                },
                {
                    text: 'Yes',
                    onPress: async () => {
                        await saveDraft();
                        router.back();
                    },
                },
            ]
        );
    }, [router, saveDraft]);

    const { handleBack, handleContinue, handlePublish } = useButtonNavigation({
        currentStep,
        totalSteps: TOTAL_STEPS,
        onBack: goToPreviousStep,
        onContinue: goToNextStep,
        onPublish: () => {
            // TODO: Implement publish logic
            Alert.alert(
                'Publish Series',
                'Publishing functionality will be implemented here.',
                [{ text: 'OK', onPress: () => router.back() }]
            );
        },
    });

    return {
        // State
        currentStep,
        totalSteps: TOTAL_STEPS,
        isContinueDisabled: !isStepValid(currentStep),

        // Handlers
        handleBackPress,
        handleBack,
        handleContinue,
        handlePublish,
    };
};
