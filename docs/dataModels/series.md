# Series Data Model

This document defines the complete data model for a Series and its related entities (Episodes, Assets, Team).

---

## Base Types

```typescript
type UUID = string;
type ISODateString = string;  // e.g., "2025-01-15T10:30:00Z"
type MediaUrl = string;
```

---

## Enums

```typescript
export enum SeriesStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
}

export enum SubscriptionType {
    FREE = 'free',
    ONE_TIME = 'one-time',
    SUBSCRIPTION = 'subscription',
}

export enum SubscriptionPeriod {
    MONTHLY = 'monthly',
    YEARLY = 'yearly',
}

export enum AssetType {
    PHYSICAL = 'physical',
    DIGITAL = 'digital',
    EXPERIENTIAL = 'experiential',
    CUSTOM = 'custom',
}
```

---

## Team Entities

```typescript
// Represents a user (could come from backend users table)
export interface TeamMember {
    id: UUID;
    name: string;
    email?: string;
    avatarUrl?: MediaUrl;
}

// Links a team member to a series with role and access level
export interface TeamAssignment {
    memberId: UUID;      // references TeamMember.id
    role: string;        // e.g., "director", "producer", "actor"
    access: string;      // e.g., "admin", "editor", "viewer"
}
```

---

## Episode Entity

```typescript
export interface Episode {
    id: UUID;
    seriesId: UUID;                    // foreign key to Series
    episodeNumber: number;
    title: string;
    description: string;
    videoUrl: MediaUrl | null;
    thumbnailUrl: MediaUrl | null;
    duration?: number;                 // in seconds
    isPilot: boolean;                  // true for first episode created with series
    status: SeriesStatus;
    createdAt: ISODateString;
    updatedAt: ISODateString;
    publishedAt?: ISODateString;
}
```

---

## Asset Entity

```typescript
export interface Asset {
    id: UUID;
    seriesId: UUID;                    // foreign key to Series
    type: AssetType;
    name: string;
    description: string;
    price: number;
    currency: string;
    imageUrls: MediaUrl[];
    status: SeriesStatus;
    createdAt: ISODateString;
    updatedAt: ISODateString;

    // Type-specific fields (optional based on type)
    inventory?: number;                // for PHYSICAL
    fileUrl?: MediaUrl;                // for DIGITAL
    eventDate?: ISODateString;         // for EXPERIENTIAL
    eventLocation?: string;            // for EXPERIENTIAL
    capacity?: number;                 // for EXPERIENTIAL
    customDetails?: string;            // for CUSTOM
}
```

---

## Series Media (Embedded)

```typescript
export interface SeriesMedia {
    coverImageUrl: MediaUrl | null;
    trailerVideoUrl: MediaUrl | null;
    thumbnailUrls: MediaUrl[];
}
```

---

## Series Pricing (Embedded)

```typescript
export interface SeriesPricing {
    price: number;
    currency: string;
    subscriptionType: SubscriptionType;
    subscriptionPeriod?: SubscriptionPeriod;  // required if subscriptionType is 'subscription'
}
```

---

## Series Entity (Main Model)

```typescript
export interface Series {
    // --- Identity ---
    id: UUID;
    creatorId: UUID;                   // user who created this series

    // --- Details ---
    title: string;
    description: string;
    category: string;
    tags: string[];

    // --- Media (embedded) ---
    media: SeriesMedia;

    // --- Pricing (embedded) ---
    pricing: SeriesPricing;

    // --- Team ---
    teamMembers: TeamMember[];
    teamAssignments: TeamAssignment[];

    // --- Denormalized Counts (for list views) ---
    episodeCount: number;
    assetCount: number;

    // --- Status & Dates ---
    status: SeriesStatus;
    createdAt: ISODateString;
    updatedAt: ISODateString;
    publishedAt?: ISODateString;
}
```

---

## Series With Relations (Extended)

For detail views where episodes and assets are needed:

```typescript
export interface SeriesWithRelations extends Series {
    episodes: Episode[];
    assets: Asset[];
}
```

---

## Relationships

```
┌─────────────┐
│   Series    │
│─────────────│
│ id          │──────────────┐
│ creatorId   │              │
│ title       │              │
│ description │              │
│ category    │              │
│ tags[]      │              │
│ media       │              │
│ pricing     │              │
│ teamMembers │              │
│ teamAssign. │              │
│ episodeCnt  │              │
│ assetCount  │              │
│ status      │              │
│ dates...    │              │
└─────────────┘              │
       │                     │
       │ 1:N                 │ 1:N
       ▼                     ▼
┌─────────────┐       ┌─────────────┐
│  Episode    │       │   Asset     │
│─────────────│       │─────────────│
│ id          │       │ id          │
│ seriesId ───┼───────│ seriesId ───┼───────┐
│ episodeNum  │       │ type        │       │
│ title       │       │ name        │       │
│ description │       │ description │       │
│ videoUrl    │       │ price       │       │
│ thumbnailUrl│       │ currency    │       │
│ duration    │       │ imageUrls[] │       │
│ isPilot     │       │ inventory?  │  (physical)
│ status      │       │ fileUrl?    │  (digital)
│ dates...    │       │ eventDate?  │  (experiential)
└─────────────┘       │ customDet.? │  (custom)
                      │ status      │
                      │ dates...    │
                      └─────────────┘

┌─────────────┐       ┌─────────────────┐
│ TeamMember  │◄──────│ TeamAssignment  │
│─────────────│ N:N   │─────────────────│
│ id          │       │ memberId        │
│ name        │       │ role            │
│ email?      │       │ access          │
│ avatarUrl?  │       └─────────────────┘
└─────────────┘
```

---

## Design Decisions

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| **Episodes** | Separate entity with `seriesId` FK | Allows independent pagination, ordering, filtering |
| **Assets** | Separate entity with type discriminator | Type-specific fields as optional properties |
| **Media** | Embedded in Series | Small payload, always fetched together |
| **Pricing** | Embedded in Series | Small payload, always fetched together |
| **Team** | Normalized with assignments | Supports many-to-many, reusable members across series |
| **Counts** | Denormalized on Series | Avoids JOINs for list views |
| **isPilot** | Boolean on Episode | Marks the first episode created with series |

---

## Source Files

This model is derived from:
- `context/SeriesForm/SeriesFormContext.types.ts`
- `screens/CreateEpisodeScreen/CreateEpisodeScreen.types.ts`
- `screens/CreateAssetScreen/CreateAssetScreen.types.ts`
