import { CreateWidget } from '@/components/create/CreateWidget';
import { CreateType } from '@/components/create/CreateWidget.types';
import React, { useCallback } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeStyles } from './CreateScreen.styles';

const CreateScreen: React.FC = () => {

    // Configure which create types are available
    // This could come from permissions/feature flags in a real app
    const availableCreateTypes: CreateType[] = [
        CreateType.SERIES,
        CreateType.EPISODE,
        CreateType.PRODUCT,
    ];

    const widgetCount = availableCreateTypes.length;
    const styles = makeStyles(widgetCount);

    const handleCreateClick = useCallback((createType: CreateType) => {
        // Navigation integration - routes to appropriate create flow
        switch (createType) {
            case CreateType.SERIES:
                // router.push('/create/series');
                Alert.alert('Create Series', 'Navigate to series creation flow');
                break;
            case CreateType.EPISODE:
                // router.push('/create/episode');
                Alert.alert('Add Episode', 'Navigate to episode creation flow');
                break;
            case CreateType.PRODUCT:
                // router.push('/create/product');
                Alert.alert('Create Product', 'Navigate to product creation flow');
                break;
        }
    }, []);

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
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateScreen;