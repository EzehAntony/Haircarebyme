import "./globals.css";
import { Montserrat } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";


export const metadata = {
  title: "Revamp",
  description: "Reliable hair plug",
  themeColor: "#fff",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
