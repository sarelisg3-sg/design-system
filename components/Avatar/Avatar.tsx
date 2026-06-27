/* eslint-disable @next/next/no-img-element */
"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { useState, type HTMLAttributes } from "react";

const avatarVariants = cva(
  [
    "relative inline-flex items-center justify-center",
    "rounded-full overflow-hidden shrink-0 select-none",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-[length:var(--ds-text-xs)]",
        md: "h-10 w-10 text-[length:var(--ds-text-sm)]",
        lg: "h-12 w-12 text-[length:var(--ds-text-base)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  name?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function Avatar({ className, size, src, alt, name, ...props }: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(src) && !hasError;
  const initials = name ? getInitials(name) : null;

  return (
    <div
      role="img"
      aria-label={alt ?? name ?? "Avatar"}
      {...props}
      className={cn(avatarVariants({ size }), className)}
    >
      {showImage ? (
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : initials ? (
        <span className="h-full w-full flex items-center justify-center font-medium bg-brand-100 text-brand-700">
          {initials}
        </span>
      ) : (
        <span className="h-full w-full flex items-center justify-center bg-neutral-100 text-neutral-400">
          <User className="h-[60%] w-[60%]" aria-hidden />
        </span>
      )}
    </div>
  );
}
