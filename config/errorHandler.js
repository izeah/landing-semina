import { toast } from "react-toastify";

export default function errorHandler(error) {
    if (error) {
        toast.error(error.response?.data?.msg || error.message);
        return error;
    }
}
