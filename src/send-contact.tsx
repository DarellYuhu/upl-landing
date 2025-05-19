"use server";

import { doc } from "./lib/spreadsheet-client";

export const sendContact = async (formData: FormData) => {
  const nama = (formData.get("nama") ?? "") as string;
  const namaPerusahaan = (formData.get("namaPerusahaan") ?? "") as string;
  const email = (formData.get("email") ?? "") as string;
  const noHp = (formData.get("noHp") ?? "") as string;
  const pesan = (formData.get("pesan") ?? "") as string;

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.setHeaderRow([
    "Nama",
    "Perusahaan",
    "Email",
    "No HP",
    "Pesan",
    "Tanggal",
  ]);
  await sheet.addRow([
    nama,
    namaPerusahaan,
    email,
    noHp,
    pesan,
    new Date().toLocaleString(),
  ]);
};
