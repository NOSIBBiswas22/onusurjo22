import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: 'অনুসূর্য - ২২ | Batch 22',
  description: 'SSC Batch of 2022 from Pabna Collectorate Model School and College',
  keywords: 'Onusurjo, Batch 22, Pabna Collectorate Model School, SSC 2022, Alumni',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}