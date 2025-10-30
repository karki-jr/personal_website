"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <div className="hidden md:flex items-center space-x-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-16" />
            ))}
          </div>
          <Skeleton className="h-8 w-20" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
          <Skeleton className="h-16 w-96 mx-auto" />
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          <div className="flex justify-center space-x-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
