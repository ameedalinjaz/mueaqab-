export const metadata = {
  title: "Mueaqab",
  description: "تجربة أولية لمشروع Next.js على Vercel"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
