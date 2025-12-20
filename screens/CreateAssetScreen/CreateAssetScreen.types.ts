export enum AssetStep {
    SELECT_TYPE = 1,
    SETTINGS = 2,
    REVIEW = 3,
}

export enum AssetType {
    PHYSICAL = 'physical',
    DIGITAL = 'digital',
    EXPERIENTIAL = 'experiential',
    CUSTOM = 'custom',
}

export interface AssetTypeConfig {
    type: AssetType;
    title: string;
    description: string;
}

export interface AssetFormData {
    assetType: AssetType | null;
    selectedSeriesId: string;
    // Expand with type-specific fields later
}

export const ASSET_TYPE_CONFIGS: readonly AssetTypeConfig[] = [
    {
        type: AssetType.PHYSICAL,
        title: 'Physical',
        description: 'i.e merch, props, costumes, etc.',
    },
    {
        type: AssetType.DIGITAL,
        title: 'Digital',
        description: 'i.e BTS footage, setup vs shot, personalized cast video message',
    },
    {
        type: AssetType.EXPERIENTIAL,
        title: 'Experiential',
        description: 'i.e release party, test screening, etc.',
    },
    {
        type: AssetType.CUSTOM,
        title: 'Custom Asset',
        description: 'design your own sellable asset and our team will reach out to discuss creating a bespoke product item',
    },
];
