import React from 'react';
import { View, Text } from 'react-native';
import Dropdown from '@/components/shared/Dropdown';
import { AssetType, ASSET_TYPE_CONFIGS } from '../CreateAssetScreen.types';
import { makeStyles } from './AssetSettingsStep.styles';
import type { SeriesOption } from '@/data/mockSeries';

interface AssetSettingsStepProps {
    assetType: AssetType;
    selectedSeriesId: string;
    seriesOptions: readonly SeriesOption[];
    onSeriesChange: (seriesId: string) => void;
}

const AssetSettingsStep: React.FC<AssetSettingsStepProps> = ({
    assetType,
    selectedSeriesId,
    seriesOptions,
    onSeriesChange,
}) => {
    const styles = makeStyles();

    const getAssetTypeLabel = (): string => {
        const config = ASSET_TYPE_CONFIGS.find((c) => c.type === assetType);
        return config?.title || 'Asset';
    };

    const getPlaceholderHint = (): string => {
        switch (assetType) {
            case AssetType.PHYSICAL:
                return 'Configure merch, props, costumes settings here';
            case AssetType.DIGITAL:
                return 'Configure BTS footage, personalized video settings here';
            case AssetType.EXPERIENTIAL:
                return 'Configure release party, test screening settings here';
            case AssetType.CUSTOM:
                return 'Describe your custom asset idea here';
            default:
                return 'Asset settings will appear here';
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Asset Settings</Text>

            <Dropdown
                label="Select Series/Film"
                placeholder="Choose a series or film..."
                value={selectedSeriesId}
                options={seriesOptions}
                onChange={onSeriesChange}
            />

            <View style={styles.cmsPlaceholder}>
                <Text style={styles.cmsPlaceholderTitle}>
                    {getAssetTypeLabel()} Asset CMS - Coming Soon
                </Text>
                <Text style={styles.cmsPlaceholderHint}>{getPlaceholderHint()}</Text>
            </View>
        </View>
    );
};

export default AssetSettingsStep;
