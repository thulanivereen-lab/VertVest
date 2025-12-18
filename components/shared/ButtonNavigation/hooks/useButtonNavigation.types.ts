export interface UseButtonNavigationOptions {
    currentStep: number;
    totalSteps: number;
    minStep?: number;
    // Option 1: Simple local state - hook generates handlers
    setCurrentStep?: (step: number) => void;
    // Option 2: Custom handlers (e.g., from context)
    onBack?: () => void;
    onContinue?: () => void;
    // Required: custom publish handler
    onPublish: () => void;
}

export interface UseButtonNavigationReturn {
    handleBack: () => void;
    handleContinue: () => void;
    handlePublish: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}
