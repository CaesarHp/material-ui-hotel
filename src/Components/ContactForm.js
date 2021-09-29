import React from "react";

import FormUi from "../ui/FormUi";

import Grid from "@mui/material/Grid";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";

import ContactInfo from "../ui/ContactInfo";
import SocialMedia from "../ui/SocialMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[800],
  },
  body: {
    marginBottom: theme.spacing(4),
    color: theme.palette.grey[700],
  },
  oneSide: {
    //width: "60%",
  },
  contactDetails: {
    marginBottom: theme.spacing(4),
  },
  iconContainer: {
    display: "flex",
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  contactInfo: {
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[900],
  },
  socialIconContainer: {
    marginLeft: theme.spacing(-0.4),
    color: theme.palette.primary.main,
  },
}));

function ContactForm() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Grid container direction="column" className={classes.oneSide}>
              <Grid item>
                <Typography variant="h5" className={classes.title}>
                  Get In Touch
                </Typography>
                <Typography variant="body2" className={classes.body}>
                  We welcome and value any feedback and questions.
                </Typography>
              </Grid>
              <Grid item>
                <FormUi />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container direction="column" className={classes.oneSide}>
              <Grid item className={classes.contactDetails}>
                <Typography variant="h5" className={classes.title}>
                  Contact Details
                </Typography>

                <ContactInfo
                  iconContainer={classes.iconContainer}
                  contactInfo={classes.contactInfo}
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" className={classes.title}>
                  Social Media
                </Typography>

                <SocialMedia
                  socialIconContainer={classes.socialIconContainer}
                  iconSize="medium"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactForm;
