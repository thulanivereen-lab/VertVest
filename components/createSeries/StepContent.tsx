import { SeriesStep, useSeriesForm } from '@/context/SeriesForm';
import React from 'react';
import { Text, View } from 'react-native';
import { makeStyles } from './StepContent.styles';
import type { StepContentProps } from './StepContent.types';
import FreeTextInput, { InputType } from '@/components/shared/FreeTextInput';
import ContentTagsInput from '@/components/shared/ContentTagsInput';
import { CmsStrings } from '@/data/CmsStrings';

const DetailsStep: React.FC = () => {
    const styles = makeStyles();
    const { formData, updateDetailsForm } = useSeriesForm();
    const { details } = formData;

    const handleAddTag = (tag: string) => {
        updateDetailsForm({ tags: [...details.tags, tag] });
    };

    const handleRemoveTag = (index: number) => {
        updateDetailsForm({
            tags: details.tags.filter((_, i) => i !== index),
        });
    };

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.placeholderTitle}>Series Details</Text>
            <Text style={styles.placeholderText}>Tell us about your series</Text>

            <FreeTextInput
                title={CmsStrings.series.title.label}
                placeholder={CmsStrings.series.title.placeholder}
                value={details.title}
                onChangeText={(title) => updateDetailsForm({ title })}
                maxLength={CmsStrings.series.title.maxLength}
                inputType={InputType.TITLE}
            />

            <FreeTextInput
                title={CmsStrings.series.description.label}
                placeholder={CmsStrings.series.description.placeholder}
                value={details.description}
                onChangeText={(description) => updateDetailsForm({ description })}
                maxLength={CmsStrings.series.description.maxLength}
                inputType={InputType.DESCRIPTION}
            />

            <ContentTagsInput
                title={CmsStrings.series.tags.title}
                subtitle={CmsStrings.series.tags.subtitle}
                placeholder={CmsStrings.series.tags.placeholder}
                tags={details.tags}
                onAddTag={handleAddTag}
                onRemoveTag={handleRemoveTag}
            />
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
