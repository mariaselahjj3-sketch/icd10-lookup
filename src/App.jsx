import React, { useEffect, useMemo, useState } from "react";
import icd10Data from "./data/icd10Data.js";
import SearchBar from "./components/SearchBar.jsx";
import DiseaseEntry from "./components/DiseaseEntry.jsx";
import HistoryPanel from "./components/HistoryPanel.jsx";

const HISTORY_KEY = "icd10-lookup-history";
const MAX_HISTORY = 8;

function rank(entry, needle) {
  const name = entry.name.toLowerCase();
  if (name === needle) return 0;
  if (name.startsWith(needle)) return 1;
  if (entry.aliases.some((a) => a === needle)) return 1;
  if (entry.aliases.some((a) => a.startsWith(needle))) return 2;
  if (name.includes(needle)) return 3;
  if (entry.aliases.some((a) => a.includes(needle))) return 4;
  return 5;
}

export default function App() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      setHistory(stored);
    } catch {
      setHistory([]);
    }
  }, []);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return icd10Data
      .filter(
        (e) =>
          e.name.toLowerCase().includes(needle) ||
          e.aliases.some((a) => a.includes(needle)) ||
          e.code.toLowerCase().includes(needle)
      )
      .sort((a, b) => rank(a, needle) - rank(b, needle))
      .slice(0, 12);
  }, [query]);

  const recordHistory = (entry) => {
    setHistory((prev) => {
      const next = [entry, ...prev.filter((h) => h.code !== entry.code)].slice(
        0,
        MAX_HISTORY
      );
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handleHistorySelect = (entry) => {
    setQuery(entry.name);
    recordHistory(entry);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <header className="mb-10">
          <div className="mb-3 h-[3px] w-14 bg-teal" />
          <h1 className="font-serif text-4xl text-ink">ICD-10 Lookup</h1>
          <p className="mt-2 max-w-[54ch] text-muted">
            Search a disease or condition by name to find its ICD-10-CM
            diagnosis code and description.
          </p>
        </header>

        <SearchBar
          query={query}
          onChange={setQuery}
          onClear={() => setQuery("")}
        />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_280px]">
          <section className="rounded border border-line bg-surface px-6">
            {query.trim() === "" && (
              <p className="py-10 text-center text-sm text-muted">
                Start typing a diagnosis to see matching ICD-10-CM codes.
              </p>
            )}

            {query.trim() !== "" && results.length === 0 && (
              <div className="py-10 text-center">
                <p className="font-serif text-lg text-ink">
                  No matching entries
                </p>
                <p className="mt-1 text-sm text-muted">
                  Try a different name, or search by a shorter term.
                </p>
              </div>
            )}

            {results.map((entry) => (
              <DiseaseEntry
                key={entry.code}
                entry={entry}
                onSelect={recordHistory}
              />
            ))}
          </section>

          <HistoryPanel
            history={history}
            onSelect={handleHistorySelect}
            onClear={clearHistory}
          />
        </div>

        <footer className="mt-10 border-t border-line pt-5 text-xs text-muted">
          Reference tool covering a curated set of common diagnoses. Codes are
          provided for convenience only — verify against the current CMS
          ICD-10-CM manual before clinical or billing use.
        </footer>
      </div>
    </div>
  );
}
