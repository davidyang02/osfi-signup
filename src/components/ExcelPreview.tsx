"use client";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

interface ExcelPreviewProps {
  file: string;
}

export default function ExcelPreview({ file }: ExcelPreviewProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const html = XLSX.utils.sheet_to_html(sheet);
        setHtml(html);
      })
      .catch((err) => console.error("Error loading Excel file:", err));
  }, [file]);

  return (
    <div
      className="overflow-auto h-full border-t border-black bg-white"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
