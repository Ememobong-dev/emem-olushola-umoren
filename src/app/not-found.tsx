// app/not-found.tsx
"use client"
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';
import "./globals.css"; 

export default function NotFound() {
      const { theme } = useTheme();
    
    return (
        <div>
            <Navbar />
            <div className={`landing_bg ${theme}-theme relative`}>
                <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                    <h1 className={`text-5xl font-bold ${theme === "light" ? "text-gray-800" : "text-white"}  mb-4`}>404</h1>
                    <h2 className={`${theme === "light" ? "text-gray-700" : "text-white"} text-2xl font-semibold  mb-6`}>
                        Page Not Found
                    </h2>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-white"}  mb-8 max-w-md`}>
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}