import { useState, useEffect } from "react";
import Loader from "../Loader";

const PreloaderWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => setShowContent(true), 4500);
            setTimeout(() => setLoading(false), 6100);
        };

        if (document.readyState === "complete") {
            handlePageLoad();
        } else {
            window.addEventListener("load", handlePageLoad);
        }

        return () => window.removeEventListener("load", handlePageLoad);
    }, []);

    return (
        <>
            {loading && <Loader />}
            {showContent && children}
        </>
    );
};

export default PreloaderWrapper;