export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
}
