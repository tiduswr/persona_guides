"use client"

interface GameSelectorProps<T extends string> {
  currentGame: T;
  games: Record<T, string>;
  onSelect: (gameId: T) => void;
}

export function GameSelector<T extends string>({
  currentGame,
  games,
  onSelect
}: GameSelectorProps<T>) {
  const gameIds = Object.keys(games) as T[];

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {gameIds.map((id) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`px-4 py-2 rounded-md border text-xs font-bold transition-all cursor-pointer select-none ${
            currentGame === id
              ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105' 
              : 'bg-card hover:bg-accent border-border/40 opacity-80'
          }`}
        >
          {games[id]}
        </button>
      ))}
    </div>
  );
}