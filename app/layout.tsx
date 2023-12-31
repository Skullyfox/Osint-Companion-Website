import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Osint Companion',
  description: 'Osint Companion | Opensource Osint Tool',
  openGraph : {
    title: 'Osint Companion',
    description: 'Osint Companion | Opensource Osint Tool',
    images: ['/Screenshot1.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "relative font-sans bg-zinc-950 text-indigo-400 overflow-x-hidden"}>
        <nav className='absolute top-0 left-0 h-[100px] w-screen flex items-center justify-between px-10'>
          <div className='flex items-center gap-2'>
            <Image src='/Logo.png' alt='Osint Companion Logo' width={80} height={80}></Image>
            <p className='font-bold'>OSINT COMPANION</p>
          </div>
          <ul className='flex gap-5 text-indigo-50 text-lg items-center'>
            <li>
              <Link href='/' className='hover:text-indigo-400'>
                HOME
              </Link>
            </li>
            <li>              
              <a href='https://github.com/Skullyfox/Osint-Companion/releases' target='blank_' className='hover:text-indigo-400'>
                DOWNLOAD
              </a>
            </li>
            <li>
              <a target='blank' href='https://discord.gg/DG9UV76ByN'>
                <FontAwesomeIcon icon={faDiscord} className='h-[20px] hover:text-indigo-400 hover:scale-125'/>
              </a>
            </li>
            <li>
              <a target='blank' href='https://github.com/Skullyfox/Osint-Companion'>
                <FontAwesomeIcon icon={faGithub} className='h-[20px] hover:text-indigo-400 hover:scale-125'/>
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
