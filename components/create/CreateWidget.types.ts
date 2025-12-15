export enum CreateType {
    SERIES = 'Series',
    EPISODE = 'Episode',
    PRODUCT = 'Product',
}

export interface CreateWidgetProps {
    createType: CreateType;
    onCreateClick?: (createType: CreateType) => void;
}

export interface CreateContent {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
}
