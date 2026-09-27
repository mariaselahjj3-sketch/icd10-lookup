import React from "react";
import { Clock, Trash2 } from "lucide-react";

export default function HistoryPanel({ history, onSelect, onClear }) {
  return (
    <aside className="rounded border border-line bg-surface p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink">
          <Clock size={16} className="text-teal" />
          <h2 className="font-serif text-base">Recent searches</h2>
        </div>
        {history.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-xs text-muted hover:text-alert"
          >
            <Trash2 size={13} />
            Clear
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="mt-3 text-sm text-muted">
          Diagnoses you look up will appear here for quick return.
        </p>
      ) : (
        <ul className="mt-3 space-y-1">
          {history.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                onClick={() => onSelect(item)}
                className="flex w-full items-center justify-between gap-2 rounded px-2 py-2 text-left text-sm text-ink hover:bg-paper"
              >
                <span className="truncate">{item.name}</span>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {item.code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
