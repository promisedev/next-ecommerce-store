import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olafy',
  description: 'Ecommerce store for fashion brands',
}

 const RootLayout =({ children }) =>{
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
export default  RootLayout