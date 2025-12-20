# Create Asset/Product Flow - Implementation Plan

## Overview
Create a 3-step flow for creating sellable assets (products). Uses local useState, reuses shared components (CMSHeader, ProgressBar, ButtonNavigation, ReviewSection, Dropdown).

---

## User Flow

```
CreateScreen → Tap "Product" widget → CreateAssetScreen
    ↓
Step 1: Select Asset Type (Physical/Digital/Experiential/Custom)
    ↓
Step 2: Asset Settings (Series dropdown + asset-type CMS placeholder)
    ↓
Step 3: Review & Publish
    ↓
Done → Navigate back to CreateScreen
```

---

## Visual Layout

### Step 1: Select Asset Type
```
┌─────────────────────────────────────────┐
│  ←  Create Asset                        │  ← CMSHeader
├─────────────────────────────────────────┤
│  ████░░░░░░░░░░░░░░░░░░  Step 1 of 3    │  ← ProgressBar
├─────────────────────────────────────────┤
│                                         │
│  Select Asset Type                      │  ← Title
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  Physical                           ││  ← Selectable row (highlights on tap)
│  │  i.e merch, props, costumes, etc.   ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │  Digital                            ││
│  │  i.e BTS footage, setup vs shot...  ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │  Experiential                       ││
│  │  i.e release party, test screening  ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │  Custom Asset                       ││
│  │  design your own sellable asset...  ││
│  └─────────────────────────────────────┘│
│                                         │
│              ┌──────────────┐           │  ← Only Continue (disabled until selection)
│              │   Continue   │           │
│              └──────────────┘           │
└─────────────────────────────────────────┘
```

### Step 2: Asset Settings
```
┌─────────────────────────────────────────┐
│  ←  Create Asset                        │
├─────────────────────────────────────────┤
│  ████████░░░░░░░░░░░░░░  Step 2 of 3    │
├─────────────────────────────────────────┤
│                                         │
│  Asset Settings                         │
│                                         │
│  Select Series/Film                     │
│  ┌─────────────────────────────────▼──┐ │  ← Dropdown
│  │ Choose a series or film...         │ │
│  └────────────────────────────────────┘ │
│                                         │
│  ┌────────────────────────────────────┐ │
│  │    [Physical] Asset CMS            │ │  ← Inline placeholder
│  │    Coming Soon                     │ │     (switch case on assetType)
│  └────────────────────────────────────┘ │
│                                         │
│     ┌────────┐    ┌──────────────┐      │  ← Back + Continue
│     │  Back  │    │   Continue   │      │
│     └────────┘    └──────────────┘      │
└─────────────────────────────────────────┘
```

### Step 3: Review & Publish
```
┌─────────────────────────────────────────┐
│  ←  Create Asset                        │
├─────────────────────────────────────────┤
│  ████████████░░░░░░░░░░  Step 3 of 3    │
├─────────────────────────────────────────┤
│                                         │
│  Review & Publish                       │
│  Review your asset before publishing    │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  ASSET TYPE                  [Edit] ││  ← ReviewSection
│  ├─────────────────────────────────────┤│
│  │  Physical                           ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  ASSET SETTINGS              [Edit] ││
│  ├─────────────────────────────────────┤│
│  │  Series/Film                        ││
│  │  My Amazing Series                  ││
│  └─────────────────────────────────────┘│
│                                         │
│     ┌────────┐    ┌──────────────┐      │  ← Back + Publish
│     │  Back  │    │   Publish    │      │
│     └────────┘    └──────────────┘      │
└─────────────────────────────────────────┘
```

---

## Architecture

### New Files to Create
```
screens/CreateAssetScreen/
├── index.ts
├── CreateAssetScreen.tsx
├── CreateAssetScreen.types.ts
├── CreateAssetScreen.styles.ts
└── components/
    ├── AssetTypeStep.tsx           # Step 1
    ├── AssetTypeStep.styles.ts
    ├── AssetSettingsStep.tsx       # Step 2 (with inline CMS placeholder)
    ├── AssetSettingsStep.styles.ts
    ├── AssetReviewStep.tsx         # Step 3
    └── AssetReviewStep.styles.ts

app/
└── createAsset.tsx                 # Route
```

### Files to Modify
```
screens/CreateScreen/useCreateScreen.ts   # Update CreateType.PRODUCT navigation
```

---

## Type Definitions

```typescript
// CreateAssetScreen.types.ts
export enum AssetStep {
    SELECT_TYPE = 1,
    SETTINGS = 2,
    REVIEW = 3,
}

export enum AssetType {
    PHYSICAL = 'physical',
    DIGITAL = 'digital',
    EXPERIENTIAL = 'experiential',
    CUSTOM = 'custom',
}

export interface AssetTypeConfig {
    type: AssetType;
    title: string;
    description: string;
}

export interface AssetFormData {
    assetType: AssetType | null;
    selectedSeriesId: string;
    // Expand with type-specific fields later
}

export const ASSET_TYPE_CONFIGS: readonly AssetTypeConfig[] = [
    { type: AssetType.PHYSICAL, title: 'Physical', description: 'i.e merch, props, costumes, etc.' },
    { type: AssetType.DIGITAL, title: 'Digital', description: 'i.e BTS footage, setup vs shot, personalized cast video message' },
    { type: AssetType.EXPERIENTIAL, title: 'Experiential', description: 'i.e release party, test screening, etc.' },
    { type: AssetType.CUSTOM, title: 'Custom Asset', description: 'design your own sellable asset and our team will reach out to discuss creating a bespoke product item' },
];
```

---

## State Management (Local)

```typescript
// In CreateAssetScreen.tsx
const [currentStep, setCurrentStep] = useState<AssetStep>(AssetStep.SELECT_TYPE);
const [assetData, setAssetData] = useState<AssetFormData>({
    assetType: null,
    selectedSeriesId: '',
});

const updateAssetData = (data: Partial<AssetFormData>) => {
    setAssetData((prev) => ({ ...prev, ...data }));
};

// Disable continue on Step 1 until asset type selected
const isContinueDisabled = currentStep === AssetStep.SELECT_TYPE && assetData.assetType === null;
```

---

## Component Reuse

| Component | Location | Usage |
|-----------|----------|-------|
| `CMSHeader` | `components/createSeries/` | Screen header with back button |
| `ProgressBar` | `components/shared/` | Step indicator |
| `ButtonNavigation` | `components/shared/` | Footer navigation (uses `isContinueDisabled` prop) |
| `useButtonNavigation` | `components/shared/ButtonNavigation/hooks/` | Step navigation hook |
| `Dropdown` | `components/shared/` | Series selection in Step 2 |
| `ReviewSection` | `components/shared/` | Review cards in Step 3 |
| `mockSeriesOptions` | `data/mockSeries.ts` | Series dropdown options |

---

## Implementation Order

| Step | Task |
|------|------|
| 1 | Create `CreateAssetScreen.types.ts` (enums, interfaces, configs) |
| 2 | Create `CreateAssetScreen.styles.ts` |
| 3 | Create `AssetTypeStep` component (Step 1 - selectable rows) |
| 4 | Create `AssetSettingsStep` component (Step 2 - dropdown + inline placeholder) |
| 5 | Create `AssetReviewStep` component (Step 3 - ReviewSection usage) |
| 6 | Create main `CreateAssetScreen.tsx` |
| 7 | Create `index.ts` barrel export |
| 8 | Create `app/createAsset.tsx` route |
| 9 | Update `useCreateScreen.ts` to navigate to `/createAsset` |

---

## Key Decisions

- **State**: Local useState (3-step flow, data fetched via API later)
- **Step 2 CMS**: Inline placeholder text per asset type (not separate component files)
- **Route**: `/createAsset` (matches `/createEpisode` pattern)
- **Continue disabled**: Step 1 requires asset type selection before proceeding
