import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer position="top-right" />
        </>
    );
}

export default MyApp;
