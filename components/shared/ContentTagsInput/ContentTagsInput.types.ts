export enum TagValidationError {
    EMPTY = 'empty',
    MAX_TAGS_REACHED = 'max_tags_reached',
    TAG_TOO_LONG = 'tag_too_long',
    DUPLICATE = 'duplicate',
}

export interface ContentTagsInputProps {
    title: string;
    subtitle: string;
    placeholder: string;
    tags: string[];
    onAddTag: (tag: string) => void;
    onRemoveTag: (index: number) => void;
    onValidationError?: (error: TagValidationError) => void;
    maxTags?: number;
    maxTagLength?: number;
}

export const DEFAULT_MAX_TAGS = 10;
export const DEFAULT_MAX_TAG_LENGTH = 50;
