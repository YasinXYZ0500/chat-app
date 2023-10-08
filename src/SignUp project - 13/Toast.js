import { toast } from 'react-toastify';

export const notify = (text, type) => {
    if (type === "success") {
        toast.success(' You successfully signin!');
    } else {
        toast.error("Invalid data!")
    }
};
