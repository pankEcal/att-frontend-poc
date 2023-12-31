import React from "react";
import { withStyles, Button } from "material-ui";
import PropTypes from "prop-types";

import { buttonStyle } from "variables/styles";

function RegularButton(props) {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    display,
    disabled,
    ...rest
  } = props;
  return (
    <Button
      {...rest}
      className={
        classes.button +
        (color ? " " + classes[color] : "") +
        (round ? " " + classes.round : "") +
        (fullWidth ? " " + classes.fullWidth : "") +
        (disabled ? " " + classes.disabled : "")
      }
    >
      {children}
    </Button>
  );
}

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "simple",
    "transparent",
    "red",
  ]),
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default withStyles(buttonStyle)(RegularButton);
