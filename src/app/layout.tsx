import ReactQueryProvider from "../components/ReactQueryProvider";
import "./globals.css";
import { UserProvider } from "./contexts/UserContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 ">
        <ReactQueryProvider>
          <UserProvider>{children}</UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
