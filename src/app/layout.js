import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Volunteer Wave',
  description: 'Home',
}

const  RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar></Navbar> */}
        

        {children}
        {/* <Footer></Footer> */}



      </body>
    </html>
  )
}

export default RootLayout;
