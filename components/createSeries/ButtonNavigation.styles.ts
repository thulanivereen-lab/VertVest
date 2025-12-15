import { StyleSheet } from 'react-native';

const NOTION = {
    background: '#FFFFFF',
    text: '#37352F',
    accent: '#2383E2',
    accentHover: '#1A6BC4',
    border: '#E9E9E7',
    backgroundSecondary: '#F7F6F3',
};

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 16,
            backgroundColor: NOTION.background,
            borderTopWidth: 1,
            borderTopColor: NOTION.border,
            gap: 12,
        },
        button: {
            flex: 1,
            paddingVertical: 14,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        backButton: {
            backgroundColor: NOTION.backgroundSecondary,
            borderWidth: 1,
            borderColor: NOTION.border,
        },
        backButtonPressed: {
            backgroundColor: NOTION.border,
        },
        backButtonText: {
            fontSize: 16,
            fontWeight: '500',
            color: NOTION.text,
        },
        primaryButton: {
            backgroundColor: NOTION.accent,
        },
        primaryButtonPressed: {
            backgroundColor: NOTION.accentHover,
        },
        primaryButtonText: {
            fontSize: 16,
            fontWeight: '600',
            color: '#FFFFFF',
        },
        buttonDisabled: {
            opacity: 0.5,
        },
    });
