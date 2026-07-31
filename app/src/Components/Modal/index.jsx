import { useRef } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useClickOutside from "../../hooks/useClickOutside";

const Modal = ({ showModal, onClose, children }) => {
    const contentRef = useRef(null);
    useClickOutside(contentRef, onClose, showModal);

    if (!showModal) {
        return null;
    }

    return (
        <div className="Modal">
            <div className="ModalContent" ref={contentRef}>
                <FontAwesomeIcon
                    icon={faX}
                    className="ModalCloseIcon"
                    onClick={onClose}
                />
                {children}
            </div>
        </div>
    );
};

export default Modal;
