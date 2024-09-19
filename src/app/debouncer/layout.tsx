import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debouncer",
  description: "Example page to use debouncer hook",
};

export default function DebouncerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
