import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.grey[900],
  },
  body: {
    color: theme.palette.grey[800],
    fontWeight: 300,
  },
}));

function PolicyAccordion() {
  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="cancellation-prepayment"
        >
          <Typography className={classes.title}>
            Cancellation/Prepayment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            Cancellation and prepayment policies vary according to accommodation
            type. Please enter the dates of your stay and check the conditions
            of your required room.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="cancellation-prepayment"
        >
          <Typography className={classes.title}>
            Refundable Damage Deposit
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            A damage deposit of CAD 100 is required on arrival. This will be
            collected by credit card. You should be reimbursed within 14 days of
            check-out. Your deposit will be refunded in full via credit card,
            subject to an inspection of the property.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="cancellation-prepayment"
        >
          <Typography className={classes.title}>Children and Beds</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            Children of any age are welcome. Children aged 18 years and above
            are considered adults at this property. To see correct prices and
            occupancy information, please add the number of children in your
            group and their ages to your search. Cot and extra bed policies
            There is no capacity for cots at this property. There is no capacity
            for extra beds at this property.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default PolicyAccordion;
