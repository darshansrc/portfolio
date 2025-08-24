import { DATA } from "@/data/resume";
import { FileIcon, Loader, Loader2 } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

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
    <div className="flex max-h-screen  w-full items-center justify-center">
      <Loader className="size-6  mt-10 md:mt-20 text-muted-foreground animate-spin" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        setTimeout(() => {
          window.location.href = '/resume.pdf';
        }, 1000);
      `,
        }}
      />
    </div>
  );
}
