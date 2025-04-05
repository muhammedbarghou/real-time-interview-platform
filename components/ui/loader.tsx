"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const loaderVariants = cva(
  "inline-block animate-spin rounded-full border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-3",
        lg: "h-12 w-12 border-4",
      },
      variant: {
        default: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
        muted: "text-muted-foreground",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {
  text?: string;
  fullScreen?: boolean;
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, size, variant, text, fullScreen, ...props }, ref) => {
    return (
      <div
        role="status"
        className={cn(
          "flex flex-col items-center justify-center gap-2",
          fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
          className,
        )}
        {...props}
        ref={ref}
      >
        <div className={cn(loaderVariants({ size, variant }))} />
        {text && <p className="text-sm text-muted-foreground">{text}</p>}
        <span className="sr-only">Loading</span>
      </div>
    );
  },
);

Loader.displayName = "Loader";

export { Loader, loaderVariants };
