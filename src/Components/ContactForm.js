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
    color: theme.palette.grey[900],
  },
  contactInfo: {
    fontWeight: 300,
    marginLeft: theme.spacing(2),
  },
  socialIconContainer: {
    marginLeft: theme.spacing(-0.4),
    marginTop: theme.spacing(4),
    color: theme.palette.grey[900],
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
                <Typography variant="body2" className={classes.body}>
                  Contact us whenever you need help and we will be here 24/7.
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
                <Typography variant="body2" className={classes.body}>
                  Don't foget to subscribe us and check the latest news.
                </Typography>
                <SocialMedia
                  socialIconContainer={classes.socialIconContainer}
                  iconSize="large"
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
