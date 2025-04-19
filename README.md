# Starboard - Commercial Real Estate Analytics Platform

Starboard is a modern web application designed to help commercial real estate investors analyze potential property investments. The platform provides comprehensive tools for deal assessment, financial modeling, location analysis, and portfolio management.

## Project Overview

This project implements a Next.js-based commercial real estate analytics platform with a focus on the Location Analysis tab functionality. The application allows investors to:

- Review property details and financial metrics
- Analyze location data including demographics, nearby developments, and zoning information
- Compare sales data with similar properties in the area
- Workshop different scenarios for property utilization
- Manage a pipeline of potential deals

## Technical Stack

- **Frontend Framework**: Next.js 13.5.1 with React 18.2.0
- **Styling**: Tailwind CSS with a customized design system
- **Component Library**: Custom components built on Radix UI primitives
- **Charts & Visualization**: Recharts for data visualization
- **State Management**: React Context API for local state management
- **TypeScript**: Type-safe code with TypeScript 5.2.2
- **Deployment**: Static export configuration for flexible hosting options

## Key Features

### Location Analysis Tab

The Location Analysis tab provides investors with detailed information about the property's surrounding area, including:

1. **Supply Pipeline**: Tracks nearby developments, construction timelines, and property type mix
2. **Land Sale Comparables**: Shows recent land transactions with price per square foot, zoning, and size details
3. **Demographic Trends**: Displays population data, income growth, and workforce composition
4. **Proximity Insights**: Maps distances to key infrastructure (highways, ports, major tenants, rail)
5. **Zoning Overlays**: Provides zoning code information and links to municipal references

The Location Analysis implementation includes several enhanced features:

- **External Market Data Integration**: Pulls in relevant market data from external sources to provide additional context
- **Risk and Opportunity Analysis**: Highlights potential risks and opportunities based on location data
- **PDF Export Functionality**: Allows users to export location analysis data as a PDF report
- **Data Source Attribution**: Clearly identifies the sources of location data for transparency and verification

### Design and Technical Decisions

### UI/UX Design Approach

- **Expandable Cards**: Each section is contained in an expandable card component, allowing users to focus on specific information and reduce visual clutter
- **Multiple View Options**: Data is presented in different formats (cards, tables, timelines) to accommodate different user preferences
- **Visual Hierarchy**: Important metrics and insights are highlighted with appropriate sizing and color emphasis
- **Consistent Layout**: Each section follows a consistent pattern with clear headers, descriptions, and contextual details
- **Responsive Design**: The layout adjusts to different screen sizes while maintaining usability
- **Interactive Elements**: Charts, maps, and diagrams provide interactive elements for deeper data exploration
- **Contextual Information**: Help text and tooltips provide additional context where needed

### Technical Architecture Decisions

- **Component Modularization**: Each location analysis section is built as a standalone component, enabling reuse and independent updates
- **Client-Side Rendering**: Uses Next.js with client-side rendering for interactive data visualization components
- **Tailwind CSS Integration**: Leverages Tailwind's utility classes for consistent styling across components
- **Shadcn/UI Component Library**: Built on Radix UI primitives for accessible, customizable UI components
- **React Context API**: Uses context for state management to avoid prop drilling through deeply nested components
- **TypeScript Interfaces**: Clearly defined data structures ensure consistency and provide development-time type checking
- **Code Splitting**: Implements dynamic imports for heavy components like charts to improve initial page load performance

### Technical Implementation Details

- **Component Hierarchy**: Components are organized into logical directories (location, shared, UI) with clear responsibilities
- **Type Safety**: TypeScript interfaces ensure consistency in data handling across components
- **Context API**: Scenario data is managed through a centralized context for easy access across components
- **Dynamic Content Loading**: Heavy components like charts are loaded dynamically to improve initial page load performance
- **Modular CSS**: Tailwind's utility-first approach combined with component-based styling for maintainability

## Project Structure

```
├── app/                   # Next.js app directory structure
│   ├── context/           # React Context providers
│   │   └── ScenarioContext.tsx   # Context for scenario analysis
│   ├── globals.css        # Global CSS styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   ├── dashborad/         # Dashboard pages
│   ├── deal-overview/     # Deal overview pages
│   ├── location-analysis/ # Location analysis pages
│   ├── pipeline/          # Deal pipeline pages
│   ├── settings/          # Settings pages
│   └── workshop/          # Workshop pages
│
├── components/            # React components
│   ├── dashborad/         # Dashboard components
│   │   └── PropertyMetrics.tsx   # Financial metrics visualization
│   │
│   ├── deal-overview/     # Deal overview components
│   │   ├── AssetLevelData.tsx    # Property specifications
│   │   ├── DealOverviewContent.tsx   # Main deal overview component
│   │   ├── MetricsGrid.tsx       # Grid for financial metrics
│   │   ├── PersonalizedInsights.tsx  # User-specific insights
│   │   ├── PropertyStats.tsx     # Property statistics display
│   │   ├── PropertySummary.tsx   # Property summary component
│   │   ├── SaleComparablesSection.tsx    # Sales comparables
│   │   └── SupplyPipelineSection.tsx     # Supply pipeline display
│   │
│   ├── location/          # Location analysis components
│   │   ├── ExternalMarketData.tsx    # External market data integration
│   │   ├── LocationAnalysisTab.tsx   # Main location analysis component
│   │   ├── LocationDataSource.tsx    # Data source attribution
│   │   ├── LocationPDFExport.tsx     # PDF export functionality
│   │   ├── LocationRisksOpportunities.tsx   # Risks and opportunities analysis
│   │   ├── PropertyCard.tsx          # Property card component
│   │   └── sections/                 # Location analysis sections
│   │       ├── DemographicTrends.tsx     # Demographics data visualization
│   │       ├── LandSaleComparables.tsx   # Land sale comparables
│   │       ├── ProximityInsights.tsx     # Proximity analysis
│   │       ├── SupplyPipeline.tsx        # Supply pipeline analysis
│   │       └── ZoningOverlays.tsx        # Zoning information
│   │
│   ├── pipeline/          # Deal pipeline components
│   │   ├── PipelineFilters.tsx    # Filtering options for pipeline
│   │   ├── PipelineView.tsx       # Main pipeline view
│   │   └── PropertyRow.tsx        # Property row in pipeline list
│   │
│   ├── settings/          # Settings components
│   │   ├── SettingsPage.tsx       # Main settings page
│   │   ├── SettingsSidebar.tsx    # Settings navigation sidebar
│   │   └── sections/              # Settings sections
│   │       ├── AccountSettings.tsx    # User account settings
│   │       ├── DealCriteriaSettings.tsx   # Deal criteria configuration
│   │       └── ModelsSettings.tsx     # Financial model settings
│   │
│   ├── shared/            # Shared components
│   │   ├── ChatWidget.tsx     # AI chat assistant widget
│   │   ├── Header.tsx         # Application header
│   │   └── TabNavigator.tsx   # Tab navigation component
│   │
│   ├── ui/                # UI components (buttons, cards, etc.)
│   │   ├── accordion.tsx      # Accordion component
│   │   ├── alert.tsx          # Alert component
│   │   ├── button.tsx         # Button component
│   │   ├── card.tsx           # Card component
│   │   ├── dialog.tsx         # Dialog component
│   │   ├── dropdown-menu.tsx  # Dropdown menu component
│   │   ├── tabs.tsx           # Tabs component
│   │   └── ... (30+ UI components)
│   │
│   └── workshop/          # Workshop components
│       ├── ScenarioComparison.tsx    # Scenario comparison visualization
│       ├── ScenarioConversation.tsx  # AI conversation for scenarios
│       ├── ScenarioFiles.tsx         # Scenario file management
│       ├── ScenarioInput.tsx         # User input for scenarios
│       └── WorkshopDashboard.tsx     # Main workshop dashboard
│
├── hooks/                 # Custom React hooks
│   ├── use-senario-analysis.ts   # Hook for scenario analysis
│   └── use-toast.ts              # Toast notification hook
│
├── lib/                   # Utility functions
│   └── utils.ts           # General utility functions
│
└── types/                 # TypeScript type definitions
    ├── location.ts        # Location data type definitions
    ├── models.ts          # Data model type definitions
    └── settings.ts        # Settings type definitions
```

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/starboard.git
cd starboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Navigation

The application consists of several main sections:

- **Deal Overview** (`/deal-overview`): Provides a comprehensive overview of the property
- **Location Analysis** (`/location-analysis`): Analyzes the property's location and surrounding market
- **Dashboard** (`/dashboard`): Shows financial metrics and performance indicators
- **Workshop** (`/workshop`): Allows for scenario analysis and modeling
- **Pipeline** (`/pipeline`): Displays all potential deals in the pipeline
- **Settings** (`/settings`): User and application settings

The primary focus of this implementation is the Location Analysis tab, which can be accessed by clicking the "Location" tab on the deal overview page or navigating directly to `/location-analysis`.

## Deployment

The application is configured for static export, which allows for deployment to various hosting platforms:

```bash
npm run build
# or
yarn build
```

This will generate a static export in the `out` directory that can be deployed to any static hosting service.

## Implementation Highlights

### Location Analysis Tab Components

This implementation focuses on providing a comprehensive location analysis experience:

1. **LocationAnalysisTab.tsx** - The main component that orchestrates all location analysis sections
2. **Sections/** - Individual components for different aspects of location analysis:
   - **SupplyPipeline.tsx** - Visualizes upcoming developments and construction timelines
   - **LandSaleComparables.tsx** - Compares recent land transactions with similar properties
   - **DemographicTrends.tsx** - Displays population, income, and workforce data
   - **ProximityInsights.tsx** - Shows distances to key infrastructure and amenities
   - **ZoningOverlays.tsx** - Provides zoning information and regulatory details

### Enhanced Features

- **ExternalMarketData.tsx** - Integrates with external data sources to provide market context
- **LocationRisksOpportunities.tsx** - Highlights potential risks and opportunities based on location data
- **LocationPDFExport.tsx** - Enables PDF export functionality for location reports
- **LocationDataSource.tsx** - Attributes data sources for transparency and verification
