import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CreateWidget } from '@/components/create/CreateWidget';

import { makeStyles } from './CreateScreen.styles';
import { useCreateScreen } from './useCreateScreen';

const CreateScreen: React.FC = () => {
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateScreen;
