import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sort: {
    marginRight: "3rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  },
}));

const SORT_BY = [
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

function Sort() {
  const classes = useStyles();

  const [sort, setSort] = useState("Featured");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const sortChangeHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
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
              {SORT_BY.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default Sort;
