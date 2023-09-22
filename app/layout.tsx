import './globals.scss'
import { Inter } from 'next/font/google'
import Header from './Header';
import Footer from './Footer';
const inter = Inter({ subsets: ['latin'] })
const GTAG = process.env.GTAG;

/*export const metadata = {
  title: 'Ev Website Next 13',
  description: '',
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
                })(window,document,'script','dataLayer','${GTAG}');`,
        }}
        />
        {/* End Google Tag Manager */}
        </> 

        <title>Evelyn D Thomas</title>
        <meta name="theme-color" content="#03adfc" />   
        <meta httpEquiv="Cache-Control" content="private" />
        <meta httpEquiv="Expires" content="86400000" />
        <meta httpEquiv="Cache-Control" content="max-age=86400000" /> 
        <meta name="description" content="Evelyn D Thomas" />  
      </head>  
      
      <body className={inter.className}>
              {/* Google Tag Manager (noscript) */}
        <noscript
        dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTAG}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
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
