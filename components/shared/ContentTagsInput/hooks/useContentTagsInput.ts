import { useState, useCallback } from 'react';
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { TagValidationError } from '../ContentTagsInput.types';

interface UseContentTagsInputProps {
    tags: string[];
    onAddTag: (tag: string) => void;
    onValidationError?: (error: TagValidationError) => void;
    maxTags: number;
    maxTagLength: number;
}

export const useContentTagsInput = ({
    tags,
    onAddTag,
    onValidationError,
    maxTags,
    maxTagLength,
}: UseContentTagsInputProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTag = useCallback(() => {
        const trimmedValue = inputValue.trim();

        if (!trimmedValue) {
            onValidationError?.(TagValidationError.EMPTY);
            return;
        }

        if (tags.length >= maxTags) {
            onValidationError?.(TagValidationError.MAX_TAGS_REACHED);
            return;
        }

        if (trimmedValue.length > maxTagLength) {
            onValidationError?.(TagValidationError.TAG_TOO_LONG);
            return;
        }

        if (tags.includes(trimmedValue)) {
            onValidationError?.(TagValidationError.DUPLICATE);
            return;
        }

        onAddTag(trimmedValue);
        setInputValue('');
    }, [inputValue, tags, onAddTag, onValidationError, maxTags, maxTagLength]);

    const handleKeyPress = useCallback(
        (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            if (e.nativeEvent.key === 'Enter') {
                handleAddTag();
            }
        },
        [handleAddTag]
    );

    const handleSubmitEditing = useCallback(() => {
        handleAddTag();
    }, [handleAddTag]);

    return {
        inputValue,
        setInputValue,
        handleKeyPress,
        handleAddTag,
        handleSubmitEditing,
    };
};
