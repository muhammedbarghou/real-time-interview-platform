import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoaderSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section Skeleton */}
      <div className="w-full p-8 pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text content skeleton */}
            <div className="w-full md:w-1/2 space-y-4">
              <Skeleton className="h-10 w-3/4 bg-gray-800" />
              <Skeleton className="h-6 w-full bg-gray-800" />
              <Skeleton className="h-10 w-32 rounded-full bg-gray-800" />
            </div>

            {/* Hero image skeleton */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Skeleton className="h-64 w-64 rounded-full bg-gray-800" />

              {/* Floating tags skeletons */}
              <div className="absolute">
                {[...Array(4)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className={`h-10 w-16 rounded-md bg-gray-800 absolute`}
                    style={{
                      top: `${Math.random() * 100}px`,
                      left: `${Math.random() * 200 - 100}px`,
                      transform: `rotate(${Math.random() * 30 - 15}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interviews Section Skeleton */}
      <div className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-8 w-48 mb-8 bg-gray-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interview Card Skeletons */}
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-900 p-6 overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="h-16 w-16 rounded-full bg-gray-800" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-6 w-3/4 bg-gray-800" />
                    <Skeleton className="h-4 w-1/2 bg-gray-800" />
                  </div>
                  <Skeleton className="h-6 w-24 rounded-md bg-gray-800" />
                </div>

                <Skeleton className="h-4 w-full bg-gray-800 mt-4" />

                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton
                        key={i}
                        className="h-8 w-8 rounded-full bg-gray-800"
                      />
                    ))}
                  </div>
                  <Skeleton className="h-10 w-32 rounded-full bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderSkeleton;
