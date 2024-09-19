import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fetcher",
  description: "Example page to use fetcher hook",
};

export default function FetcherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
