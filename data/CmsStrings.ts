/**
 * Centralized strings for CMS flows
 * Used by shared components to keep them "dumb" and reusable
 */

export const CmsStrings = {
    series: {
        title: {
            label: 'Series Title',
            placeholder: 'Enter your series title...',
            maxLength: 100,
        },
        description: {
            label: 'Series Description',
            placeholder: 'Describe your series...',
            maxLength: 500,
        },
        tags: {
            title: 'Series Tags',
            subtitle: 'Help viewers discover your series',
            placeholder: 'Type a tag and press Enter',
        },
        teamMember: {
            title: 'Add Team Member',
            subtitle: 'Use @mention to link existing platform members or just type the name if not a member',
            placeholder: '@username or Full Name',
        },
    },
    episode: {
        title: {
            label: 'Episode Title',
            placeholder: 'Enter your episode title...',
            maxLength: 100,
        },
        description: {
            label: 'Episode Description',
            placeholder: 'Describe your episode...',
            maxLength: 500,
        },
        tags: {
            title: 'Episode Tags',
            subtitle: 'Help viewers discover your episode',
            placeholder: 'Type a tag and press Enter',
        },
        teamMember: {
            title: 'Add Team Member',
            subtitle: 'Use @mention to link existing platform members or just type the name if not a member',
            placeholder: '@username or Full Name',
        },
    },
    asset: {
        title: {
            label: 'Product Title',
            placeholder: 'Enter your product title...',
            maxLength: 100,
        },
        description: {
            label: 'Product Description',
            placeholder: 'Describe your product...',
            maxLength: 500,
        },
        tags: {
            title: 'Product Tags',
            subtitle: 'Help buyers discover your product',
            placeholder: 'Type a tag and press Enter',
        },
        teamMember: {
            title: 'Add Team Member',
            subtitle: 'Use @mention to link existing platform members or just type the name if not a member',
            placeholder: '@username or Full Name',
        },
    },
    dropdownOptions: {
        roles: [
            { label: 'Director', value: 'director' },
            { label: 'Producer', value: 'producer' },
            { label: 'Writer', value: 'writer' },
            { label: 'Actor', value: 'actor' },
            { label: 'Editor', value: 'editor' },
            { label: 'Cinematographer', value: 'cinematographer' },
        ],
        access: [
            { label: 'Full Access', value: 'full' },
            { label: 'Content Only', value: 'content' },
            { label: 'Assets Only', value: 'assets' },
        ],
    },
} as const;

export type ContentType = keyof typeof CmsStrings;
