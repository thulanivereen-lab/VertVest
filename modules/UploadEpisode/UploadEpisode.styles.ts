import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
            fontSize: 20,
            fontWeight: '600',
            color: NOTION.text,
            marginBottom: 4,
        },
        subtitle: {
            fontSize: 14,
            color: NOTION.textSecondary,
            marginBottom: 24,
        },
    });
