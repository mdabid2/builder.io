# Builder.io + Next.js Integration

This is a Next.js application integrated with Builder.io for visual content management.

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up your Builder.io API key:**
   - Sign up at [Builder.io](https://builder.io/content)
   - Get your API key from the settings
   - Copy `.env.local` and add your API key:
     ```
     NEXT_PUBLIC_BUILDER_API_KEY=your-api-key-here
     ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)
   - You can now create and edit content at [Builder.io](https://builder.io/content)

## Builder.io Integration

This project uses Builder.io's App Router integration pattern. Content is managed through the Builder.io visual editor and rendered on your website.

### Adding Custom Components

To register custom components with Builder.io, add them to `builder-registry.ts`:

```tsx
import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from "next/dynamic";

const MyComponent = dynamic(() =>
  import("./components/MyComponent").then((mod) => ({
    default: mod.MyComponent,
  })),
);

export const customComponents: RegisteredComponent[] = [
  {
    component: MyComponent,
    name: "MyComponent",
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "Default text",
        required: true,
      },
    ],
  },
];
```

## Learn More

- [Builder.io Documentation](https://www.builder.io/c/docs/developers)
- [Next.js Documentation](https://nextjs.org/docs)
