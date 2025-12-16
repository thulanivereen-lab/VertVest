# Shared CMS Components - Implementation Plan

## Overview
Create reusable, "dumb" components for content management flows (series, episode, sellable asset). Components receive strings via props; centralized string data lives in `data/CmsStrings.ts`.

---

## Architecture

### Folder Structure
```
components/
├── shared/
│   ├── FreeTextInput/
│   │   ├── index.ts
│   │   ├── FreeTextInput.tsx
│   │   ├── FreeTextInput.styles.ts
│   │   └── FreeTextInput.types.ts
│   ├── ContentTagsInput/
│   │   ├── index.ts
│   │   ├── ContentTagsInput.tsx
│   │   ├── ContentTagsInput.styles.ts
│   │   ├── ContentTagsInput.types.ts
│   │   └── hooks/
│   │       └── useContentTagsInput.ts
│   └── AddTeamMember/
│       ├── index.ts
│       ├── AddTeamMember.tsx
│       ├── AddTeamMember.styles.ts
│       └── AddTeamMember.types.ts
└── cms/
    └── TeamMemberCard/
        ├── index.ts
        ├── TeamMemberCard.tsx
        ├── TeamMemberCard.styles.ts
        └── TeamMemberCard.types.ts

data/
└── CmsStrings.ts    # Centralized strings for all CMS flows
```

---

## Components

### 1. FreeTextInput (`components/shared/FreeTextInput/`)

**Visual:**
```
┌─────────────────────────────────┐
│  Series Title                   │  ← title prop
├─────────────────────────────────┤
│  Enter your series title...     │  ← placeholder prop
│                                 │
└─────────────────────────────────┘
                        45/100    ← character count
```

**Props:**
```typescript
interface FreeTextInputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  maxLength: number;
  inputType: 'title' | 'description';  // affects height
  error?: string;  // optional validation error
}
```

**Behavior:**
- `title` type: single line, smaller height (~44px)
- `description` type: multiline, larger height (~120px)
- Shows "X/maxLength" character count
- Optional error state with red border + error message

---

### 2. ContentTagsInput (`components/shared/ContentTagsInput/`)

**Visual:**
```
┌─────────────────────────────────────────┐
│  Series Tags                            │  ← title prop
│  Help viewers discover your series      │  ← subtitle prop
├─────────────────────────────────────────┤
│  ┌───────────┐ ┌───────────┐ ┌────────┐ │
│  │ Comedy  ✕ │ │ Drama  ✕  │ │ Action │ │  ← tag pills (max 10)
│  └───────────┘ └───────────┘ └────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ Type a tag and press Enter...       ││  ← input
│  └─────────────────────────────────────┘│
│                                   7/10  │  ← tag count
└─────────────────────────────────────────┘
```

**Props:**
```typescript
interface ContentTagsInputProps {
  title: string;
  subtitle: string;
  placeholder: string;
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (index: number) => void;
  maxTags?: number;       // default 10
  maxTagLength?: number;  // default 50
}
```

**Hook (`useContentTagsInput`):**
- Manages input state
- Handles Enter key press
- Validates tag length and duplicates
- Returns: `{ inputValue, setInputValue, handleKeyPress, handleAddTag }`

---

### 3. AddTeamMember (`components/shared/AddTeamMember/`)

**Visual:**
```
┌─────────────────────────────────────────┐
│  Add Team Member                        │  ← title prop
│  Use @mention to link existing platform │  ← subtitle prop
│  members or just type the name          │
├─────────────────────────────────────────┤
│  ┌──────────────────────────┐ ┌───────┐ │
│  │ @username or Full Name   │ │  Add  │ │  ← 75% / 25% width
│  └──────────────────────────┘ └───────┘ │
└─────────────────────────────────────────┘
```

**Props:**
```typescript
interface AddTeamMemberProps {
  title: string;
  subtitle: string;
  placeholder: string;
  onAdd: (name: string) => void;
}
```

**Behavior:**
- Input clears after Add is pressed
- Add button disabled when input is empty
- Parent manages the list of TeamMemberCards

---

### 4. TeamMemberCard (`components/cms/TeamMemberCard/`)

**Visual:**
```
┌─────────────────────────────────────────┐
│  John Smith                          ✕  │  ← name + remove button
├─────────────────────────────────────────┤
│  Role              Access               │
│  ┌─────────────┐   ┌─────────────┐      │
│  │ Director  ▼ │   │ Editor    ▼ │      │  ← two dropdowns
│  └─────────────┘   └─────────────┘      │
└─────────────────────────────────────────┘
```

**Props:**
```typescript
interface TeamMemberCardProps {
  name: string;
  role: string;
  access: string;
  roleOptions: DropdownOption[];
  accessOptions: DropdownOption[];
  onRoleChange: (value: string) => void;
  onAccessChange: (value: string) => void;
  onRemove: () => void;
}

interface DropdownOption {
  label: string;
  value: string;
}
```

---

## Data File

### `data/CmsStrings.ts`
```typescript
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
  episode: { /* similar structure */ },
  asset: { /* similar structure */ },
};
```

---

## Implementation Order

| Phase | Component | Files |
|-------|-----------|-------|
| 1 | Data file | `data/CmsStrings.ts` |
| 2 | FreeTextInput | 4 files |
| 3 | ContentTagsInput | 5 files (includes hook) |
| 4 | AddTeamMember | 4 files |
| 5 | TeamMemberCard | 4 files |

---

## Styling
Uses shared NOTION palette from `@/styles`:
```typescript
import { NOTION } from '@/styles';
```

Key styles:
- Pills: `backgroundSecondary` bg, `border` border, `text` color
- Inputs: `background` bg, `border` border, `text` for input
- Error state: Red border (#E53935)
- Remove buttons: `textSecondary` color

---

## Notes
- All components are "dumb" - no internal business logic
- Parent components manage state and pass callbacks
- Strings centralized for easy i18n later
- Follows folder-per-component pattern with optional hooks subfolder
