import React from "react";
import PropTypes from "prop-types";
import * as MaterialIcons from "@material-ui/icons";
import { IconButton, InputAdornment, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    margin: "auto",
    padding: "auto"
  }
});

const Icon = props => {
  const { classes, iconName, onIconClick, position, disabled, ...othersProps } = props;
  const Icon =
    iconName && MaterialIcons[iconName] ? MaterialIcons[iconName] : null;
  return (
    <React.Fragment>
      {Icon && (
        <InputAdornment position={position || "end"} className={classes.root}>
          <IconButton onClick={onIconClick} disabled={disabled} style={disabled ? {color:'rgb(109, 105, 105)'} : {}}>
            <Icon {...othersProps} />
          </IconButton>
        </InputAdornment>
      )}
    </React.Fragment>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  onIconClick: PropTypes.func,
  position: PropTypes.string
};

export default withStyles(styles)(Icon);
