import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CMSHeader from '@/components/createSeries/CMSHeader';
import ButtonNavigation, { useButtonNavigation } from '@/components/shared/ButtonNavigation';
import ProgressBar from '@/components/shared/ProgressBar';
import UploadEpisode from '@/modules/UploadEpisode';
import EpisodeReviewStep from './components/EpisodeReviewStep';
import { mockSeriesOptions } from '@/data/mockSeries';

import { makeStyles } from './CreateEpisodeScreen.styles';
import { EpisodeStep, type EpisodeFormData } from './CreateEpisodeScreen.types';

const TOTAL_STEPS = 2;

const CreateEpisodeScreen: React.FC = () => {
    const styles = makeStyles();
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState<EpisodeStep>(EpisodeStep.UPLOAD);
    const [episodeData, setEpisodeData] = useState<EpisodeFormData>({
        selectedSeriesId: '',
        title: '',
        description: '',
        videoUri: null,
        thumbnailUri: null,
    });

    const updateEpisodeData = (data: Partial<EpisodeFormData>) => {
        setEpisodeData((prev) => ({ ...prev, ...data }));
    };

    const handleBackPress = () => {
        router.back();
    };

    const { handleBack, handleContinue, handlePublish } = useButtonNavigation({
        currentStep,
        totalSteps: TOTAL_STEPS,
        setCurrentStep,
        onPublish: () => {
            // TODO: Implement publish logic
            console.log('Publishing episode:', episodeData);
            router.back();
        },
    });

    const handleUploadVideo = () => {
        // TODO: Implement video picker
        console.log('Upload video');
    };

    const handleUploadThumbnail = () => {
        // TODO: Implement image picker
        console.log('Upload thumbnail');
    };

    const handleEditStep = (step: EpisodeStep) => {
        setCurrentStep(step);
    };

    const getSeriesLabel = (seriesId: string): string => {
        const series = mockSeriesOptions.find((s) => s.value === seriesId);
        return series?.label || '—';
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case EpisodeStep.UPLOAD:
                return (
                    <View style={styles.stepContainer}>
                        <UploadEpisode
                            isPilot={false}
                            data={{
                                title: episodeData.title,
                                description: episodeData.description,
                                selectedSeriesId: episodeData.selectedSeriesId,
                            }}
                            onDataChange={(data) => updateEpisodeData(data)}
                            onUploadVideo={handleUploadVideo}
                            onUploadThumbnail={handleUploadThumbnail}
                            seriesOptions={mockSeriesOptions}
                        />
                    </View>
                );
            case EpisodeStep.REVIEW:
                return (
                    <EpisodeReviewStep
                        seriesLabel={getSeriesLabel(episodeData.selectedSeriesId)}
                        episodeData={episodeData}
                        onEditSeries={() => handleEditStep(EpisodeStep.UPLOAD)}
                        onEditDetails={() => handleEditStep(EpisodeStep.UPLOAD)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            {/* Fixed Top Section */}
            <View style={styles.topSection}>
                <CMSHeader title="Add Episode" onBackPress={handleBackPress} />
                <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
            </View>

            {/* Scrollable Middle Section */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {renderStepContent()}
            </ScrollView>

            {/* Fixed Bottom Section */}
            <View style={styles.bottomSection}>
                <ButtonNavigation
                    currentStep={currentStep}
                    totalSteps={TOTAL_STEPS}
                    onBack={handleBack}
                    onContinue={handleContinue}
                    onPublish={handlePublish}
                />
            </View>
        </SafeAreaView>
    );
};

export default CreateEpisodeScreen;
