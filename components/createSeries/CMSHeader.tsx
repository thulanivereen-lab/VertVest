import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { makeStyles } from './CMSHeader.styles';
import type { CMSHeaderProps } from './CMSHeader.types';

const ICON_COLOR = '#37352F';

const CMSHeader: React.FC<CMSHeaderProps> = ({ title, onBackPress }) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onBackPress}
                style={styles.backButton}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                accessibilityRole="button"
                accessibilityLabel="Go back"
            >
                <MaterialIcons name="chevron-left" size={28} color={ICON_COLOR} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.placeholder} />
        </View>
    );
};

export default CMSHeader;
