import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer'

export const metadata = {
  title: 'Din Mægler',
  description: 'Find din drømmebolig hos Din Mægler.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className="bg-gray-50 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
