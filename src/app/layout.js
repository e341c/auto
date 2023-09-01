import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/header";
import Head from "next/head";


export const metadata = {
    title: "Gold Auto Service",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-bs-theme="dark">
            <head>
                <meta name="google-site-verification" content="Jlf-KXukVHwC2wEQfXvFD3Ykwsu0buUIUTpfHV_0HMM" />
            </head>
            <body>
                <Header />
                <div className="">{children}</div>
            </body>
        </html>
    );
}
