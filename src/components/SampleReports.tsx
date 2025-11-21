"use client";

import { useState } from "react";
import { X, Download } from "lucide-react";
import { useEffect } from "react"; // ensure this is at the top

export default function SampleReports() {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [downloadSrc, setDownloadSrc] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);


  const samples = [
    {
      name: "Citibank | Income Statement",
      link: "/Citibank_NA_P3_Final.xlsx",
      preview: "/Citibank_NA_P3_Final.pdf",
      thumbnail: "/Citibank-Logo.png"
    },
    {
      name: "BNP Paribas | Income Statement",
      link: "/BNP_Paribas_P3_Final.xlsx",
      preview: "/BNP_Paribas_P3_Final.pdf",
      thumbnail: "/BNP-Logo.png"
    },
    {
      name: "Capital One | Income Statement",
      link: "/Capital_One_P3_Final.xls",
      preview: "/Capital_One_P3_Final.pdf",
      thumbnail: "/CapitalOne-Logo.png"
    },

    {
      name: "Citibank | Balance Sheet",
      link: "/Citibank_NA_M4_Final.xlsx",
      preview: "/Citibank_NA_M4_Final.pdf",
      thumbnail: "/Citibank-Logo.png"
    },
    {
      name: "BNP Paribas | Balance Sheet",
      link: "/BNP_Paribas_M4_Final.xlsx",
      preview: "/BNP_Paribas_M4_Final.pdf",
      thumbnail: "/BNP-Logo.png"
    },
    {
      name: "Capital One | Balance Sheet",
      link: "/Capital_One_M4_Final.xlsx",
      preview: "/Capital_One_M4_Final.pdf",
      thumbnail: "/CapitalOne-Logo.png"
    },
  ];

  // inside SampleReports component...
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      // Only close if modal is open and not already closing
      if (previewSrc && !closing) {
        setClosing(true);
        setTimeout(() => {
          setPreviewSrc(null);
          setClosing(false);
        }, 250);
      }
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [previewSrc, closing]);

  return (
    <section className="mt-24 max-w-5xl mx-auto text-center mb-40 px-4">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-black underline underline-offset-4 decoration-[3px] decoration-black mb-30">
        Sample Reports
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30">
        {samples.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              setPreviewSrc(item.preview);
              setDownloadSrc(item.link);
            }}
            className="group flex flex-col items-center cursor-pointer"
          >
            {/* Black Outer Frame */}
            <div className="bg-black border-4 border-black p-[2px] transition 
                            hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]">

              {/* White inner border */}
              <div className="border border-white bg-black w-65 h-100 flex items-center justify-center">

                {/* Thumbnail preview */}
                <div
                  className="w-full h-full bg-cover bg-center 
                             group-hover:opacity-90 transition"
                  style={{
                    backgroundImage: `url('${item.thumbnail}')`
                  }}
                />
              </div>
            </div>

            {/* Label */}
            <p className="mt-4 text-sm font-medium text-black group-hover:underline underline-offset-4">
              {item.name}
            </p>
          </button>
        ))}
      </div>

{/* Modal */}
{previewSrc && (
  <div
    className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 
      ${closing ? "modal-fade-out" : "modal-fade-in"}`}
    onClick={() => {
      setClosing(true);
      setTimeout(() => {
        setPreviewSrc(null);
        setClosing(false);
      }, 250);
    }}
  >
    <div
      className="bg-white border border-black rounded-none max-w-5xl w-full h-[85vh] shadow-xl relative flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-black bg-black text-white">
        <h3 className="font-semibold">Report Preview</h3>

        <button
          onClick={() => {
            setClosing(true);
            setTimeout(() => {
              setPreviewSrc(null);
              setClosing(false);
            }, 250);
          }}
          className="p-1 hover:bg-white hover:text-black transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* PDF iframe */}
      <iframe
        src={previewSrc}
        className="flex-1 w-full"
        style={{ border: "none" }}
      ></iframe>

      {/* Footer */}
      <div className="border-t border-black p-4 bg-gray-50 flex justify-end gap-4">
        <a
          href={downloadSrc ?? "#"}
          download
          className="flex items-center gap-2 px-4 py-2 bg-black text-white border border-black hover:bg-gray-900 transition"
        >
          <Download className="w-4 h-4" />
          Download Excel File
        </a>

        <button
          onClick={() => {
            setClosing(true);
            setTimeout(() => {
              setPreviewSrc(null);
              setClosing(false);
            }, 250);
          }}
          className="px-4 py-2 bg-white border border-black hover:bg-gray-100 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}



    </section>
  );
}
