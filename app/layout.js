import "./globals.css";

export const metadata = {
  title: "SoftSell",
  description: "Marketplace to but and sell software",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
