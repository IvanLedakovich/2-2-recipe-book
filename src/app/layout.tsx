import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Recipe Book',
	description: 'Project 2-2'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
					rel="stylesheet"
				/>
				<meta name="theme-color" content="#000000" />

				<title>Recipe Book</title>
			</head>
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
