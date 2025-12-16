import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { CreateWidget } from '@/components/create/CreateWidget';

import { makeStyles } from './CreateScreen.styles';
import { useCreateScreen } from './useCreateScreen';

const CreateScreen: React.FC = () => {
    const router = useRouter();
    const {
        availableCreateTypes,
        widgetCount,
        handleCreateClick,
    } = useCreateScreen();

    const styles = makeStyles(widgetCount);

    return (
        <SafeAreaView style={styles.screen} edges={['top']}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.widgetsContainer}>
                    {availableCreateTypes.map((type) => (
                        <View key={type} style={styles.widgetWrapper}>
                            <CreateWidget
                                createType={type}
                                onCreateClick={handleCreateClick}
                            />
                        </View>
                    ))}
                </View>

                {process.env.EXPO_PUBLIC_SHOW_PREVIEW === 'true' && (
                    <Pressable
                        style={devStyles.previewButton}
                        onPress={() => router.push('/preview')}
                    >
                        <Text style={devStyles.previewButtonText}>Preview Components</Text>
                    </Pressable>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

// Development-only styles (only rendered when __DEV__ is true)
const devStyles = StyleSheet.create({
    previewButton: {
        marginTop: 24,
        backgroundColor: '#6B7280',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    previewButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default CreateScreen;
