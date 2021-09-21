import React from "react";

import FormUi from "../ui/FormUi";

import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ContactInfo from "../ui/ContactInfo";
import SocialMedia from "../ui/SocialMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 0",
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
    width: "80%",
    margin: "0 auto",
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

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={6}>
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

          <Grid item xs={12} md={6}>
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
