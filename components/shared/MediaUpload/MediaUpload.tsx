import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { makeStyles } from './MediaUpload.styles';
import type { MediaUploadProps } from './MediaUpload.types';
import { NOTION } from '@/styles';

const MediaUpload: React.FC<MediaUploadProps> = ({
    title,
    description = 'Tap to upload',
    onPress,
    disabled = false,
}) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Pressable
                style={[styles.uploadBox, disabled && styles.uploadBoxDisabled]}
                onPress={onPress}
                disabled={disabled}
            >
                <View style={styles.iconContainer}>
                    <Feather name="upload" size={24} color={NOTION.textSecondary} />
                </View>
                <Text style={styles.description}>{description}</Text>
            </Pressable>
        </View>
    );
};

export default MediaUpload;
