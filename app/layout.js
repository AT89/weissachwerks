import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Weissach Werks | High-Performance Web & AI Solutions',
  description: 'We build SEO-driven, mobile-first web systems integrated with custom CRM databases and autonomous AI agents.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
