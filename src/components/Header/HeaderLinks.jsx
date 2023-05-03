import React, { useState } from "react";
import { Search } from "material-ui-icons";

import { withStyles } from "material-ui";

import { CustomInput, IconButton as SearchButton } from "components";

import { headerLinksStyle } from "variables/styles";

function HeaderLinks(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen({ open: !open });
  };

  const handleClose = () => {
    setOpen({ open: false });
  };

  const { classes } = props;

  return (
    <div>
      <CustomInput
        formControlProps={{
          className: classes.top + " " + classes.search,
        }}
        inputProps={{
          placeholder: "Search",
          inputProps: {
            "aria-label": "Search",
          },
        }}
      />
      <SearchButton
        color="white"
        aria-label="edit"
        customClass={classes.top + " " + classes.searchButton}
      >
        <Search className={classes.searchIcon} />
      </SearchButton>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
