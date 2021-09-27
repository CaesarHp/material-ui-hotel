import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import CardUi from "../ui/CardUi";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 5rem",
  },
  grid: {
    margin: "2rem 0",
  },
  card: {
    marginBottom: "2rem",
  },
  sort: {
    marginRight: "1.8rem",
    marginBottom: "2rem",
  },
}));

const sortBy = [
  {
    value: "Featured",
  },
  {
    value: "Most Popular",
  },
  {
    value: "Price Low to High",
  },
  {
    value: "Price High to Low",
  },
  {
    value: "Product Name A to Z",
  },
  {
    value: "Product Name Z to A",
  },
];

function RoomsCard() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.roomsInfo);

  const [sort, setSort] = useState("Featured");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const sortChangeHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <Container className={classes.root}>
        <Grid container justifyContent={matches ? "center" : "flex-end"}>
          <Grid item xs={3} className={classes.sort}>
            <form>
              <TextField
                id="sort"
                select
                label="Sort By"
                value={sort}
                onChange={sortChangeHandler}
                fullWidth
                variant="standard"
              >
                {sortBy.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </form>
          </Grid>
        </Grid>
        <Grid container className={classes.card}>
          {cardInfo.map((item, index) => (
            <Grid
              item
              key={index}
              sm={12}
              md={6}
              lg={4}
              className={classes.grid}
            >
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
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Stack spacing={4}>
              <Pagination count={5} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RoomsCard;
