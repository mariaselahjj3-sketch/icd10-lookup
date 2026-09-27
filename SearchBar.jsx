import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ query, onChange, onClear }) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search a diagnosis — e.g. migraine, type 2 diabetes, pneumonia"
        className="w-full rounded border border-line bg-surface py-3.5 pl-11 pr-11 text-ink placeholder:text-muted/70 focus:border-teal"
        autoFocus
      />
      {query && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-muted hover:text-ink"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}
