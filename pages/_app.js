import "../tailwindcss/tailwind.css";
import { createContext } from "react";
import ToastContainer from "@/components/ToastContainer";
import { ToastProvider } from "../context/ToastContext";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <ToastProvider>
        <GlobalContext.Provider session={global}>
          <Component {...pageProps} />
          <ToastContainer />
        </GlobalContext.Provider>
      </ToastProvider>
    </>
  );
}

export default MyApp;
