import "./globals.css";

export const metadata = {
  title: "LabAuth — Authentication, Redefined.",
  description:
    "Powerful authentication, licensing and HWID management for modern software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
