import { Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MOBILE_BREAKPOINT = 768;

// Notion-inspired color palette
const NOTION = {
    background: '#FFFFFF',
    backgroundSecondary: '#F7F6F3',
    text: '#37352F',
};

export const makeStyles = (widgetCount: number) => {
    const isMobile = SCREEN_WIDTH < MOBILE_BREAKPOINT;
    const shouldStack = isMobile || widgetCount === 1;

    return StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: NOTION.backgroundSecondary,
        },
        container: {
            flexGrow: 1,
            paddingHorizontal: 16,
            paddingTop: 24,
            paddingBottom: 16,
            justifyContent: 'center',
        },
        widgetsContainer: {
            flexDirection: shouldStack ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: shouldStack ? 'stretch' : 'stretch',
            gap: 12,
            paddingHorizontal: shouldStack ? 0 : 16,
        },
        widgetWrapper: {
            flex: shouldStack ? undefined : 1,
            maxWidth: shouldStack ? undefined : 400,
        },
        headerText: {
            color: NOTION.text,
            fontSize: 28,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 24,
        },
    });
};
