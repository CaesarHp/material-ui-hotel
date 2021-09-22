import React from "react";
import { useSelector } from "react-redux";

import Slider from "react-slick";

import CardUi from "../ui/CardUi";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem 0",
  },
  titleContainer: {
    textAlign: "center",
    width: "50%",
    marginBottom: theme.spacing(5),
  },
  title: {
    color: theme.palette.grey[200],
    marginBottom: theme.spacing(3),
    fontFamily: "Cormorant Garamond",
    fontWeight: 500,
  },
  body: {
    color: theme.palette.grey[300],
    fontWeight: 300,
  },
  cardContainer: {
    width: "80%",
  },
  arrowNext: {
    color: "white",
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    right: "-5%",
    zIndex: 1600,
  },
  arrowPrev: {
    color: "white",
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    left: "-5%",
    zIndex: 1600,
  },
}));

export default function HomeCard() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.roomsInfo);

  const NextArrow = ({ onClick }) => {
    return (
      <div className={classes.arrowNext} onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={classes.arrowPrev} onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography variant="h3" component="h2" className={classes.title}>
            Our Rooms
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Discover contemporary accommodations fused with old-world European
            charm at SOHO Hotel. From urban sanctuaries in Vienna and Berlin to
            exotic resorts in Spain and Portugal, experience some of the most
            exclusive destinations across Europe.
          </Typography>
        </div>
        <div className={classes.cardContainer}>
          <Slider {...settings}>
            {cardInfo.map((item, index) => (
              <CardUi
                key={index}
                name={item.name}
                number={item.number}
                size={item.size}
                view={item.view}
                price={item.price}
                img={item.img}
                link={item.link}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
