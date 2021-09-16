import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

function SocialMedia({ socialIconContainer, iconSize }) {
  return (
    <div className={socialIconContainer}>
      <FacebookIcon
        fontSize={iconSize}
        style={{ marginRight: 20, cursor: "pointer" }}
      />
      <InstagramIcon
        fontSize={iconSize}
        style={{ marginRight: 20, cursor: "pointer" }}
      />
      <TwitterIcon
        fontSize={iconSize}
        style={{ marginRight: 20, cursor: "pointer" }}
      />
      <YouTubeIcon fontSize={iconSize} style={{ cursor: "pointer" }} />
    </div>
  );
}

export default SocialMedia;
