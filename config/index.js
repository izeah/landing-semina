import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import errorHandler from "./errorHandler";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use((response) => {
    if (response.status === 401) {
        toast.warning("Terjadi logout karena session telah berakhir");
        Cookies.remove("token");
        window.location.href = "/";
    }

    return response.data;
}, errorHandler);

export default instance;
