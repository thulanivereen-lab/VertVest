import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = (isDisabled: boolean) =>
    StyleSheet.create({
        container: {
            marginBottom: 16,
        },
        title: {
            fontSize: 14,
            fontWeight: '500',
            color: NOTION.text,
            marginBottom: 4,
        },
        subtitle: {
            fontSize: 13,
            color: NOTION.textSecondary,
            marginBottom: 12,
        },
        inputRow: {
            flexDirection: 'row',
            gap: 8,
        },
        inputContainer: {
            flex: 3,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 8,
            backgroundColor: NOTION.background,
        },
        input: {
            fontSize: 16,
            color: NOTION.text,
            paddingHorizontal: 12,
            paddingVertical: 12,
            height: 44,
        },
        addButton: {
            flex: 1,
            backgroundColor: isDisabled ? NOTION.backgroundSecondary : NOTION.accent,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            height: 44,
        },
        addButtonPressed: {
            backgroundColor: NOTION.accentHover,
        },
        addButtonText: {
            fontSize: 16,
            fontWeight: '600',
            color: isDisabled ? NOTION.textSecondary : NOTION.white,
        },
    });
