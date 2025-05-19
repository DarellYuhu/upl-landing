export type Timeline = {
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  image: Image;
};

export type CompanyProfiles = {
  id: number;
  documentId: string;
  company_name: string;
  short_name: string;
  abbreviate_name: string;
  phone: string;
  address: string;
  email: string;
  description: string;
  vision: string;
  mission: string;
};

export type ProducionProcess = {
  id: number;
  documentId: string;
  name: string;
  description: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  documentId: string;
  name: string;
  mesh: string | null;
  color: string;
  application_short: string;
  diameter: string | null;
  weight: string | null;
  description: string;
  main_adventage: string;
  application_detail: string;
  benefit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: Image[];
};

type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Record<string, unknown>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiRes<T = unknown> = {
  data: T;
  meta: object;
};
