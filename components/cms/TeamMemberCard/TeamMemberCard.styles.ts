import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            backgroundColor: NOTION.background,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 8,
            marginBottom: 12,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: NOTION.border,
        },
        name: {
            fontSize: 16,
            fontWeight: '600',
            color: NOTION.text,
            flex: 1,
        },
        removeButton: {
            padding: 4,
        },
        removeButtonText: {
            fontSize: 20,
            color: NOTION.textSecondary,
            fontWeight: '400',
        },
        body: {
            flexDirection: 'row',
            padding: 12,
            gap: 12,
        },
        dropdownContainer: {
            flex: 1,
        },
        dropdownLabel: {
            fontSize: 12,
            fontWeight: '500',
            color: NOTION.textSecondary,
            marginBottom: 6,
        },
        dropdown: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: NOTION.backgroundSecondary,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 6,
            paddingHorizontal: 10,
            paddingVertical: 10,
        },
        dropdownText: {
            fontSize: 14,
            color: NOTION.text,
        },
        dropdownArrow: {
            fontSize: 12,
            color: NOTION.textSecondary,
        },
        // Modal styles for dropdown
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
        },
        modalContent: {
            backgroundColor: NOTION.background,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingBottom: 34,
        },
        modalHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: NOTION.border,
        },
        modalTitle: {
            fontSize: 16,
            fontWeight: '600',
            color: NOTION.text,
        },
        modalCloseText: {
            fontSize: 16,
            color: NOTION.accent,
            fontWeight: '500',
        },
        optionItem: {
            paddingVertical: 14,
            paddingHorizontal: 16,
            borderBottomWidth: 1,
            borderBottomColor: NOTION.border,
        },
        optionItemSelected: {
            backgroundColor: NOTION.backgroundSecondary,
        },
        optionText: {
            fontSize: 16,
            color: NOTION.text,
        },
        optionTextSelected: {
            color: NOTION.accent,
            fontWeight: '500',
        },
    });
