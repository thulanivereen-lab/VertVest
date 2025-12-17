import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            marginBottom: 16,
        },
        label: {
            fontSize: 14,
            fontWeight: '500',
            color: NOTION.text,
            marginBottom: 8,
        },
        dropdown: {
            backgroundColor: NOTION.backgroundSecondary,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        dropdownText: {
            fontSize: 14,
            color: NOTION.text,
        },
        dropdownPlaceholder: {
            fontSize: 14,
            color: NOTION.textSecondary,
        },
        dropdownArrow: {
            fontSize: 12,
            color: NOTION.textSecondary,
        },
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
        },
        modalContent: {
            backgroundColor: NOTION.background,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            maxHeight: '50%',
        },
        modalHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: NOTION.border,
        },
        modalTitle: {
            fontSize: 16,
            fontWeight: '600',
            color: NOTION.text,
        },
        modalCloseText: {
            fontSize: 14,
            color: NOTION.accent,
            fontWeight: '500',
        },
        optionItem: {
            paddingHorizontal: 16,
            paddingVertical: 14,
            borderBottomWidth: 1,
            borderBottomColor: NOTION.border,
        },
        optionItemSelected: {
            backgroundColor: NOTION.backgroundSecondary,
        },
        optionText: {
            fontSize: 14,
            color: NOTION.text,
        },
        optionTextSelected: {
            color: NOTION.accent,
            fontWeight: '500',
        },
    });
