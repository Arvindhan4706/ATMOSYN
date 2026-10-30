export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-[#1e2622]/10 rounded ${className}`}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-[#1e2622]/10 rounded mb-2 animate-pulse" style={{ width: i === lines - 1 ? "70%" : "100%" }} />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 ${className}`} aria-hidden="true">
      <Skeleton className="h-10 w-20 mb-6" />
      <Skeleton className="h-8 w-3/4 mb-4" />
      <SkeletonText lines={3} />
    </div>
  );
}

export function SkeletonProjectDetail({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Skeleton className="h-6 w-48 mb-4" />
      <Skeleton className="h-16 w-full mb-6" />
      <SkeletonText lines={2} className="mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4 pb-10 border-b border-[#1e2622]/10">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-8 w-3/4 mb-2" />
              <SkeletonText lines={3} />
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 space-y-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-6 w-3/4 mb-4" />
              <SkeletonText lines={1} className="mb-4" />
              <Skeleton className="h-12 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}