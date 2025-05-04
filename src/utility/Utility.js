import { Bounce, toast } from "react-toastify";

const getStoredData = () => {
    const StoredDataSTR = localStorage.getItem("appointment");
    if (StoredDataSTR) {
        const getStoredData = JSON.parse(StoredDataSTR);
        return getStoredData;
    } else {
        return [];
    }
}

const addToDB = (id) => {
    const StoredData = getStoredData();
    if (StoredData.includes(id)) {
        toast.warn('Already appointed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    } else {
        StoredData.push(id);
        const dataSTR = JSON.stringify(StoredData);
        localStorage.setItem("appointment", dataSTR);
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}


export { getStoredData, addToDB };