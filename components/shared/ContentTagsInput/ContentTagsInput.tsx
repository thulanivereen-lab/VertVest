import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { makeStyles } from './ContentTagsInput.styles';
import {
    ContentTagsInputProps,
    DEFAULT_MAX_TAGS,
    DEFAULT_MAX_TAG_LENGTH,
} from './ContentTagsInput.types';
import { useContentTagsInput } from './hooks/useContentTagsInput';

const ContentTagsInput: React.FC<ContentTagsInputProps> = ({
    title,
    subtitle,
    placeholder,
    tags,
    onAddTag,
    onRemoveTag,
    onValidationError,
    maxTags = DEFAULT_MAX_TAGS,
    maxTagLength = DEFAULT_MAX_TAG_LENGTH,
}) => {
    const styles = makeStyles();
    const {
        inputValue,
        setInputValue,
        handleKeyPress,
        handleSubmitEditing,
    } = useContentTagsInput({ tags, onAddTag, onValidationError, maxTags, maxTagLength });

    const isMaxTagsReached = tags.length >= maxTags;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>

            {tags.length > 0 ? (
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <View key={`${tag}-${index}`} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                            <Pressable
                                style={styles.tagRemoveButton}
                                onPress={() => onRemoveTag(index)}
                            >
                                <Text style={styles.tagRemoveText}>×</Text>
                            </Pressable>
                        </View>
                    ))}
                </View>
            ) : (
                <Text style={styles.emptyTagsText}>No tags added yet</Text>
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={isMaxTagsReached ? 'Maximum tags reached' : placeholder}
                    placeholderTextColor="#9B9A97"
                    value={inputValue}
                    onChangeText={setInputValue}
                    onKeyPress={handleKeyPress}
                    onSubmitEditing={handleSubmitEditing}
                    maxLength={maxTagLength}
                    editable={!isMaxTagsReached}
                    returnKeyType="done"
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.tagCount}>
                    {tags.length}/{maxTags}
                </Text>
            </View>
        </View>
    );
};

export default ContentTagsInput;
