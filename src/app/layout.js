import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ogImg from './opengraph-image.png';
import twImg from './twitter-image.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.megasalehub.shop'),
  title: 'Mega Sale Hub | Heavy discount is HERE',
  description: 'Discover discounts on Amazon at Mega Sale Hub: Electronics, fashion, home goods, & more! Save while shopping through our affiliate links!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="description" content="Discover discounts on Amazon at Mega Sale Hub: Electronics, fashion, home goods, & more! Save while shopping through our affiliate links!" />
        <meta name="keywords" content="discount Amazon products, deals, savings, affordable shopping, Amazon discounts, online shopping, best deals, exclusive offers, budget shopping, Mega Sale Hub" />
        <link rel="canonical" href="https://www.megasalehub.shop" />

        <link rel="apple-touch-icon" sizes="57x57" href="./apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="./apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="./apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="./apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="./apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-icon-180x180.png" />

        <link rel="icon" type="image/png" sizes="192x192" href="./android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./android-icon-192x192.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="./favicon-96x96.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.ico" />
        <link rel="icon" type="image/x-icon" href='/favicon.ico'/>
        <meta name="msapplication-TileColor" content="#fafafa" />
        <meta name="msapplication-TileImage" content="./ms-icon-144x144.png" />
        <meta name="theme-color" content="#fafafa" />


        <meta property="og:title" content="Mega Sale Hub - Discounted Amazon Products, Deals, and Savings" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:url" content="https://www.megasalehub.shop" />
        <meta property="og:description" content="Discover discounts on Amazon at Mega Sale Hub: Electronics, fashion, home goods, & more! Save while shopping through our affiliate links!" />
        <meta property="og:site_name" content="Mega Sale Hub" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Opengraph Image for MEGASALEHUB" />

        <meta name="twitter:image:alt" content="Twitter Image for MEGASALEHUB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="megasalehub.shop" />
        <meta property="twitter:url" content="https://www.megasalehub.shop" />
        <meta name="twitter:title" content="Mega Sale Hub | Discounted Products, Deals, and Savings" />
        <meta name="twitter:description" content="Discover discounts on Amazon at Mega Sale Hub: Electronics, fashion, home goods, & more! Save while shopping through our affiliate links!" />
        <meta name="twitter:image" content={twImg} />

        <meta name="robots" content="index, follow" />

      </Head>

      <body className={`${inter.className} scroll-smooth`} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  )
}
