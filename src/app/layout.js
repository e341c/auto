import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/header";

export const metadata = {
    title: "Gold Auto Service",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-bs-theme="dark">
            <body>
                <Header />
                <div className="">{children}</div>
            </body>
        </html>
    );
}
