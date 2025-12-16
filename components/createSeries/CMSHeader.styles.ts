import { StyleSheet } from 'react-native';

const NOTION = {
    background: '#FFFFFF',
    text: '#37352F',
    border: '#E9E9E7',
};

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: NOTION.background,
            borderBottomWidth: 1,
            borderBottomColor: NOTION.border,
        },
        backButton: {
            padding: 4,
        },
        title: {
            fontSize: 18,
            fontWeight: '600',
            color: NOTION.text,
        },
        placeholder: {
            width: 36,
        },
    });
