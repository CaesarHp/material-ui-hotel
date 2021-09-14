import React from "react";

import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4rem 5rem",
    color: "white",
    backgroundColor: theme.palette.grey[900],
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  body: {
    fontWeight: 300,
  },
  aboutContainer: {
    width: "80%",
  },
  socialIconContainer: {
    marginTop: "2rem",
  },
  iconContainer: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  contactInfo: {
    fontWeight: 300,
    marginLeft: theme.spacing(2),
  },
  input: {
    borderRadius: 0,
    border: "none",
    padding: "1rem 3rem 1rem 1rem",
    outline: "none",
    marginBottom: theme.spacing(3),
  },
  btn: {
    borderRadius: 0,
  },
  copyright: {
    marginTop: "4rem",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item className={classes.aboutContainer}>
                <Typography
                  variant="h6"
                  component="h1"
                  className={classes.title}
                >
                  SOHO Hotel
                </Typography>
                <Typography variant="body2" className={classes.body}>
                  Bringing people together is what we’ve done since opening our
                  first SOHO Hotel in 1950. Now we’re deeply rooted in over 400
                  communities across the globe. We are proud to act as a point
                  of connection for millions of travelers, many just like you.
                </Typography>
                <div className={classes.socialIconContainer}>
                  <FacebookIcon
                    fontSize="medium"
                    style={{ marginRight: 20, cursor: "pointer" }}
                  />
                  <InstagramIcon
                    fontSize="medium"
                    style={{ marginRight: 20, cursor: "pointer" }}
                  />
                  <TwitterIcon
                    fontSize="medium"
                    style={{ marginRight: 20, cursor: "pointer" }}
                  />
                  <YouTubeIcon
                    fontSize="medium"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  Contact
                </Typography>
                <div className={classes.iconContainer}>
                  <RoomIcon />
                  <Typography variant="body2" className={classes.contactInfo}>
                    2345 Yonge St. Toronto ON
                  </Typography>
                </div>

                <div className={classes.iconContainer}>
                  <PhoneIcon />
                  <Typography variant="body2" className={classes.contactInfo}>
                    647-123-4567
                  </Typography>
                </div>

                <div className={classes.iconContainer}>
                  <EmailIcon />
                  <Typography variant="body2" className={classes.contactInfo}>
                    info@sohohotel.ca
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  Subscribition
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className={classes.input}
                  />
                </form>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  disableElevation
                  className={classes.btn}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.copyright}>
            <Typography variant="body2">
              © 2021 Soho Hotel. All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
