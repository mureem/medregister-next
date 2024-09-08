import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
    title: 'Медрегистр.рф',
    description: 'Это сайт для работы с медицинской регистрацией.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Lora:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="font-sans">
        <Navbar />
        <Sidebar />
        <main>{children}</main>
        </body>
        </html>
    );
}
