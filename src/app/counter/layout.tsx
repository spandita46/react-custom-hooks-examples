import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counters",
  description: "Example page to use counter hook",
};

export default function CounterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
