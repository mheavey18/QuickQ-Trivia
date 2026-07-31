import { useEffect } from "react";

// Calls onClickOutside when a mousedown happens outside of ref's element.
const useClickOutside = (ref, onClickOutside, isActive = true) => {
    useEffect(() => {
        if (!isActive) {
            return;
        }

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside, isActive]);
};

export default useClickOutside;
