import React from "react";

import { Typography } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function ContactInfo({ iconContainer, contactInfo }) {
  return (
    <div>
      <div className={iconContainer}>
        <RoomIcon />
        <Typography variant="body2" className={contactInfo}>
          2345 Yonge St. Toronto ON
        </Typography>
      </div>

      <div className={iconContainer}>
        <PhoneIcon />
        <Typography variant="body2" className={contactInfo}>
          647-123-4567
        </Typography>
      </div>

      <div className={iconContainer}>
        <EmailIcon />
        <Typography variant="body2" className={contactInfo}>
          info@sohohotel.ca
        </Typography>
      </div>
    </div>
  );
}

export default ContactInfo;
