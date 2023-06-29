import './globals.css'
import {Navbar, Footer} from '@/component'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best prices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
