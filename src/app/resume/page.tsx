import { DATA } from "@/data/resume";
import { FileIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${DATA.name} - Resume`,
  description: `Resume of ${DATA.name} - ${DATA.description}`,
  openGraph: {
    title: `${DATA.name} - Resume`,
    description: `Resume of ${DATA.name} - ${DATA.description}`,
    url: `${DATA.url}/resume`,
    siteName: DATA.name,
    images: [
      {
        url: "/resume/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name} Resume`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - Resume`,
    description: `Resume of ${DATA.name} - ${DATA.description}`,
    images: ["/resume/twitter-image.png"],
  },
};

export default function ResumePage() {
  return (
    <div className="flex max-h-screen  items-center justify-center">
      <div className="text-center my-auto h-full mt-32 md:mt-64 space-y-4">
        <FileIcon className="size-10 mx-auto w-full" />
        <h1 className="text-2xl font-bold">{DATA.name} - Resume</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          {DATA.description}
        </p>
        <a
          href="/resume/download"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View Resume PDF
        </a>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          // Redirect to PDF after a brief moment to allow social media crawlers to parse metadata
          setTimeout(() => {
            window.location.href = '/resume/download';
          }, 2000);
        `,
        }}
      />
    </div>
  );
}
