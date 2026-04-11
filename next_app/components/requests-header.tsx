export function RequestsHeader() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/velvet-room.png"
          alt="Velvet Room"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Requests
        </h1>
        
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
          Help the inhabitants of the Velvet Room and the citizens of the world. Complete specialized tasks to earn unique rewards.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-px w-24 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}