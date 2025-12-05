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
    title: "Foreign Bank Branches",
    banks: [
      {
        bankName: "Citibank",
        reports: [
          {
            name: "Income Statement",
            link: "/Citibank_NA_P3_Final.xlsx",
            preview: "/Citibank_NA_P3_Final.pdf",
            thumbnail: "/Citibank-Logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/Citibank_NA_M4_Final.xlsx",
            preview: "/Citibank_NA_M4_Final.pdf",
            thumbnail: "/Citibank-Logo.png"
          },
          {
            name: "Allowances",
            link: "/Citibank_NA_E3_Final.xlsx",
            preview: "/Citibank_NA_E3_Final.pdf",
            thumbnail: "/Citibank-Logo.png"
          },
          {
            name: "Deposit Requirement",
            link: "/Citibank_NA_K3_Final.xlsx",
            preview: "/Citibank_NA_K3_Final.pdf",
            thumbnail: "/Citibank-Logo.png"
          }
        ]
      },

      {
        bankName: "BNP Paribas",
        reports: [
          {
            name: "Income Statement",
            link: "/BNP_Paribas_P3_Final.xlsx",
            preview: "/BNP_Paribas_P3_Final.pdf",
            thumbnail: "/BNP-Logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/BNP_Paribas_M4_Final.xlsx",
            preview: "/BNP_Paribas_M4_Final.pdf",
            thumbnail: "/BNP-Logo.png"
          },
          {
            name: "Allowances",
            link: "/BNP_Paribas_E3_Final.xlsx",
            preview: "/BNP_Paribas_E3_Final.pdf",
            thumbnail: "/BNP-Logo.png"
          },
          {
            name: "Deposit Requirement",
            link: "/BNP_Paribas_K3_Final.xlsx",
            preview: "/BNP_Paribas_K3_Final.pdf",
            thumbnail: "/BNP-Logo.png"
          }
        ]
      },

      {
        bankName: "Capital One",
        reports: [
          {
            name: "Income Statement",
            link: "/Capital_One_P3_Final.xlsx",
            preview: "/Capital_One_P3_Final.pdf",
            thumbnail: "/CapitalOne-Logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/Capital_One_M4_Final.xlsx",
            preview: "/Capital_One_M4_Final.pdf",
            thumbnail: "/CapitalOne-Logo.png"
          },
          {
            name: "Allowances",
            link: "/Capital_One_E3_Final.xlsx",
            preview: "/Capital_One_E3_Final.pdf",
            thumbnail: "/CapitalOne-Logo.png"
          },
          {
            name: "Deposit Requirement",
            link: "/Capital_One_K3_Final.xlsx",
            preview: "/Capital_One_K3_Final.pdf",
            thumbnail: "/CapitalOne-Logo.png"
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  {
    title: "Domestic Banks",
    banks: [
      {
        bankName: "Fairstone Bank of Canada",
        reports: [
          {
            name: "Income Statement",
            link: "/Fairstone_Bank_of_Canada_P3_Final.xlsx",
            preview: "/Fairstone_Bank_of_Canada_P3_Final.pdf",
            thumbnail: "/fairstone-logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/Fairstone_Bank_of_Canada_M4_Final.xlsx",
            preview: "/Fairstone_Bank_of_Canada_M4_Final.pdf",
            thumbnail: "/fairstone-logo.png"
          },
          {
            name: "Allowances",
            link: "/Fairstone_Bank_of_Canada_E3_Final.xlsx",
            preview: "/Fairstone_Bank_of_Canada_E3_Final.pdf",
            thumbnail: "/fairstone-logo.png"
          },
          {
            name: "Capital Components",
            link: "/Fairstone_Bank_of_Canada_Cap_Final.xlsx",
            preview: "/Fairstone_Bank_of_Canada_Cap_Final.pdf",
            thumbnail: "/fairstone-logo.png"
          },
          {
            name: "Derivative Components",
            link: "/Fairstone_Bank_of_Canada_Der_Final.xlsx",
            preview: "/Fairstone_Bank_of_Canada_Der_Final.pdf",
            thumbnail: "/fairstone-logo.png"
          }
        ]
      },

      {
        bankName: "First Nations Bank of Canada",
        reports: [
          {
            name: "Income Statement",
            link: "/First_Nations_Bank_of_Canada_P3_Final.xlsx",
            preview: "/First_Nations_Bank_of_Canada_P3_Final.pdf",
            thumbnail: "/fnbc-logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/First_Nations_Bank_of_Canada_M4_Final.xlsx",
            preview: "/First_Nations_Bank_of_Canada_M4_Final.pdf",
            thumbnail: "/fnbc-logo.png"
          },
          {
            name: "Allowances",
            link: "/First_Nations_Bank_of_Canada_E3_Final.xlsx",
            preview: "/First_Nations_Bank_of_Canada_E3_Final.pdf",
            thumbnail: "/fnbc-logo.png"
          },
          {
            name: "Capital Components",
            link: "/First_Nations_Bank_of_Canada_Cap_Final.xlsx",
            preview: "/First_Nations_Bank_of_Canada_Der_Final.pdf",
            thumbnail: "/fnbc-logo.png"
          },
          {
            name: "Derivative Components",
            link: "/First_Nations_Bank_of_Canada_Der_Final.xlsx",
            preview: "/First_Nations_Bank_of_Canada_Der_Final.pdf",
            thumbnail: "/fnbc-logo.png"
          }
        ]
      },

      {
        bankName: "Haventree Bank",
        reports: [
          {
            name: "Income Statement",
            link: "/Haventree_Bank_P3_Final.xlsx",
            preview: "/Haventree_Bank_P3_Final.pdf",
            thumbnail: "/haventree-logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/Haventree_Bank_M4_Final.xlsx",
            preview: "/Haventree_Bank_M4_Final.pdf",
            thumbnail: "/haventree-logo.png"
          },
          {
            name: "Allowances",
            link: "/Haventree_Bank_E3_Final.xlsx",
            preview: "/Haventree_Bank_E3_Final.pdf",
            thumbnail: "/haventree-logo.png"
          },
          {
            name: "Capital Components",
            link: "/Haventree_Bank_Cap_Final.xlsx",
            preview: "/Haventree_Bank_Cap_Final.pdf",
            thumbnail: "/haventree-logo.png"
          },
          {
            name: "Derivative Components",
            link: "/Haventree_Bank_Der_Final.xlsx",
            preview: "/Haventree_Bank_Der_Final.pdf",
            thumbnail: "/haventree-logo.png"
          }
        ]
      },

      {
        bankName: "Canadian Tire Bank",
        reports: [
          {
            name: "Income Statement",
            link: "/Canadian_Tire_Bank_P3_Final.xlsx",
            preview: "/Canadian_Tire_Bank_P3_Final.pdf",
            thumbnail: "/tire-logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/Canadian_Tire_Bank_M4_Final.xlsx",
            preview: "/Canadian_Tire_Bank_M4_Final.pdf",
            thumbnail: "/tire-logo.png"
          },
          {
            name: "Allowances",
            link: "/Canadian_Tire_Bank_E3_Final.xlsx",
            preview: "/Canadian_Tire_Bank_E3_Final.pdf",
            thumbnail: "/tire-logo.png"
          },
          {
            name: "Capital Components",
            link: "/Canadian_Tire_Bank_Cap_Final.xlsx",
            preview: "/Canadian_Tire_Bank_Cap_Final.pdf",
            thumbnail: "/tire-logo.png"
          },
          {
            name: "Derivative Components",
            link: "/Canadian_Tire_Bank_Der_Final.xlsx",
            preview: "/Canadian_Tire_Bank_Der_Final.pdf",
            thumbnail: "/tire-logo.png"
          }
        ]
      },

      {
        bankName: "President's Choice Bank",
        reports: [
          {
            name: "Income Statement",
            link: "/President's_Choice_Bank_P3_Final.xlsx",
            preview: "/President's_Choice_Bank_P3_Final.pdf",
            thumbnail: "/pc-logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/President's_Choice_Bank_M4_Final.xlsx",
            preview: "/President's_Choice_Bank_M4_Final.pdf",
            thumbnail: "/pc-logo.png"
          },
          {
            name: "Allowances",
            link: "/President's_Choice_Bank_E3_Final.xlsx",
            preview: "/President's_Choice_Bank_E3_Final.pdf",
            thumbnail: "/pc-logo.png"
          },
          {
            name: "Capital Components",
            link: "/President's_Choice_Bank_Cap_Final.xlsx",
            preview: "/President's_Choice_Bank_Cap_Final.pdf",
            thumbnail: "/pc-logo.png"
          },
          {
            name: "Derivative Components",
            link: "/President's_Choice_Bank_Der_Final.xlsx",
            preview: "/President's_Choice_Bank_Der_Final.pdf",
            thumbnail: "/pc-logo.png"
          }
        ]
      },

      {
        bankName: "Rogers Bank",
        reports: [
          {
            name: "Income Statement",
            link: "/Rogers_Bank_P3_Final.xlsx",
            preview: "/Rogers_Bank_P3_Final.pdf",
            thumbnail: "/rogers-logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/Rogers_Bank_M4_Final.xlsx",
            preview: "/Rogers_Bank_M4_Final.pdf",
            thumbnail: "/rogers-logo.png"
          },
          {
            name: "Allowances",
            link: "/Rogers_Bank_E3_Final.xlsx",
            preview: "/Rogers_Bank_E3_Final.pdf",
            thumbnail: "/rogers-logo.png"
          },
          {
            name: "Capital Components",
            link: "/Rogers_Bank_Cap_Final.xlsx",
            preview: "/Rogers_Bank_Cap_Final.pdf",
            thumbnail: "/rogers-logo.png"
          },
          {
            name: "Derivative Components",
            link: "/Rogers_Bank_Der_Final.xlsx",
            preview: "/Rogers_Bank_Der_Final.pdf",
            thumbnail: "/rogers-logo.png"
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  {
    title: "Foreign Bank Subsidiary",
    banks: [
      {
        bankName: "Amex Bank of Canada",
        reports: [
          {
            name: "Income Statement",
            link: "/Amex_Bank_of_Canada_P3_Final.xlsx",
            preview: "/Amex_Bank_of_Canada_P3_Final.pdf",
            thumbnail: "/Amex-logo.png"
          },
          {
            name: "Balance Sheet",
            link: "/Amex_Bank_of_Canada_M4_Final.xlsx",
            preview: "/Amex_Bank_of_Canada_M4_Final.pdf",
            thumbnail: "/Amex-logo.png"
          },
          {
            name: "Allowances",
            link: "/Amex_Bank_of_Canada_E3_Final.xlsx",
            preview: "/Amex_Bank_of_Canada_E3_Final.pdf",
            thumbnail: "/Amex-logo.png"
          },
          {
            name: "Capital Components",
            link: "/Amex_Bank_of_Canada_Cap_Final.xlsx",
            preview: "/Amex_Bank_of_Canada_Cap_Final.pdf",
            thumbnail: "/Amex-logo.png"
          },
          {
            name: "Derivative Components",
            link: "/Amex_Bank_of_Canada_Der_Final.xlsx",
            preview: "/Amex_Bank_of_Canada_Der_Final.pdf",
            thumbnail: "/Amex-logo.png"
          }
        ]
      }
    ]
  }
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
<section className="mt-24 max-w-6xl mx-auto mb-40 px-4">

  {/* MAIN TITLE */}
  <h2 className="text-3xl md:text-5xl font-bold text-black underline underline-offset-4 
                 decoration-[3px] decoration-black mb-20 text-center">
    Sample Reports
  </h2>

  {/* STACK CATEGORIES VERTICALLY */}
  <div className="flex flex-col gap-24">

    {samples.map((category) => (
      <div key={category.title}>

        {/* CATEGORY TITLE (CENTERED) */}
        <h3 className="text-3xl font-bold mb-10 underline underline-offset-4 text-center">
          {category.title}
        </h3>

        {/* BANKS STACKED VERTICALLY */}
        <div className="flex flex-col gap-16">

          {category.banks.map((bank) => (
            <div key={bank.bankName}>

              {/* BANK NAME (CENTERED) */}
              <p className="text-xl font-semibold mb-6 text-center">
                {bank.bankName}
              </p>

              {/* REPORT CARDS ROW (CENTERED, NO HORIZONTAL SCROLL ON DESKTOP) */}
              <div
                className="
                  flex flex-row flex-wrap 
                  justify-center
                  gap-8
                "
              >
                {bank.reports.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setPreviewSrc(item.preview);
                      setDownloadSrc(item.link);
                    }}
                    className="
                      group flex flex-col items-center cursor-pointer
                      transition hover:scale-[1.03]
                    "
                  >
                    {/* Outer frame */}
                    <div className="bg-black border-4 border-black p-[2px]">

                      {/* Inner image container */}
                      <div className="border border-white bg-black 
                                      w-44 h-64 flex items-center justify-center">
                        <div
                          className="w-full h-full bg-cover bg-center group-hover:opacity-90 transition"
                          style={{ backgroundImage: `url('${item.thumbnail}')` }}
                        />
                      </div>

                    </div>

                    {/* Label */}
                    <p className="mt-3 text-sm text-black group-hover:underline text-center w-40">
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
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
