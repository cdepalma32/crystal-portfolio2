import { Skeleton } from "@/components/ui/skeleton"

export function TechStackSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-72 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>

      {/* Tech Categories */}
      <div className="space-y-8">
        {Array.from({ length: 4 }).map((_, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, techIndex) => (
                <div key={techIndex} className="flex flex-col items-center space-y-2">
                  <Skeleton className="h-16 w-16 rounded-lg" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3D Visualization Placeholder */}
      <div className="mt-12">
        <Skeleton className="h-96 w-full rounded-lg" />
      </div>
    </div>
  )
}
