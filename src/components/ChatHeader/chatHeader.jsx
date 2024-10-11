import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  setCurrentEmail,
  setCurrentUsername,
} from "../../redux/slices/contactsSlice";
import "./chatHeader.css";

export default function ChatHeader() {
  const dispatch = useDispatch();
  const currentUsername = useSelector(
    (state) => state.contacts.currentUsername
  );
  const currentProfilePic = useSelector(
    (state) => state.contacts.currentProfilePic
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleArrowClick = () => {
    dispatch(setCurrentEmail(null));
    dispatch(setCurrentUsername(null));
  };

  return (
    <div className="chat-header">
      {isMobile && (
        <ArrowForwardIosIcon
          sx={{ color: "rgba(255,255,255,0.4)" }}
          onClick={handleArrowClick}
        />
      )}
      <img
        src={currentProfilePic || "you.webp"}
        alt="profile pic"
        className="current-pic"
      />
      <div className="current-username">{currentUsername}</div>
    </div>
  );
}
