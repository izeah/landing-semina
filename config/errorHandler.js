import { toast } from "react-toastify";

export default function errorHandler(error) {
    if (error) {
        if (typeof message === "string")
            toast.error(error?.response?.data?.msg || error.message);
        return error;
    }
}
