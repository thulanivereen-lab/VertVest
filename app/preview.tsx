import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NOTION } from '@/styles';

/**
 * Component Preview Screen
 *
 * Use this screen to preview and test new components during development.
 * Only accessible in development mode via the "Preview Components" button
 * on the Create screen.
 *
 * Usage:
 * 1. Import your component
 * 2. Add state as needed
 * 3. Render in a section below
 */

export default function PreviewScreen() {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <Text style={styles.header}>Component Preview</Text>
                <Text style={styles.subheader}>Development sandbox for testing components</Text>

                {/* Add your component previews here */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Empty Preview</Text>
                    <Text style={styles.placeholder}>
                        Import and render components here to preview them during development.
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: NOTION.backgroundSecondary,
    },
    container: {
        flex: 1,
    },
    content: {
        padding: 16,
        paddingBottom: 40,
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        color: NOTION.text,
        marginBottom: 4,
    },
    subheader: {
        fontSize: 14,
        color: NOTION.textSecondary,
        marginBottom: 24,
    },
    section: {
        marginBottom: 32,
        backgroundColor: NOTION.background,
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: NOTION.border,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: NOTION.accent,
        marginBottom: 16,
    },
    placeholder: {
        fontSize: 14,
        color: NOTION.textSecondary,
        fontStyle: 'italic',
    },
});
