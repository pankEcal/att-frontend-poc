import React from 'react';
import { Search } from 'material-ui-icons';

import { withStyles } from 'material-ui';

import { CustomInput, IconButton as SearchButton } from 'components';

import { headerLinksStyle } from 'variables/styles';


class HeaderLinks extends React.Component{
    state = {
      open: false,
    };
    handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    handleClose = () => {
      this.setState({ open: false });
    };
    render(){
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div>
                <CustomInput 
                    formControlProps={{
                        className: classes.top + " " + classes.search
                    }}
                    inputProps={{
                        placeholder:"Search",
                        inputProps:{
                            'aria-label': 'Search',
                        }
                    }}/>
                <SearchButton color="white" aria-label="edit" customClass={classes.top + " " + classes.searchButton}>
                    <Search className={classes.searchIcon}/>
                </SearchButton>           
                
            </div>
        );
    }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
