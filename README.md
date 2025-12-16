# Vert Vest

A React Native content creation platform built with Expo.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo Go app on your device (for testing)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start -c
```

### Running the App
- **iOS Simulator**: Press `i` in the terminal
- **Android Emulator**: Press `a` in the terminal
- **Physical Device**: Scan the QR code with Expo Go

---

## Project Structure

```
vert-vest/
├── app/                      # Expo Router (file-based routing)
│   ├── (tabs)/               # Tab navigation screens
│   ├── create/               # Create flow routes
│   ├── _layout.tsx           # Root layout
│   └── preview.tsx           # Component preview sandbox
├── components/
│   ├── shared/               # Reusable components (any feature)
│   │   ├── FreeTextInput/
│   │   ├── ContentTagsInput/
│   │   └── AddTeamMember/
│   ├── cms/                  # CMS-specific components
│   │   └── TeamMemberCard/
│   ├── create/               # Create flow components
│   └── createSeries/         # Create Series components
├── screens/                  # Screen components
│   ├── HomeScreen/
│   ├── CreateScreen/
│   └── CreateSeriesScreen/
├── context/                  # React Context providers
│   └── SeriesForm/
├── data/                     # Static data and constants
│   └── CmsStrings.ts         # Centralized CMS strings
├── styles/                   # Shared styles
│   └── colors.ts             # NOTION color palette
├── hooks/                    # Custom hooks
└── docs/                     # Documentation
    └── featureImplementationPlans/
```

### Architecture Patterns

**Folder-per-component:**
```
ComponentName/
├── index.ts                  # Barrel export
├── ComponentName.tsx         # Component
├── ComponentName.styles.ts   # Styles
├── ComponentName.types.ts    # TypeScript types
└── hooks/                    # Component-specific hooks (optional)
    └── useComponentName.ts
```

**Screen pattern:**
```
ScreenName/
├── index.ts
├── ScreenName.tsx            # Presentational component
├── ScreenName.styles.ts
└── useScreenName.ts          # Screen logic (handlers, state)
```

---

## Development

### Environment Variables

Copy the example env file:
```bash
cp .env.example .env.local
```

Available variables:
| Variable | Description |
|----------|-------------|
| `EXPO_PUBLIC_SHOW_PREVIEW` | Show "Preview Components" button (`true`/`false`) |

### Component Preview Mode

A sandbox screen for testing components during development.

**To enable:**

Option A - Inline:
```bash
EXPO_PUBLIC_SHOW_PREVIEW=true npx expo start -c
```

Option B - Via `.env.local`:
```bash
# In .env.local
EXPO_PUBLIC_SHOW_PREVIEW=true
```

**To access:**
1. Go to the Create tab
2. Tap "Preview Components" button (only visible when enabled)

**To add components to preview:**
Edit `app/preview.tsx` and render your components with mock data.

---

## Styling

We use a Notion-inspired color palette defined in `styles/colors.ts`:

```typescript
import { NOTION } from '@/styles';

// Available colors:
NOTION.background        // #FFFFFF
NOTION.backgroundSecondary  // #F7F6F3
NOTION.text              // #37352F
NOTION.textSecondary     // #787774
NOTION.border            // #E9E9E7
NOTION.accent            // #2383E2
NOTION.accentHover       // #1A6BC4
NOTION.white             // #FFFFFF
```

---

## Shared Components

Reusable components for CMS flows. Import strings from `@/data/CmsStrings`.

### FreeTextInput
Text input with label and character count.
```typescript
import FreeTextInput, { InputType } from '@/components/shared/FreeTextInput';

<FreeTextInput
  title="Series Title"
  placeholder="Enter title..."
  value={value}
  onChangeText={setValue}
  maxLength={100}
  inputType={InputType.TITLE}  // or InputType.DESCRIPTION
  error={errorMessage}  // optional
/>
```

### ContentTagsInput
Tag input with pills and validation.
```typescript
import ContentTagsInput, { TagValidationError } from '@/components/shared/ContentTagsInput';

<ContentTagsInput
  title="Tags"
  subtitle="Help viewers discover your content"
  placeholder="Type a tag and press Enter"
  tags={tags}
  onAddTag={(tag) => setTags([...tags, tag])}
  onRemoveTag={(index) => setTags(tags.filter((_, i) => i !== index))}
  onValidationError={(error) => Alert.alert('Error', error)}
  maxTags={10}
  maxTagLength={50}
/>
```

### AddTeamMember
Input for adding team members.
```typescript
import AddTeamMember from '@/components/shared/AddTeamMember';

<AddTeamMember
  title="Add Team Member"
  subtitle="Use @mention for existing members"
  placeholder="@username or Full Name"
  onAdd={(name) => addMember(name)}
/>
```

### TeamMemberCard
Card for managing team member role/access.
```typescript
import TeamMemberCard from '@/components/cms/TeamMemberCard';

<TeamMemberCard
  name="John Smith"
  role={selectedRole}
  access={selectedAccess}
  roleOptions={[{ label: 'Director', value: 'director' }]}
  accessOptions={[{ label: 'Editor', value: 'editor' }]}
  onRoleChange={setSelectedRole}
  onAccessChange={setSelectedAccess}
  onRemove={() => removeMember(id)}
/>
```

---

## Documentation

Feature implementation plans are in `docs/featureImplementationPlans/`:
- `createSeriesCMS.md` - Create Series flow architecture
- `sharedCmsComponents.md` - Shared CMS components spec

---

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
