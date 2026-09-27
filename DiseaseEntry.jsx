import React from "react";
import CopyButton from "./CopyButton.jsx";

export default function DiseaseEntry({ entry, onSelect }) {
  return (
    <article
      className="group border-b border-line py-5 first:pt-0 last:border-b-0"
      onMouseDown={() => onSelect(entry)}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs text-muted">{entry.category}</p>
          <h3 className="font-serif text-lg text-ink">{entry.name}</h3>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded bg-codebg px-2.5 py-1 font-mono text-sm font-medium text-teal-dark">
            {entry.code}
          </span>
          <CopyButton code={entry.code} />
        </div>
      </div>
      <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted">
        {entry.description}
      </p>
    </article>
  );
}
