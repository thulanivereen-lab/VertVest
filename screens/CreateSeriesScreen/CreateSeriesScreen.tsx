import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CMSHeader from '@/components/createSeries/CMSHeader';
import ProgressBar from '@/components/createSeries/ProgressBar';
import ButtonNavigation from '@/components/createSeries/ButtonNavigation';
import StepContent from '@/components/createSeries/StepContent';

import { makeStyles } from './CreateSeriesScreen.styles';
import { useCreateSeriesScreen } from './useCreateSeriesScreen';

const CreateSeriesScreen: React.FC = () => {
    const styles = makeStyles();
    const {
        currentStep,
        totalSteps,
        isContinueDisabled,
        handleBackPress,
        handleBack,
        handleContinue,
        handlePublish,
    } = useCreateSeriesScreen();

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            {/* Fixed Top Section */}
            <View style={styles.topSection}>
                <CMSHeader title="Create Series" onBackPress={handleBackPress} />
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            </View>

            {/* Scrollable Middle Section */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <StepContent step={currentStep} />
            </ScrollView>

            {/* Fixed Bottom Section */}
            <View style={styles.bottomSection}>
                <ButtonNavigation
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    onBack={handleBack}
                    onContinue={handleContinue}
                    onPublish={handlePublish}
                    isContinueDisabled={isContinueDisabled}
                />
            </View>
        </SafeAreaView>
    );
};

export default CreateSeriesScreen;
