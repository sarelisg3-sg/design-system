import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ className, label, error, id, ...props }: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-[var(--ds-radius-xs)]">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-[length:var(--ds-text-sm)] font-medium text-neutral-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn(
          "min-h-24 w-full px-3 py-2 resize-y",
          "rounded-[var(--ds-radius-md)] border border-neutral-200 bg-white",
          "text-[length:var(--ds-text-base)] text-neutral-900 placeholder:text-neutral-400",
          "transition-colors",
          "focus:outline-2 focus:outline-offset-0 focus:outline-brand-500 focus:border-brand-500",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50",
          error && "border-error focus:outline-error",
          className
        )}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${textareaId}-error`}
          role="alert"
          className="text-[length:var(--ds-text-xs)] text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}
