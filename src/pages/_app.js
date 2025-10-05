import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
	return (
		<div className={`${geistSans.variable} ${geistMono.variable} font-sans w-screen`}>
			<SidebarProvider>
				<div className='flex w-full'>
					<AppSidebar />
					<main className='w-full overflow-auto bg-[#f9fafb]'>
						<Component {...pageProps} />
					</main>
				</div>
			</SidebarProvider>
		</div>
	);
}