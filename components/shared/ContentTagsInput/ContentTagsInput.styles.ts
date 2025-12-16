import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
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
        tagsContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 12,
        },
        tag: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: NOTION.backgroundSecondary,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 16,
            paddingVertical: 6,
            paddingLeft: 12,
            paddingRight: 8,
        },
        tagText: {
            fontSize: 14,
            color: NOTION.text,
            marginRight: 6,
        },
        tagRemoveButton: {
            padding: 2,
        },
        tagRemoveText: {
            fontSize: 16,
            color: NOTION.textSecondary,
            fontWeight: '500',
        },
        inputContainer: {
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
        footer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 6,
        },
        tagCount: {
            fontSize: 12,
            color: NOTION.textSecondary,
        },
        emptyTagsText: {
            fontSize: 14,
            color: NOTION.textSecondary,
            fontStyle: 'italic',
            marginBottom: 12,
        },
    });
