import React from 'react';
import { View, Text } from 'react-native';
import FreeTextInput, { InputType } from '@/components/shared/FreeTextInput';
import MediaUpload from '@/components/shared/MediaUpload';
import Dropdown from '@/components/shared/Dropdown';
import { CmsStrings } from '@/data/CmsStrings';
import { makeStyles } from './UploadEpisode.styles';
import type { UploadEpisodeProps } from './UploadEpisode.types';

const UploadEpisode: React.FC<UploadEpisodeProps> = ({
    isPilot,
    data,
    onDataChange,
    onUploadVideo,
    onUploadThumbnail,
    seriesOptions = [],
}) => {
    const styles = makeStyles();
    const strings = CmsStrings.episode;
    const headerStrings = isPilot ? strings.upload.pilot : strings.upload.regular;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{headerStrings.title}</Text>
            <Text style={styles.subtitle}>{headerStrings.subtitle}</Text>

            {!isPilot && (
                <Dropdown
                    label={strings.upload.seriesDropdown.label}
                    placeholder={strings.upload.seriesDropdown.placeholder}
                    value={data.selectedSeriesId}
                    options={seriesOptions}
                    onChange={(selectedSeriesId) => onDataChange({ selectedSeriesId })}
                />
            )}

            <FreeTextInput
                title={strings.title.label}
                placeholder={strings.title.placeholder}
                value={data.title}
                onChangeText={(title) => onDataChange({ title })}
                maxLength={strings.title.maxLength}
                inputType={InputType.TITLE}
            />

            <FreeTextInput
                title={strings.description.label}
                placeholder={strings.description.placeholder}
                value={data.description}
                onChangeText={(description) => onDataChange({ description })}
                maxLength={strings.description.maxLength}
                inputType={InputType.DESCRIPTION}
            />

            <MediaUpload
                title={strings.upload.video.title}
                description={strings.upload.video.description}
                onPress={onUploadVideo}
            />

            <MediaUpload
                title={strings.upload.thumbnail.title}
                description={strings.upload.thumbnail.description}
                onPress={onUploadThumbnail}
            />
        </View>
    );
};

export default UploadEpisode;
