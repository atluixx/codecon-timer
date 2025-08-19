import { ThemeProvider } from 'next-themes';
import type React from 'react';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex justify-center items-center w-screen h-screen transition-all duration-300 opacity-100">
				<ThemeProvider defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
