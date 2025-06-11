import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"), // Or your new deployment URL

	title: 'Esai Keshav',
	authors: {
		name: "Esai Keshav",
	},

	description:
		"Evolving Code, Self-Taught Spirit: Web Development Journey from India.",
	openGraph: {
		title: "Esai Keshav",
		description:
			"Evolving Code, Self-Taught Spirit: Web Development Journey from India.",
		url: "http://localhost:3000", // Or your new deployment URL
		siteName: "Esai Keshav",
		images: "/newPortfolio.png",
		type: "website",
	},

};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="shortcut icon" href="/favicon.ico" />
			<body className={space_Grotesk.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
