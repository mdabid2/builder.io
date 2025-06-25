import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";

interface PageProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

// Builder.io API key - use environment variable
const BUILDER_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export default async function Page(props: PageProps) {
  const urlPath = "/" + (props.params?.slug?.join("/") || "");

  const content = await fetchOneEntry({
    options: props.searchParams,
    apiKey: BUILDER_PUBLIC_API_KEY,
    model: "page",
    userAttributes: { urlPath },
  });

  const canShowContent =
    content ||
    isPreviewing(props.searchParams) ||
    isEditing(props.searchParams);

  if (!canShowContent) {
    const hasValidApiKey =
      BUILDER_PUBLIC_API_KEY && BUILDER_PUBLIC_API_KEY !== "your-api-key-here";

    if (!hasValidApiKey) {
      return (
        <div
          style={{
            padding: "2rem",
            fontFamily: "system-ui",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h1>🎉 Builder.io + Next.js is Ready!</h1>
          <p>
            Your app is successfully set up, but you need to configure your
            Builder.io API key.
          </p>

          <h2>Next Steps:</h2>
          <ol style={{ lineHeight: "1.6" }}>
            <li>
              <strong>Get your API key:</strong>
              <br />
              Sign up at{" "}
              <a
                href="https://builder.io/content"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0066cc" }}
              >
                builder.io
              </a>{" "}
              and copy your API key from the settings.
            </li>
            <li>
              <strong>Update your environment:</strong>
              <br />
              Replace{" "}
              <code
                style={{
                  background: "#f5f5f5",
                  padding: "2px 4px",
                  borderRadius: "3px",
                }}
              >
                your-api-key-here
              </code>{" "}
              in{" "}
              <code
                style={{
                  background: "#f5f5f5",
                  padding: "2px 4px",
                  borderRadius: "3px",
                }}
              >
                .env.local
              </code>{" "}
              with your actual API key.
            </li>
            <li>
              <strong>Create content:</strong>
              <br />
              Go to Builder.io and create a new page with the URL path "/" to
              see your content here.
            </li>
          </ol>

          <p
            style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "#f0f8ff",
              borderRadius: "5px",
            }}
          >
            💡 <strong>Tip:</strong> Once you've added your API key and created
            content, this page will automatically display your Builder.io
            content!
          </p>
        </div>
      );
    }

    return (
      <div
        style={{
          padding: "2rem",
          fontFamily: "system-ui",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h1>404 - Page Not Found</h1>
        <p>
          No content found for this page. Make sure you have your content
          published at{" "}
          <a
            href="https://builder.io/content"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0066cc" }}
          >
            builder.io
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <Content content={content} apiKey={BUILDER_PUBLIC_API_KEY} model={"page"} />
  );
}
