import React from "react";
import Modal from "../../Components/Modal";
import { SEEN_ANNOUNCEMENT_2_STORAGE_KEY } from "../../constants";
import "./style.css";

const AnnouncementScreen = ({ showModal, setShowModal }) => {
    const handleClose = () => {
        localStorage.setItem(SEEN_ANNOUNCEMENT_2_STORAGE_KEY, "true"); // Store that the user has seen it
        setShowModal(false);
    };

    return (
        <Modal showModal={showModal} onClose={handleClose}>
            <div className="Settings">
                <div>
                    <h3>QuickQ Now in Archive Mode</h3>
                    <h3>It's also been open sourced!</h3>
                    <p>
                        I've loved building and maintaining <b>QuickQ</b>, but I
                        no longer have the time to give it the attention it
                        deserves. So, I've decided to put it in archive mode.
                        You can play any of the one year of daily quizzes in the
                        archive.
                    </p>
                    <p>
                        If you want to help keep QuickQ alive, you can
                        contribute to the project! The code is available on
                        GitHub:{" "}
                        <a href="https://github.com/mheavey18/QuickQ-Trivia">
                            QuickQ-Trivia Github Repo
                        </a>
                        . Feel free to fork the project, make changes, and
                        submit a pull request.
                    </p>
                    <p>
                        You can send me an email if you have questions about the
                        QuickQ.
                    </p>
                    <p>
                        <a href="mailto:QuickQTrivia@gmail.com">
                            QuickQTrivia@gmail.com
                        </a>
                    </p>

                    <p>
                        Thanks for playing and for being part of this community!
                    </p>
                    <p>- Marty</p>
                </div>
                <br />
                <button className="CloseButton" onClick={handleClose}>
                    Got it!
                </button>
            </div>
        </Modal>
    );
};

export default AnnouncementScreen;
