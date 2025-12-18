export enum EpisodeStep {
    UPLOAD = 1,
    REVIEW = 2,
}

export interface EpisodeFormData {
    selectedSeriesId: string;
    title: string;
    description: string;
    videoUri: string | null;
    thumbnailUri: string | null;
}
