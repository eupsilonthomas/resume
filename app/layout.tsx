import './globals.scss'
import { Inter } from 'next/font/google'
import Header from './Header';
import Footer from './Footer';
const inter = Inter({ subsets: ['latin'] })
 

/*export const metadata = {
  title: 'Ev Website Next 13',
  description: 'Sample Next 13',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
       <>
       {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WC8K8NM');`,
        }}
        />
        {/* End Google Tag Manager */}
        </> 

        <title>Chickasaw Flash Cards | Chikashsha aashoppala' chalhka'</title>
        <meta name="theme-color" content="#03adfc" />   
        <meta httpEquiv="Cache-Control" content="private" />
        <meta httpEquiv="Expires" content="86400000" />
        <meta httpEquiv="Cache-Control" content="max-age=86400000" /> 
        <meta name="description" content="Chickasaw Flash Cards | Chikashsha aashoppala' chalhka'. Get started by visiting a Chickasaw Flashcard section. Flash cards are an excellent way of learning. Chickasaw Rosetta Stone Lesson Vocabulary Support for each lesson." />  
      </head>  
      
      <body className={inter.className}>
              {/* Google Tag Manager (noscript) */}
        <noscript
        dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WC8K8NM" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
        />
        {/* End Google Tag Manager (noscript) */}
        
        <Header/>
       
        {children}
        <Footer/>
      </body>
    </html>
  )
}
