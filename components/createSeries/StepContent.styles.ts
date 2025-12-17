import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        stepContainer: {
            flex: 1,
            padding: 20,
        },
        placeholderTitle: {
            fontSize: 24,
            fontWeight: '700',
            color: NOTION.text,
            marginBottom: 12,
        },
        placeholderText: {
            fontSize: 16,
            color: NOTION.textSecondary,
            lineHeight: 24,
            marginBottom: 24,
        },
        placeholderBox: {
            backgroundColor: NOTION.backgroundSecondary,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderStyle: 'dashed',
            padding: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        placeholderBoxText: {
            fontSize: 14,
            color: NOTION.textSecondary,
            textAlign: 'center',
        },
        // Review step styles
        reviewTitle: {
            fontSize: 24,
            fontWeight: '700',
            color: NOTION.text,
            marginBottom: 4,
        },
        reviewSubtitle: {
            fontSize: 14,
            color: NOTION.textSecondary,
            marginBottom: 24,
        },
        field: {
            marginBottom: 16,
        },
        fieldLabel: {
            fontSize: 12,
            fontWeight: '500',
            color: NOTION.textSecondary,
            marginBottom: 4,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
        },
        fieldValue: {
            fontSize: 16,
            color: NOTION.text,
            lineHeight: 22,
        },
        emptyText: {
            fontSize: 14,
            color: NOTION.textSecondary,
            fontStyle: 'italic',
        },
        tagsContainer: {
            marginBottom: 8,
        },
        tagsList: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
            marginTop: 8,
        },
        tag: {
            backgroundColor: NOTION.background,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 6,
        },
        tagText: {
            fontSize: 14,
            color: NOTION.text,
        },
        memberItem: {
            marginBottom: 8,
        },
        memberText: {
            fontSize: 14,
            color: NOTION.text,
            lineHeight: 20,
        },
        mediaStatus: {
            flexDirection: 'row',
            gap: 24,
            marginTop: 8,
        },
        mediaItem: {
            flex: 1,
        },
        uploaded: {
            fontSize: 14,
            color: '#22C55E',
            fontWeight: '500',
        },
        notUploaded: {
            fontSize: 14,
            color: NOTION.textSecondary,
        },
        thumbnail: {
            width: 80,
            height: 80,
            borderRadius: 8,
            backgroundColor: NOTION.backgroundSecondary,
        },
    });
