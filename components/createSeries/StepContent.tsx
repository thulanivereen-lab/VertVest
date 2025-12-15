import { SeriesStep } from '@/context/SeriesForm';
import React from 'react';
import { Text, View } from 'react-native';
import { makeStyles } from './StepContent.styles';
import type { StepContentProps } from './StepContent.types';

const DetailsStep: React.FC = () => {
    const styles = makeStyles();
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.placeholderTitle}>Series Details</Text>
            <Text style={styles.placeholderText}>
                Enter the basic information about your series including title, description, category, and tags.
            </Text>
            <View style={styles.placeholderBox}>
                <Text style={styles.placeholderBoxText}>
                    Form components will be added here:{'\n'}
                    Title input, Description textarea,{'\n'}
                    Category selector, Tags input
                </Text>
            </View>
        </View>
    );
};

const Details2Step: React.FC = () => {
    const styles = makeStyles();
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.placeholderTitle}>Additional Details</Text>
            <Text style={styles.placeholderText}>
                Provide additional information about your series to help viewers discover and understand your content.
            </Text>
            <View style={styles.placeholderBox}>
                <Text style={styles.placeholderBoxText}>
                    Additional form components will be added here:{'\n'}
                    Genre selection, Target audience,{'\n'}
                    Content warnings, Release schedule
                </Text>
            </View>
        </View>
    );
};

const MediaStep: React.FC = () => {
    const styles = makeStyles();
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.placeholderTitle}>Media Assets</Text>
            <Text style={styles.placeholderText}>
                Upload your cover image, trailer video, and additional thumbnails for your series.
            </Text>
            <View style={styles.placeholderBox}>
                <Text style={styles.placeholderBoxText}>
                    Media upload components will be added here:{'\n'}
                    Cover image picker, Trailer video picker,{'\n'}
                    Thumbnail gallery
                </Text>
            </View>
        </View>
    );
};

const ReviewStep: React.FC = () => {
    const styles = makeStyles();
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.placeholderTitle}>Review & Publish</Text>
            <Text style={styles.placeholderText}>
                Review all the information you&apos;ve entered before publishing your series.
            </Text>
            <View style={styles.placeholderBox}>
                <Text style={styles.placeholderBoxText}>
                    Review summary will be shown here:{'\n'}
                    Series details preview, Media preview,{'\n'}
                    Edit buttons for each section
                </Text>
            </View>
        </View>
    );
};

const StepContent: React.FC<StepContentProps> = ({ step }) => {
    switch (step) {
        case SeriesStep.DETAILS:
            return <DetailsStep />;
        case SeriesStep.DETAILS2:
            return <Details2Step />;
        case SeriesStep.MEDIA:
            return <MediaStep />;
        case SeriesStep.REVIEW:
            return <ReviewStep />;
        default:
            return null;
    }
};

export default StepContent;
