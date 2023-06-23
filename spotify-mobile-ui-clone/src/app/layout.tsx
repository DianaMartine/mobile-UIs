import "./globals.css";

export const metadata = {
  title: "Spotify Mobile UI Clone",
  description: "A clone of the Spotify mobile app UI using Next and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
