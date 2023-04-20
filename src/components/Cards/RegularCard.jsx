import React from 'react';

import { useEffect, useState } from "react";

import {
    withStyles, Card, CardContent, CardHeader, Button
} from 'material-ui';

import PropTypes from 'prop-types';


import { regularCardStyle } from 'variables/styles';

const url = 'http://localhost:8000/dailymonitor/apis';

const fetchData = async () => {
    const response = await fetch(url);
    console.log(response);
}
// console.log("fetching data: "+fetchData);

class RegularCard extends React.Component{
    render(){
        const { classes, headerColor, plainCard, cardTitle, cardSubtitle, content } = this.props;
        const onClickHandler = ()=> {
            console.log("getting response")
            // fetchData();
           console.log("fetching data: "+fetchData())
        }
        // console.log("onClickHandler response: "+onClickHandler);

        
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
                          <Button color="white" onClick={
                            // (event) => console.log("Run all button clicked")
                            // alert("Welcome to our ATT Application!")
                            onClickHandler
                            // console.log(onClickHandler)
                            
                            } >Run All</Button>
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
