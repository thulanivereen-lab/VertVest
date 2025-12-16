# Create Series CMS Flow - Implementation Plan

## Overview
Build a 4-step multi-page form (CMS) for creating a series, launched from the CreateScreen's Series widget.

**Steps:** Details → Additional Details → Media → Review

## Architecture

### Layout (Sandwich Pattern)
```
┌─────────────────────────────┐
│  CMSHeader (chevron + title)│  ← Fixed
│  ProgressBar (step X of 4)  │  ← Fixed
├─────────────────────────────┤
│                             │
│  StepContent (scrollable)   │  ← Scrollable
│                             │
├─────────────────────────────┤
│  ButtonNavigation           │  ← Fixed
└─────────────────────────────┘
```

### Button Logic
- Step 1: `[Continue]`
- Steps 2-3: `[Back] [Continue]`
- Step 4: `[Back] [Publish]`

### Back Chevron Behavior
Shows Alert: "Save as draft?" → Yes (save + navigate back) / No (just navigate back)

---

## Files Created

### 1. Context (State Management)
```
context/SeriesForm/
├── index.ts                    # Barrel exports
├── SeriesFormContext.tsx       # Context creation + useSeriesForm hook
├── SeriesFormContext.types.ts  # Types, interfaces, enums, constants
└── SeriesFormProvider.tsx      # Provider component
```
- Holds: currentStep, formData (details/details2/media), navigation helpers
- Methods: goToNextStep, goToPreviousStep, saveDraft, clearDraft

### 2. Route
```
app/create/series.tsx
```
- Wraps CreateSeriesScreen in SeriesFormProvider

### 3. Components
```
components/createSeries/
├── CMSHeader.tsx          # Back chevron + "Create Series" title
├── CMSHeader.styles.ts
├── CMSHeader.types.ts
├── ProgressBar.tsx        # Horizontal bars + "Step X of 4"
├── ProgressBar.styles.ts
├── ProgressBar.types.ts
├── ButtonNavigation.tsx   # Back/Continue/Publish buttons
├── ButtonNavigation.styles.ts
├── ButtonNavigation.types.ts
├── StepContent.tsx        # Renders placeholder per step
├── StepContent.styles.ts
└── StepContent.types.ts
```

### 4. Screens
```
screens/
├── CreateSeriesScreen/
│   ├── index.ts                    # Barrel export
│   ├── CreateSeriesScreen.tsx      # Presentational component
│   ├── CreateSeriesScreen.styles.ts
│   └── useCreateSeriesScreen.ts    # Custom hook (handlers, state)
├── CreateScreen/
│   ├── index.ts
│   ├── CreateScreen.tsx
│   ├── CreateScreen.styles.ts
│   └── useCreateScreen.ts
├── HomeScreen/
│   ├── index.ts
│   ├── HomeScreen.tsx
│   ├── HomeScreen.styles.ts
│   └── useHomeScreen.ts
├── DiscoveryScreen/
│   ├── index.ts
│   └── DiscoveryScreen.tsx         # Placeholder
└── PortfolioScreen/
    ├── index.ts
    └── PortfolioScreen.tsx         # Placeholder
```

---

## Files Modified

### 1. `app/_layout.tsx`
Added Stack.Screen for the new route:
```tsx
<Stack.Screen
  name="create/series"
  options={{ headerShown: false }}
/>
```

### 2. `screens/CreateScreen/useCreateScreen.ts`
Handler navigates to create series:
```tsx
case CreateType.SERIES:
  router.push('/create/series');
  break;
```

---

## Key Interfaces

### SeriesStep Enum
```typescript
enum SeriesStep {
  DETAILS = 1,    // Series Details
  DETAILS2 = 2,   // Additional Details
  MEDIA = 3,      // Media Assets
  REVIEW = 4,     // Review & Publish
}
```

### SeriesFormContext State
```typescript
interface SeriesFormContextValue {
  currentStep: SeriesStep;
  formData: {
    details: { title, description, category, tags };
    media: { coverImage, trailerVideo, thumbnails };
    pricing: { price, currency, subscriptionType };  // kept for future use
  };
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  saveDraft: () => Promise<void>;
  clearDraft: () => void;
  isStepValid: (step: SeriesStep) => boolean;
}
```

### Component Props
```typescript
// CMSHeader
{ title: string; onBackPress: () => void }

// ProgressBar
{ currentStep: number; totalSteps: number }

// ButtonNavigation
{ currentStep: number; totalSteps: number; onBack; onContinue; onPublish }
```

---

## Styling
Uses Notion color palette (matching CreateWidget):
```typescript
const NOTION = {
  background: '#FFFFFF',
  backgroundSecondary: '#F7F6F3',
  text: '#37352F',
  textSecondary: '#787774',
  border: '#E9E9E7',
  accent: '#2383E2',
  accentHover: '#1A6BC4',
};
```

---

## TODOs (Placeholder for future)
- `saveDraft()` - Currently logs, will integrate with backend
- `publish()` - Shows alert, will integrate with backend
- Step content forms - Currently placeholders, will add form components later
