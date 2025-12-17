import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-phone-number-input/style.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Quippos | Finnegans",
  description: "Gestioná tu talento como una gran corporación. Plataforma HCM que integra la gestión de procesos y mejora la comunicación interna.",
};

const isProd = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
     {isProd && (
          <>
            {/* GTM - script inicial */}
            <Script id="gtm-script" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BXL2LLR');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        {isProd && (
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BXL2LLR" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        )}
      </body>
    </html>
  );
}
