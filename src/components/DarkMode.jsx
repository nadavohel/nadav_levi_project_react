import { useContext, useEffect } from "react";
import { GeneralContext } from "../App";

export default function DarkMode() {
    const { setDarkMode, darkMode } = useContext(GeneralContext);

    useEffect(() => {
        const exists = localStorage.getItem('darkMode');
        const darkModeString = (darkMode === true ? "true" : "false");
        if (exists != null) {
            const changeToBoolean = (exists === "true" ? true : false)
            setDarkMode(changeToBoolean);
        } else {
            localStorage.setItem('darkMode', darkModeString);
        }
        document.getElementById('myCheck').checked = (exists === "true" ? true : false);
    }, [])
    
    useEffect(() => {
        const darkModeString = (darkMode === true ? "true" : "false");
        localStorage.setItem('darkMode', darkModeString);
    }, [darkMode])
    function darkModeChange() {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <div className="wrapper">
                <input 
                    type="checkbox" 
                    name="checkbox" 
                    className="switch" 
                    id="myCheck" 
                    onClick={darkModeChange} 
                />
            </div>
        </>
    );
}