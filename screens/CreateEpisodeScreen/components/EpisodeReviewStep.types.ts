import type { EpisodeFormData } from '../CreateEpisodeScreen.types';

export interface EpisodeReviewStepProps {
    seriesLabel: string;
    episodeData: EpisodeFormData;
    onEditSeries: () => void;
    onEditDetails: () => void;
}
