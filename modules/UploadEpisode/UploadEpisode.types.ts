export interface SeriesDropdownOption {
    label: string;
    value: string;
}

export interface UploadEpisodeData {
    title: string;
    description: string;
    selectedSeriesId?: string;
}

export interface UploadEpisodeProps {
    isPilot: boolean;
    data: UploadEpisodeData;
    onDataChange: (data: Partial<UploadEpisodeData>) => void;
    onUploadVideo: () => void;
    onUploadThumbnail: () => void;
    seriesOptions?: readonly SeriesDropdownOption[];
}
