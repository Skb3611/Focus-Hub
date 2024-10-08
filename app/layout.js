import { Baloo_2 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProviderWrapper from "@/components/ProviderWrapper";


const inter = Baloo_2({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Focus Hub",
  description: "Study Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} example`}>
        <ProviderWrapper>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] "></div>
          </div>
          <Navbar />
          <NextTopLoader color="#6366f1" />

          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          {children}
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
