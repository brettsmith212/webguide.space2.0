import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  console.log(poppins.variable);
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
