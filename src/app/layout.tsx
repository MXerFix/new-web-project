import './globals.css'
// import '@radix-ui/themes/styles.css';
// import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next'
import { Inter, Maven_Pro, Nunito, Rajdhani, Varela_Round } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['cyrillic', 'latin'] })
const radjdhani500 = Rajdhani({ subsets: ['latin'], weight: '600' })
const valera = Varela_Round({ subsets: ['latin'], weight: '400' })
const maven = Maven_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WEB-PROJECT-STUDIO',
  description: 'Web-project',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='body' className={maven.className + ' ' + nunito.className + ' font-medium'}>
        {/* <Theme accentColor="yellow"> */}
          {children}
        {/* </Theme> */}
        {/* <div id='modal_root'></div> */}
      </body>
    </html>
  )
}
