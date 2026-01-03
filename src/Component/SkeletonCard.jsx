import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-md">
      
      {/* Image Skeleton */}
      <div className="relative h-56 bg-slate-300 dark:bg-slate-600">
        <div className="absolute top-4 left-4 h-4 w-20 bg-slate-400 dark:bg-slate-700 rounded-full" />
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <div className="h-5 bg-slate-300 dark:bg-slate-600 rounded w-3/4 mb-3"></div>

        {/* Description */}
        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded p-2 mb-4"></div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
          <div className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-2/3"></div>
          <div className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-1/2"></div>
        </div>

        {/* Button */}
        <div className="h-8 bg-slate-300 dark:bg-slate-600 rounded w-full mt-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
