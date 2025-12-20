import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { AssetType, ASSET_TYPE_CONFIGS } from '../CreateAssetScreen.types';
import { makeStyles } from './AssetTypeStep.styles';

interface AssetTypeStepProps {
    selectedType: AssetType | null;
    onSelectType: (type: AssetType) => void;
}

const AssetTypeStep: React.FC<AssetTypeStepProps> = ({
    selectedType,
    onSelectType,
}) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Asset Type</Text>

            {ASSET_TYPE_CONFIGS.map((config) => (
                <Pressable
                    key={config.type}
                    style={[
                        styles.row,
                        selectedType === config.type && styles.rowSelected,
                    ]}
                    onPress={() => onSelectType(config.type)}
                    accessibilityRole="button"
                    accessibilityLabel={`Select ${config.title} asset type`}
                >
                    <Text
                        style={[
                            styles.rowTitle,
                            selectedType === config.type && styles.rowTitleSelected,
                        ]}
                    >
                        {config.title}
                    </Text>
                    <Text style={styles.rowDescription}>{config.description}</Text>
                </Pressable>
            ))}
        </View>
    );
};

export default AssetTypeStep;
