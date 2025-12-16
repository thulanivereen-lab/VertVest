import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';
import { InputType } from './FreeTextInput.types';

const ERROR_COLOR = '#E53935';

export const makeStyles = (inputType: InputType, hasError: boolean) =>
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
        inputContainer: {
            borderWidth: 1,
            borderColor: hasError ? ERROR_COLOR : NOTION.border,
            borderRadius: 8,
            backgroundColor: NOTION.background,
        },
        input: {
            fontSize: 16,
            color: NOTION.text,
            paddingHorizontal: 12,
            paddingVertical: 12,
            height: inputType === InputType.TITLE ? 44 : 120,
            textAlignVertical: inputType === InputType.DESCRIPTION ? 'top' : 'center',
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 6,
        },
        errorText: {
            fontSize: 12,
            color: ERROR_COLOR,
            flex: 1,
        },
        characterCount: {
            fontSize: 12,
            color: NOTION.textSecondary,
        },
    });
