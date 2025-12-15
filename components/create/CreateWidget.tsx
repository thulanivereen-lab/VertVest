import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { getCreateContent } from '@/data/createStrings';
import { CreateType, CreateWidgetProps } from './CreateWidget.types';
import { makeStyles } from './CreateWidget.styles';

const ICON_MAP: Record<CreateType, keyof typeof MaterialIcons.glyphMap> = {
    [CreateType.SERIES]: 'movie',
    [CreateType.EPISODE]: 'play-circle-outline',
    [CreateType.PRODUCT]: 'shopping-bag',
};

// Notion-style icon color
const ICON_COLOR = '#37352F';

export const CreateWidget: React.FC<CreateWidgetProps> = ({
    createType,
    onCreateClick,
}) => {
    const styles = makeStyles();
    const content = getCreateContent(createType);
    const iconName = ICON_MAP[createType];

    const handlePress = () => {
        if (onCreateClick) {
            onCreateClick(createType);
        }
    };

    return (
        <View style={styles.widget} accessibilityRole="button" accessibilityLabel={content.title}>
            <View style={styles.iconContainer}>
                <MaterialIcons name={iconName} size={24} color={ICON_COLOR} />
            </View>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.description}>{content.description}</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={handlePress}
                accessibilityRole="button"
                accessibilityLabel={content.buttonText}
            >
                <Text style={styles.buttonText}>{content.buttonText}</Text>
            </Pressable>
        </View>
    );
};

export default CreateWidget;
