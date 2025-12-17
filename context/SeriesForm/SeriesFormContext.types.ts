// Step enum
export enum SeriesStep {
    DETAILS = 1,
    DETAILS2 = 2,
    MEDIA = 3,
    REVIEW = 4,
}

export const TOTAL_STEPS = 4;

// Form data interfaces
export interface DetailsFormData {
    title: string;
    description: string;
    category: string;
    tags: string[];
}

export interface MediaFormData {
    coverImage: string | null;
    trailerVideo: string | null;
    thumbnails: string[];
}

export interface PricingFormData {
    price: number;
    currency: string;
    subscriptionType: 'one-time' | 'subscription' | 'free';
    subscriptionPeriod?: 'monthly' | 'yearly';
}

// Team member (represents a user - could come from backend later)
export interface TeamMember {
    id: string; // UUID
    name: string;
}

// Assignment linking a member to THIS series with role/access
export interface SeriesTeamAssignment {
    memberId: string; // references TeamMember.id
    role: string;
    access: string;
}

// Form data for cast & crew step
export interface CastCrewFormData {
    teamMembers: TeamMember[]; // list of members (for lookup)
    assignments: SeriesTeamAssignment[]; // role/access per member for this series
}

export interface SeriesFormData {
    details: DetailsFormData;
    castCrew: CastCrewFormData;
    media: MediaFormData;
    pricing: PricingFormData;
}

// Context value interface
export interface SeriesFormContextValue {
    currentStep: SeriesStep;
    setCurrentStep: (step: SeriesStep) => void;
    formData: SeriesFormData;
    updateDetailsForm: (data: Partial<DetailsFormData>) => void;
    updateCastCrewForm: (data: Partial<CastCrewFormData>) => void;
    updateMediaForm: (data: Partial<MediaFormData>) => void;
    updatePricingForm: (data: Partial<PricingFormData>) => void;
    goToNextStep: () => void;
    goToPreviousStep: () => void;
    saveDraft: () => Promise<void>;
    clearDraft: () => void;
    isStepValid: (step: SeriesStep) => boolean;
    resetForm: () => void;
}

// Initial form data
export const initialFormData: SeriesFormData = {
    details: {
        title: '',
        description: '',
        category: '',
        tags: [],
    },
    castCrew: {
        teamMembers: [],
        assignments: [],
    },
    media: {
        coverImage: null,
        trailerVideo: null,
        thumbnails: [],
    },
    pricing: {
        price: 0,
        currency: 'USD',
        subscriptionType: 'one-time',
    },
};
