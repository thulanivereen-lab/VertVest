import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { makeStyles } from './ReviewSection.styles';
import type { ReviewSectionProps } from './ReviewSection.types';

const ReviewSection: React.FC<ReviewSectionProps> = ({
    title,
    onEdit,
    children,
}) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {onEdit && (
                    <Pressable style={styles.editButton} onPress={onEdit}>
                        <Text style={styles.editButtonText}>Edit</Text>
                    </Pressable>
                )}
            </View>
            <View style={styles.content}>{children}</View>
        </View>
    );
};

export default ReviewSection;
