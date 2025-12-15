import React from 'react';
import { SeriesFormProvider } from '@/context/SeriesForm';
import CreateSeriesScreen from '@/screens/CreateSeriesScreen';

export default function CreateSeriesRoute() {
    return (
        <SeriesFormProvider>
            <CreateSeriesScreen />
        </SeriesFormProvider>
    );
}
