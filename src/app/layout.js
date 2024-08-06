import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';

import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HeroSection />
        <MainContent />
        {children}
      </body>
    </html>
  );
}
