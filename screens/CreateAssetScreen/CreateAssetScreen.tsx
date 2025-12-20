import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CMSHeader from '@/components/createSeries/CMSHeader';
import ButtonNavigation, { useButtonNavigation } from '@/components/shared/ButtonNavigation';
import ProgressBar from '@/components/shared/ProgressBar';
import { mockSeriesOptions } from '@/data/mockSeries';

import AssetTypeStep from './components/AssetTypeStep';
import AssetSettingsStep from './components/AssetSettingsStep';
import AssetReviewStep from './components/AssetReviewStep';

import { makeStyles } from './CreateAssetScreen.styles';
import {
    AssetStep,
    AssetType,
    ASSET_TYPE_CONFIGS,
    type AssetFormData,
} from './CreateAssetScreen.types';

const TOTAL_STEPS = 3;

const CreateAssetScreen: React.FC = () => {
    const styles = makeStyles();
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState<AssetStep>(AssetStep.SELECT_TYPE);
    const [assetData, setAssetData] = useState<AssetFormData>({
        assetType: null,
        selectedSeriesId: '',
    });

    const updateAssetData = (data: Partial<AssetFormData>) => {
        setAssetData((prev) => ({ ...prev, ...data }));
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
            console.log('Publishing asset:', assetData);
            router.back();
        },
    });

    const handleEditStep = (step: AssetStep) => {
        setCurrentStep(step);
    };

    const getSeriesLabel = (seriesId: string): string => {
        const series = mockSeriesOptions.find((s) => s.value === seriesId);
        return series?.label || '—';
    };

    const getAssetTypeLabel = (assetType: AssetType | null): string => {
        if (!assetType) return '—';
        const config = ASSET_TYPE_CONFIGS.find((c) => c.type === assetType);
        return config?.title || '—';
    };

    const isContinueDisabled =
        currentStep === AssetStep.SELECT_TYPE && assetData.assetType === null;

    const renderStepContent = () => {
        switch (currentStep) {
            case AssetStep.SELECT_TYPE:
                return (
                    <View style={styles.stepContainer}>
                        <AssetTypeStep
                            selectedType={assetData.assetType}
                            onSelectType={(type) => updateAssetData({ assetType: type })}
                        />
                    </View>
                );
            case AssetStep.SETTINGS:
                return (
                    <View style={styles.stepContainer}>
                        <AssetSettingsStep
                            assetType={assetData.assetType!}
                            selectedSeriesId={assetData.selectedSeriesId}
                            seriesOptions={mockSeriesOptions}
                            onSeriesChange={(seriesId) =>
                                updateAssetData({ selectedSeriesId: seriesId })
                            }
                        />
                    </View>
                );
            case AssetStep.REVIEW:
                return (
                    <AssetReviewStep
                        assetTypeLabel={getAssetTypeLabel(assetData.assetType)}
                        seriesLabel={getSeriesLabel(assetData.selectedSeriesId)}
                        onEditAssetType={() => handleEditStep(AssetStep.SELECT_TYPE)}
                        onEditSettings={() => handleEditStep(AssetStep.SETTINGS)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <View style={styles.topSection}>
                <CMSHeader title="Create Asset" onBackPress={handleBackPress} />
                <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {renderStepContent()}
            </ScrollView>

            <View style={styles.bottomSection}>
                <ButtonNavigation
                    currentStep={currentStep}
                    totalSteps={TOTAL_STEPS}
                    onBack={handleBack}
                    onContinue={handleContinue}
                    onPublish={handlePublish}
                    isContinueDisabled={isContinueDisabled}
                />
            </View>
        </SafeAreaView>
    );
};

export default CreateAssetScreen;
