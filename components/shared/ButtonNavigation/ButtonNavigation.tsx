import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { makeStyles } from './ButtonNavigation.styles';
import type { ButtonNavigationProps } from './ButtonNavigation.types';

const ButtonNavigation: React.FC<ButtonNavigationProps> = ({
    currentStep,
    totalSteps,
    onBack,
    onContinue,
    onPublish,
    isPublishing = false,
    isContinueDisabled = false,
}) => {
    const styles = makeStyles();
    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === totalSteps;

    return (
        <View style={styles.container}>
            {!isFirstStep && (
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        styles.backButton,
                        pressed && styles.backButtonPressed,
                    ]}
                    onPress={onBack}
                    accessibilityRole="button"
                    accessibilityLabel="Go to previous step"
                >
                    <Text style={styles.backButtonText}>Back</Text>
                </Pressable>
            )}

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    styles.primaryButton,
                    pressed && styles.primaryButtonPressed,
                    (isContinueDisabled || isPublishing) && styles.buttonDisabled,
                ]}
                onPress={isLastStep ? onPublish : onContinue}
                disabled={isContinueDisabled || isPublishing}
                accessibilityRole="button"
                accessibilityLabel={isLastStep ? 'Publish series' : 'Continue to next step'}
            >
                {isPublishing ? (
                    <ActivityIndicator color="#FFFFFF" size="small" />
                ) : (
                    <Text style={styles.primaryButtonText}>
                        {isLastStep ? 'Publish' : 'Continue'}
                    </Text>
                )}
            </Pressable>
        </View>
    );
};

export default ButtonNavigation;
