import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ogImg from './assets/images/opengraph-image.png';
import twImg from './assets/images/twitter-image.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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

        <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/android-chrome-512x512.png" />


        <meta property="og:title" content="Mega Sale Hub - Discounted Amazon Products, Deals, and Savings" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:url" content="https://www.megasalehub.shop" />
        <meta property="og:description" content="Discover discounts on Amazon at Mega Sale Hub: Electronics, fashion, home goods, & more! Save while shopping through our affiliate links!" />
        <meta property="og:site_name" content="Mega Sale Hub" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

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
