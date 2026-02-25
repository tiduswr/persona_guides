export function SocialLinkHeader() {
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
          Social Link Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
          Complete guide to answers to all Social Links in Persona Games. Choose the best answers to maximize your points.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-best" />
            Best (+3)
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-good" />
            Good (+1~2)
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-neutral" />
            Neutral (+0)
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-bad" />
            Bad (-)
          </div>
        </div>
      </div>
    </section>
  )
}
