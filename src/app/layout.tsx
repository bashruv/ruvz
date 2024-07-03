import { IBM_Plex_Mono } from "next/font/google";

import "tailwindcss/tailwind.css";

const ibmPlexMono = IBM_Plex_Mono({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({ children }: DefaultComponentProps) {
  return (
    <html lang="ko">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}
