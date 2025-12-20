import React from 'react';
import { View, Text } from 'react-native';
import ReviewSection from '@/components/shared/ReviewSection';
import { makeStyles } from './AssetReviewStep.styles';

interface AssetReviewStepProps {
    assetTypeLabel: string;
    seriesLabel: string;
    onEditAssetType: () => void;
    onEditSettings: () => void;
}

const AssetReviewStep: React.FC<AssetReviewStepProps> = ({
    assetTypeLabel,
    seriesLabel,
    onEditAssetType,
    onEditSettings,
}) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review & Publish</Text>
            <Text style={styles.subtitle}>
                Review your asset before publishing
            </Text>

            <ReviewSection title="Asset Type" onEdit={onEditAssetType}>
                <View style={styles.field}>
                    <Text style={styles.fieldValue}>{assetTypeLabel}</Text>
                </View>
            </ReviewSection>

            <ReviewSection title="Asset Settings" onEdit={onEditSettings}>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Series/Film</Text>
                    <Text style={styles.fieldValue}>{seriesLabel}</Text>
                </View>
            </ReviewSection>
        </View>
    );
};

export default AssetReviewStep;
