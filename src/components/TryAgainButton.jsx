// File: /components/TryAgainButton.jsx
"use client";

export default function TryAgainButton() {
  return (
    <button onClick={() => window.location.reload()} className="hover:text-amber-600">
      Try Again
    </button>
  );
}
