import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-sm font-medium transition-colors ${
        copied
          ? "bg-teal text-white"
          : "bg-codebg text-teal-dark hover:bg-teal hover:text-white"
      }`}
      aria-label={copied ? "Code copied" : `Copy code ${code}`}
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
