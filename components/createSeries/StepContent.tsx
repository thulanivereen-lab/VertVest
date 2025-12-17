import {
    SeriesStep,
    SeriesTeamAssignment,
    TeamMember,
    useSeriesForm,
} from '@/context/SeriesForm';
import * as Crypto from 'expo-crypto';
import React from 'react';
import { Text, View } from 'react-native';
import { makeStyles } from './StepContent.styles';
import type { StepContentProps } from './StepContent.types';
import FreeTextInput, { InputType } from '@/components/shared/FreeTextInput';
import ContentTagsInput from '@/components/shared/ContentTagsInput';
import AddTeamMember from '@/components/shared/AddTeamMember';
import TeamMemberCard from '@/components/cms/TeamMemberCard';
import ReviewSection from '@/components/shared/ReviewSection';
import UploadEpisode from '@/modules/UploadEpisode';
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
    const { formData, updateCastCrewForm } = useSeriesForm();
    const { castCrew } = formData;

    const getMemberName = (memberId: string): string => {
        const member = castCrew.teamMembers.find((m) => m.id === memberId);
        return member?.name || 'Unknown';
    };

    const handleAddMember = (name: string) => {
        const memberId = Crypto.randomUUID();

        const newMember: TeamMember = {
            id: memberId,
            name,
        };

        const newAssignment: SeriesTeamAssignment = {
            memberId,
            role: '',
            access: '',
        };

        updateCastCrewForm({
            teamMembers: [...castCrew.teamMembers, newMember],
            assignments: [...castCrew.assignments, newAssignment],
        });
    };

    const handleRemoveMember = (memberId: string) => {
        updateCastCrewForm({
            teamMembers: castCrew.teamMembers.filter((m) => m.id !== memberId),
            assignments: castCrew.assignments.filter((a) => a.memberId !== memberId),
        });
    };

    const handleRoleChange = (memberId: string, role: string) => {
        updateCastCrewForm({
            assignments: castCrew.assignments.map((a) =>
                a.memberId === memberId ? { ...a, role } : a
            ),
        });
    };

    const handleAccessChange = (memberId: string, access: string) => {
        updateCastCrewForm({
            assignments: castCrew.assignments.map((a) =>
                a.memberId === memberId ? { ...a, access } : a
            ),
        });
    };

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.placeholderTitle}>Cast & Crew</Text>
            <Text style={styles.placeholderText}>
                Add your cast and crew members and set their access permissions
            </Text>

            <AddTeamMember
                title={CmsStrings.series.teamMember.title}
                subtitle={CmsStrings.series.teamMember.subtitle}
                placeholder={CmsStrings.series.teamMember.placeholder}
                onAdd={handleAddMember}
            />

            {castCrew.assignments.map((assignment) => (
                <TeamMemberCard
                    key={assignment.memberId}
                    name={getMemberName(assignment.memberId)}
                    role={assignment.role}
                    access={assignment.access}
                    roleOptions={CmsStrings.dropdownOptions.roles}
                    accessOptions={CmsStrings.dropdownOptions.access}
                    onRoleChange={(role) => handleRoleChange(assignment.memberId, role)}
                    onAccessChange={(access) => handleAccessChange(assignment.memberId, access)}
                    onRemove={() => handleRemoveMember(assignment.memberId)}
                />
            ))}
        </View>
    );
};

const MediaStep: React.FC = () => {
    const styles = makeStyles();
    const { formData, updatePilotEpisodeForm } = useSeriesForm();
    const { pilotEpisode } = formData;

    const handleUploadVideo = () => {
        // TODO: Implement video picker
        console.log('Upload video');
    };

    const handleUploadThumbnail = () => {
        // TODO: Implement image picker
        console.log('Upload thumbnail');
    };

    return (
        <View style={styles.stepContainer}>
            <UploadEpisode
                isPilot
                data={{
                    title: pilotEpisode.title,
                    description: pilotEpisode.description,
                }}
                onDataChange={(data) => updatePilotEpisodeForm(data)}
                onUploadVideo={handleUploadVideo}
                onUploadThumbnail={handleUploadThumbnail}
            />
        </View>
    );
};

const ReviewStep: React.FC = () => {
    const styles = makeStyles();
    const { formData, setCurrentStep } = useSeriesForm();
    const { details, castCrew, pilotEpisode } = formData;

    const getRoleLabel = (value: string) =>
        CmsStrings.dropdownOptions.roles.find((r) => r.value === value)?.label || value;
    const getAccessLabel = (value: string) =>
        CmsStrings.dropdownOptions.access.find((a) => a.value === value)?.label || value;

    const getMemberName = (memberId: string) =>
        castCrew.teamMembers.find((m) => m.id === memberId)?.name || 'Unknown';

    return (
        <View style={styles.stepContainer}>
            <Text style={styles.reviewTitle}>Review & Publish</Text>
            <Text style={styles.reviewSubtitle}>
                Review your series details before publishing
            </Text>

            {/* Series Details Section */}
            <ReviewSection
                title="Series Details"
                onEdit={() => setCurrentStep(SeriesStep.DETAILS)}
            >
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Title</Text>
                    <Text style={styles.fieldValue}>{details.title || '—'}</Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Description</Text>
                    <Text style={styles.fieldValue}>{details.description || '—'}</Text>
                </View>
                <View style={styles.tagsContainer}>
                    <Text style={styles.fieldLabel}>Tags</Text>
                    {details.tags.length > 0 ? (
                        <View style={styles.tagsList}>
                            {details.tags.map((tag, i) => (
                                <View key={i} style={styles.tag}>
                                    <Text style={styles.tagText}>{tag}</Text>
                                </View>
                            ))}
                        </View>
                    ) : (
                        <Text style={styles.emptyText}>No tags added</Text>
                    )}
                </View>
            </ReviewSection>

            {/* Cast & Crew Section */}
            <ReviewSection
                title="Cast & Crew"
                onEdit={() => setCurrentStep(SeriesStep.DETAILS2)}
            >
                {castCrew.assignments.length > 0 ? (
                    castCrew.assignments.map((assignment) => (
                        <View key={assignment.memberId} style={styles.memberItem}>
                            <Text style={styles.memberText}>
                                • {getMemberName(assignment.memberId)}
                                {assignment.role ? ` - ${getRoleLabel(assignment.role)}` : ''}
                                {assignment.access ? ` (${getAccessLabel(assignment.access)})` : ''}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.emptyText}>No team members added</Text>
                )}
            </ReviewSection>

            {/* Pilot Episode Section */}
            <ReviewSection
                title="Pilot Episode"
                onEdit={() => setCurrentStep(SeriesStep.MEDIA)}
            >
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Title</Text>
                    <Text style={styles.fieldValue}>{pilotEpisode.title || '—'}</Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Description</Text>
                    <Text style={styles.fieldValue}>{pilotEpisode.description || '—'}</Text>
                </View>
                <View style={styles.mediaStatus}>
                    <View style={styles.mediaItem}>
                        <Text style={styles.fieldLabel}>Video</Text>
                        <Text style={pilotEpisode.videoUri ? styles.uploaded : styles.notUploaded}>
                            {pilotEpisode.videoUri ? '✓ Uploaded' : '✗ Not uploaded'}
                        </Text>
                    </View>
                    <View style={styles.mediaItem}>
                        <Text style={styles.fieldLabel}>Thumbnail</Text>
                        <Text style={pilotEpisode.thumbnailUri ? styles.uploaded : styles.notUploaded}>
                            {pilotEpisode.thumbnailUri ? '✓ Uploaded' : '✗ Not uploaded'}
                        </Text>
                    </View>
                </View>
            </ReviewSection>
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
