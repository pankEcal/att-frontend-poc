import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, Button
} from 'material-ui';

import PropTypes from 'prop-types';


import { regularCardStyle } from 'variables/styles';

class RegularCard extends React.Component{
    render(){
        const { classes, headerColor, plainCard, cardTitle, cardSubtitle, content } = this.props;
        return (
            <Card className={classes.card + (plainCard ? " " + classes.cardPlain:"")}>
                <CardHeader
                    classes={{
                        root: classes.cardHeader + " " + classes[headerColor+"CardHeader"] + (plainCard ? " " + classes.cardPlainHeader:""),
                        title: classes.cardTitle,
                        subheader: classes.cardSubtitle,
                        
                    }}
                    action={
                        <div>
                          <Button onClick={(event) => console.log("Run all button clicked")} >Run All</Button>
                        </div>
                      }                   

                    title={cardTitle}
                    subheader={cardSubtitle}
                />
                <CardContent>
                    {content}
                </CardContent>
                
            </Card>
        );
    }
}

RegularCard.defaultProps = {
    headerColor: "red",
};

RegularCard.propTypes = {
    plainCard: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    headerColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
    cardTitle: PropTypes.node,
    cardSubtitle: PropTypes.node,
    content: PropTypes.node
    
};

export default withStyles(regularCardStyle)(RegularCard);
