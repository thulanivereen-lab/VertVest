# Add Episode to Existing Series - Implementation Plan

## Overview
Create a multi-step flow for adding a new episode to an existing series. Reuses existing components (`UploadEpisode`, `ButtonNavigation`, `ProgressBar`, `ReviewSection`) with local state management.

---

## User Flow

```
CreateScreen → Tap "Episode" widget → CreateEpisodeScreen
    ↓
Step 1: Upload Episode (UploadEpisode with isPilot=false)
    ↓
Step 2: Review & Publish
    ↓
Done → Navigate back to CreateScreen
```

---

## Visual Layout

### Screen Header
```
┌─────────────────────────────────────────┐
│  ←  Add Episode                         │  ← Back chevron + title
├─────────────────────────────────────────┤
│  ▓▓▓▓▓▓▓▓▓▓  ░░░░░░░░░░  Step 1 of 2   │  ← ProgressBar (from shared)
└─────────────────────────────────────────┘
```

### Step 1: Upload Episode
```
┌─────────────────────────────────────────┐
│  New Episode                            │  ← From UploadEpisode (isPilot=false)
│  Add to an existing series              │
├─────────────────────────────────────────┤
│  Select Series                          │
│  ┌─────────────────────────────────▼──┐ │  ← Series dropdown
│  │ Choose a series...                  │ │
│  └────────────────────────────────────┘ │
│                                         │
│  Episode Title                          │
│  ┌────────────────────────────────────┐ │
│  │ Enter your episode title...        │ │
│  └────────────────────────────────────┘ │
│                                         │
│  Episode Description                    │
│  ┌────────────────────────────────────┐ │
│  │ Describe your episode...           │ │
│  └────────────────────────────────────┘ │
│                                         │
│  Upload Video                           │
│  ┌────────────────────────────────────┐ │
│  │        [Upload icon]                │ │
│  │        Upload your video            │ │
│  └────────────────────────────────────┘ │
│                                         │
│  Upload Thumbnail                       │
│  ┌────────────────────────────────────┐ │
│  │        [Upload icon]                │ │
│  │   Upload episode thumbnail          │ │
│  └────────────────────────────────────┘ │
│                                         │
│              ┌──────────────┐           │
│              │   Continue   │           │  ← ButtonNavigation (from shared)
│              └──────────────┘           │
└─────────────────────────────────────────┘
```

### Step 2: Review & Publish
```
┌─────────────────────────────────────────┐
│  Review & Publish                       │
│  Review your episode before publishing  │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  SERIES                      [Edit] ││
│  ├─────────────────────────────────────┤│
│  │  My Amazing Series                  ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  EPISODE DETAILS             [Edit] ││
│  ├─────────────────────────────────────┤│
│  │  Title                              ││
│  │  Episode 5: The Return              ││
│  │                                     ││
│  │  Description                        ││
│  │  In this episode, our heroes...     ││
│  │                                     ││
│  │  Video         Thumbnail            ││
│  │  ✓ Uploaded    ✓ Uploaded           ││
│  └─────────────────────────────────────┘│
│                                         │
│     ┌────────┐    ┌──────────────┐      │
│     │  Back  │    │   Publish    │      │  ← ButtonNavigation (from shared)
│     └────────┘    └──────────────┘      │
└─────────────────────────────────────────┘
```

---

## Architecture

### New Files to Create
```
app/
└── createEpisode.tsx                 # New route

screens/
└── CreateEpisodeScreen/
    ├── index.ts
    ├── CreateEpisodeScreen.tsx
    ├── CreateEpisodeScreen.styles.ts
    └── components/
        └── EpisodeReviewStep.tsx     # Review step component

data/
└── mockSeries.ts                     # Mock series data for dropdown
```

### Files to Move to `components/shared/`
```
components/createSeries/ButtonNavigation/  →  components/shared/ButtonNavigation/
components/createSeries/ProgressBar/       →  components/shared/ProgressBar/
```

### Files to Modify
```
screens/CreateScreen/useCreateScreen.ts         # Update handleCreateClick for episode
components/createSeries/CreateSeriesScreen.tsx  # Update ButtonNavigation & ProgressBar imports
```

---

## State Management (Local)

```typescript
// In CreateEpisodeScreen.tsx
const [currentStep, setCurrentStep] = useState(1);
const TOTAL_STEPS = 2;

const [episodeData, setEpisodeData] = useState({
    selectedSeriesId: '',
    title: '',
    description: '',
    videoUri: null as string | null,
    thumbnailUri: null as string | null,
});

const updateEpisodeData = (data: Partial<typeof episodeData>) => {
    setEpisodeData(prev => ({ ...prev, ...data }));
};
```

---

## Mock Series Data

```typescript
// data/mockSeries.ts
export const mockSeriesOptions = [
    { label: 'My Amazing Series', value: 'series-1' },
    { label: 'Documentary Project', value: 'series-2' },
    { label: 'Comedy Show', value: 'series-3' },
];
```

---

## Implementation Order

| Step | Task |
|------|------|
| 1 | Move `ProgressBar` to `components/shared/` |
| 2 | Move `ButtonNavigation` to `components/shared/` |
| 3 | Update imports in `createSeries` components |
| 4 | Create `data/mockSeries.ts` |
| 5 | Create `CreateEpisodeScreen` with local state |
| 6 | Create `EpisodeReviewStep` component |
| 7 | Create `app/createEpisode.tsx` route |
| 8 | Update `useCreateScreen` to navigate to episode flow |

---

## Component Reuse

| Component | Location (after move) | Usage |
|-----------|----------------------|-------|
| `ProgressBar` | `components/shared/` | Header progress indicator |
| `ButtonNavigation` | `components/shared/` | Footer navigation buttons |
| `UploadEpisode` | `modules/` | Step 1 with `isPilot={false}` |
| `ReviewSection` | `components/shared/` | Step 2 review cards |
| `Dropdown` | `components/shared/` | Series selection (via UploadEpisode) |

---

## Navigation

```typescript
// In useCreateScreen.ts
const handleCreateClick = (type: CreateType) => {
    switch (type) {
        case CreateType.SERIES:
            router.push('/createSeries');
            break;
        case CreateType.EPISODE:
            router.push('/createEpisode');  // NEW
            break;
        case CreateType.PRODUCT:
            // TODO: implement
            break;
    }
};
```

---

## Key Decisions

- **State**: Local useState (simpler for 2-step flow)
- **Series options**: Mock data for now
- **Route**: New screen at `app/createEpisode.tsx`
- **ProgressBar**: Move to `components/shared/` for reuse
- **ButtonNavigation**: Move to `components/shared/` for reuse
