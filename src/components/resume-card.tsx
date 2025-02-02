"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  type?: "work" | "education";
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  type,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div className="relative">
      <div className="absolute  left-6  z-[10] h-full">
        {type === "work" && <div className="border h-full" />}
      </div>
      <Card className="flex pb-3">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto z-[50] bg-black rounded-lg">
            <AvatarImage src={logoUrl} alt={altText} className={cn(`z-[50]`)} />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-start justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                <Link
                  href={href || "#"}
                  className="hover:underline underline-offset-2 hover:text-blue-600"
                >
                  {title}
                </Link>
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </h3>
              <div className="text-xs sm:text-sm shrink-0 tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
