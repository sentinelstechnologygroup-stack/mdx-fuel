# SDL SIS Setup — MDX Fuel

## Changed Files Only

This package intentionally includes only the files required to add SDL SIS support. It does not include unchanged pages or rebuilt project output.

## Files Added / Updated

```text
index.html
public/sis/sis-config.js
public/sis/sis-tracker.js
public/sis/README.md
docs/SDL-SIS-SETUP.md
```

## Installation

Copy these files into the MDX Fuel project at the matching paths.

Then run:

```bash
npm install
npm run build
```

After build, confirm the production output includes:

```text
dist/sis/sis-config.js
dist/sis/sis-tracker.js
```

## Script Loading

The root `index.html` includes:

```html
<script src="/sis/sis-config.js"></script>
<script src="/sis/sis-tracker.js"></script>
```

These scripts load before the main React application.

## Current Configuration

```js
siteId: "mdx-fuel"
clientId: "mdx-fuel"
endpoint: ""
```

The blank endpoint prevents live transmission until SDL SIS ingestion is connected. Events queue locally until an endpoint is configured.
