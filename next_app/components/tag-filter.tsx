"use client"


interface TagFilterProps {
  items: string[];
  activeItem: string | null;
  onItemClick: (item: string | null) => void;
  allLabel?: string;
}

export function TagFilter({
  items,
  activeItem,
  onItemClick,
  allLabel = "All"
}: TagFilterProps) {

  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:overflow-x-visible pb-2 sm:pb-0 gap-2 no-scrollbar scroll-smooth">
        <button
          onClick={() => onItemClick(null)}
          className={`whitespace-nowrap px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all cursor-pointer ${
            activeItem === null
              ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(var(--primary),0.2)]' 
              : 'bg-secondary/40 border-transparent text-muted-foreground hover:bg-secondary'
          }`}
        >
          {allLabel}
        </button>

        {items.map((item) => (
          <button
            key={item}
            onClick={() => onItemClick(activeItem === item ? null : item)}
            className={`whitespace-nowrap px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all cursor-pointer ${
              activeItem === item
                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(var(--primary),0.2)]' 
                : 'bg-secondary/40 border-transparent text-muted-foreground hover:bg-secondary'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}