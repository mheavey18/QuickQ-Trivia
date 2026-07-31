import React from "react";
import Modal from "../../Components/Modal";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faXTwitter,
    faDiscord,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SettingsScreen = ({ showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);

    return (
        <Modal showModal={showModal} onClose={handleClose}>
            <div className="Settings">
                <div>
                    <h3>How to Play QuickQ</h3>
                    <b>QuickQ</b> is a <b>90 second</b> daily trivia quiz. Once
                    you start the game, your timer starts counting down. During
                    the game, a question will begin to appear one character at a
                    time. If you think you know the answer to the question, hit
                    the <b>"Buzz"</b> button and type in your answer. Your timer
                    is stopped while you are typing your answer, but you only
                    have 15 seconds to submit it. You can also skip any question
                    by pressing the <b>"Skip"</b> button.
                    <p>
                        Try <b>Multiple Choice</b> mode to get started or
                        challenge yourself with <b>Free Response</b> mode!
                    </p>
                    <p>
                        Each quiz has one question from each of the{" "}
                        <b>8 categories</b>: Current Events 🗞️, World History
                        🏺, Sports 🏆, US History 🇺🇸, Entertainment 🎬,
                        Geography 🌏, Science 🔬, and Arts & Literature 🎭.
                    </p>
                    <p>
                        See how many questions you can answer correctly in 90
                        seconds! Start a <b>streak</b> to see how many days in a
                        row you can answer at least one question correctly.
                    </p>
                    <p>
                        All data used for statistics is stored locally in your
                        browser, so if you switch devices or clear your
                        browser's storage you will lose your stats.
                    </p>
                </div>
                <h3>Community</h3>
                <p>
                    ✉️ <b>Email me:</b>{" "}
                    <a href="mailto:QuickQTrivia@gmail.com">
                        QuickQTrivia@gmail.com
                    </a>
                </p>
                <br />
                <div className="CommunityFooter">
                    <div className="JoinTheCommunity">Join the Community:</div>
                    <div className="Logos">
                        <a
                            href="https://www.instagram.com/quickqtrivia/?next=%2F&hl=en"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="SocialLogo"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61562298087777"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="SocialLogo"
                            />
                        </a>
                        <a
                            href="https://twitter.com/QuickQTrivia"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                className="SocialLogo"
                            />
                        </a>
                        <a href="https://discord.gg/Jw5r8eMjFw" target="_blank">
                            <FontAwesomeIcon
                                icon={faDiscord}
                                className="SocialLogo"
                            />
                        </a>
                    </div>
                </div>
                <br />
                <button className="CloseButton" onClick={handleClose}>
                    Got it!
                </button>
            </div>
        </Modal>
    );
};

export default SettingsScreen;
