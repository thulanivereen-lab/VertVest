import { createContext, useContext } from 'react';
import type { SeriesFormContextValue } from './SeriesFormContext.types';

// Create context
export const SeriesFormContext = createContext<SeriesFormContextValue | undefined>(undefined);

// Custom hook
export const useSeriesForm = () => {
    const context = useContext(SeriesFormContext);
    if (!context) {
        throw new Error('useSeriesForm must be used within SeriesFormProvider');
    }
    return context;
};
