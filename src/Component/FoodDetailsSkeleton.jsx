const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-14 animate-pulse">
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-[4/3] rounded-3xl bg-slate-200 dark:bg-slate-700" />
          <div className="bg-slate-200 dark:bg-slate-700 h-6 w-32 rounded" />
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6" />
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-5 space-y-6">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
          <div className="h-20 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
          <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
