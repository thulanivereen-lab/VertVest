import { useCallback } from 'react';
import { Alert } from 'react-native';
import { Href, useRouter } from 'expo-router';
import { CreateType } from '@/components/create/CreateWidget.types';

export const useCreateScreen = () => {
    const router = useRouter();

    // Configure which create types are available
    // This could come from permissions/feature flags in a real app
    const availableCreateTypes: CreateType[] = [
        CreateType.SERIES,
        CreateType.EPISODE,
        CreateType.PRODUCT,
    ];

    const handleCreateClick = useCallback((createType: CreateType) => {
        // Navigation integration - routes to appropriate create flow
        switch (createType) {
            case CreateType.SERIES:
                router.push('/create/series' as Href);
                break;
            case CreateType.EPISODE:
                // TODO: router.push('/create/episode');
                Alert.alert('Add Episode', 'Navigate to episode creation flow');
                break;
            case CreateType.PRODUCT:
                // TODO: router.push('/create/product');
                Alert.alert('Create Product', 'Navigate to product creation flow');
                break;
        }
    }, [router]);

    return {
        // State
        availableCreateTypes,
        widgetCount: availableCreateTypes.length,

        // Handlers
        handleCreateClick,
    };
};
