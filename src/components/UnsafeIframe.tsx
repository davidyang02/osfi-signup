"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export function ReportModal({
  src,
  onClose,
  closing,
}: {
  src: string;
  onClose: () => void;
  closing: boolean;
}) {
  // ESC key closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4
      transition-opacity duration-300 ${closing ? "opacity-0" : "opacity-100"}`}
      onClick={onClose}
    >
      <div
        className={`bg-white border border-black rounded-none max-w-6xl w-full h-[85vh] shadow-xl relative flex flex-col
        transition-transform duration-300 ${closing ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-black bg-black text-white">
          <h3 className="font-semibold">Report Preview</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white hover:text-black transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* iframe */}
        <iframe
          src={src}
          className="flex-1 w-full"
          style={{ border: "none" }}
        ></iframe>

        {/* Footer */}
        <div className="border-t border-black p-4 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-black hover:bg-gray-100 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
