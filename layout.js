export const metadata = {
  title: "knomwan v.2",
  description: "ระบบสั่งอาหารร้าน knomwan v.2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
