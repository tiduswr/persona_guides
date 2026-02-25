export function DemonsHeader() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/velvet-room.png"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Shadows Database
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-slate-400">
          Comprehensive database of Shadows. Analyze elemental affinities,
          track potential drops, and identify every enemy location.
        </p>

        {/* Decorative scanline effect matching P3R UI */}
        <div className="mt-10 flex justify-center gap-1 opacity-20">
          <div className="h-1 w-12 bg-cyan-500" />
          <div className="h-1 w-4 bg-cyan-500" />
          <div className="h-1 w-1 bg-cyan-500" />
        </div>
      </div>
    </section>
  )
}