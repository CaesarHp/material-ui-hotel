import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import hotelCard1 from "../img/hotel-card-1.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    borderRadius: 0,
  },
  media: {
    height: 250,
  },
  btnContainer: {
    padding: "1rem",
  },
  btn: {
    borderRadius: 0,
  },
});

export default function HomeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hotelCard1}
          title="Hotel Room"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Premium Hotel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Discover contemporary accommodations fused with old-world European
            charm at SOHO Hotel.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnContainer}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disableElevation
          className={classes.btn}
        >
          From $200 per stay
        </Button>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
