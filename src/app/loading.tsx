export default function Loading() {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl font-bold font-alro-reg bg-linear-to-r from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 light:from-cyan-600 light:to-purple-600 bg-clip-text text-transparent animate-pulse">
            EmEm.
          </h1>
  
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-400 animate-spin" />
          </div>
        </div>
      </div>
    );
  }