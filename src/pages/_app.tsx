import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Header from "../components/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  console.log(poppins.variable);
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
