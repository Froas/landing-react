import  "./assets/App.css"
import { useEffect } from "react";
export const ErrorPage = () => {
    useEffect(() => {
        document.title = "Ma'lumot topilmadi";
    }, []);
    return (
        <div className="Error">
            Ma'lumot topilmadi 
        </div>
    )
}
