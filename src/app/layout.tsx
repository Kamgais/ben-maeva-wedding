import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  title: "Ben & Maeva - Notre Mariage",
  description: "Bienvenue sur le site du mariage de Ben & Maeva. Découvrez notre histoire, les détails du grand jour, et confirmez votre présence.",
  keywords: ["mariage", "Ben & Maeva", "invitation", "RSVP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main style={{ marginTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
