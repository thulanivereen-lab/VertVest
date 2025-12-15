import { CreateContent, CreateType } from '@/components/create/CreateWidget.types';

const CREATE_CONTENT_MAP: Record<CreateType, CreateContent> = {
    [CreateType.SERIES]: {
        icon: 'film',
        title: 'Create New Series',
        description: 'Start a new content series with multiple episodes',
        buttonText: 'Create Series',
    },
    [CreateType.EPISODE]: {
        icon: 'play.rectangle',
        title: 'Add Episode',
        description: 'Add a new episode to an existing series',
        buttonText: 'Add Episode',
    },
    [CreateType.PRODUCT]: {
        icon: 'dollar',
        title: 'Create Sellable Asset',
        description: 'Create standalone products or digital goods',
        buttonText: 'Create Product',
    },
};

export const getCreateContent = (createType: CreateType): CreateContent => {
    return CREATE_CONTENT_MAP[createType];
};

export const getAllCreateTypes = (): CreateType[] => {
    return Object.values(CreateType);
};