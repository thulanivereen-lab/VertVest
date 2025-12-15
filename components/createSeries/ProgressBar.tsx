import React from 'react';
import { Text, View } from 'react-native';
import { makeStyles } from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <View style={styles.barsContainer}>
                {Array.from({ length: totalSteps }, (_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.bar,
                            index < currentStep ? styles.barFilled : styles.barEmpty,
                        ]}
                    />
                ))}
            </View>
            <Text style={styles.stepText}>
                Step {currentStep} of {totalSteps}
            </Text>
        </View>
    );
};

export default ProgressBar;
