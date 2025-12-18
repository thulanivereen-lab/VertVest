import React from 'react';
import { View, Text } from 'react-native';
import ReviewSection from '@/components/shared/ReviewSection';
import { makeStyles } from './EpisodeReviewStep.styles';
import type { EpisodeReviewStepProps } from './EpisodeReviewStep.types';

const EpisodeReviewStep: React.FC<EpisodeReviewStepProps> = ({
    seriesLabel,
    episodeData,
    onEditSeries,
    onEditDetails,
}) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review & Publish</Text>
            <Text style={styles.subtitle}>
                Review your episode before publishing
            </Text>

            {/* Series Section */}
            <ReviewSection title="Series" onEdit={onEditSeries}>
                <View style={styles.field}>
                    <Text style={styles.fieldValue}>{seriesLabel}</Text>
                </View>
            </ReviewSection>

            {/* Episode Details Section */}
            <ReviewSection title="Episode Details" onEdit={onEditDetails}>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Title</Text>
                    <Text style={styles.fieldValue}>
                        {episodeData.title || '—'}
                    </Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Description</Text>
                    <Text style={styles.fieldValue}>
                        {episodeData.description || '—'}
                    </Text>
                </View>
                <View style={styles.mediaStatus}>
                    <View style={styles.mediaItem}>
                        <Text style={styles.fieldLabel}>Video</Text>
                        <Text
                            style={
                                episodeData.videoUri
                                    ? styles.uploaded
                                    : styles.notUploaded
                            }
                        >
                            {episodeData.videoUri ? '✓ Uploaded' : '✗ Not uploaded'}
                        </Text>
                    </View>
                    <View style={styles.mediaItem}>
                        <Text style={styles.fieldLabel}>Thumbnail</Text>
                        <Text
                            style={
                                episodeData.thumbnailUri
                                    ? styles.uploaded
                                    : styles.notUploaded
                            }
                        >
                            {episodeData.thumbnailUri ? '✓ Uploaded' : '✗ Not uploaded'}
                        </Text>
                    </View>
                </View>
            </ReviewSection>
        </View>
    );
};

export default EpisodeReviewStep;
