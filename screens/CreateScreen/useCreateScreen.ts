import { useCallback } from 'react';
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
                router.push('/createEpisode' as Href);
                break;
            case CreateType.PRODUCT:
                router.push('/createAsset' as Href);
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
