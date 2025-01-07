import type { Metadata } from "next";
import { Fira_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const firaMono = Fira_Mono({
	variable: "--font-fira-mono",
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RAPI",
	description: "Restorasi Arsip Indonesia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${firaMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
