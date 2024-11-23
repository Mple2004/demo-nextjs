import "@/styles/globals.css";
import {Montserrat,Tilt_Neon} from"next/font/google"

const montserrat = Tilt_Neon({
  weight: ["400"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {
  return (<main className={montserrat.className}>
    <Component {...pageProps} />
    </main>);
}
