import React from 'react';

import { useEffect, useState } from "react";

import {
    withStyles, Card, CardContent, CardHeader, Button, MenuItem, Select, InputLabel
} from 'material-ui';

import PropTypes from 'prop-types';


import { regularCardStyle } from 'variables/styles';
import { Label } from 'material-ui-icons';

const url = 'http://localhost:8000/dailymonitor/apis';

const fetchData = async () => {
    // const response = await fetch(url);
    // console.log(response);
    // console.log(response.json());
    // return response;


    
//return obj;
}

function processResult(result){
    //console.log(result);
    let dataArray = result.body["data"];
    
    dataArray.forEach((value) => {
        console.log(value);
    });
}

class RegularCard extends React.Component{
    render(){
        const { classes, headerColor, plainCard, cardTitle, cardSubtitle, content } = this.props;
        const onClickHandler = async ()=> {
            await fetch(url)
            .then(r =>  r.json().then(data => ({status: r.status, body: data})))
            .then(obj => processResult(obj));
        }
     
        // const [server, setServer] = React.useState('');
        // const handleChange = async (event) => {
        //     setServer(event.target.value);
        //   };

        
        
        return (
            <Card className={classes.card + (plainCard ? " " + classes.cardPlain:"")}>
                <CardHeader
                   
                    classes={{
                        root: classes.cardHeader + " " + classes[headerColor+"CardHeader"] + (plainCard ? " " + classes.cardPlainHeader:""),
                      
                         title: classes.cardTitle,
                        subheader: classes.cardSubtitle,
                        
                    }}
                    title={cardTitle}
                    subheader={cardSubtitle}

                    action={
                        <div>
                            <InputLabel style={{
                               marginRight : '2em',
                               color: "#ffffff"
                            }}>Base URL</InputLabel>
                            <Select 
                            style = {{
                                marginRight : '2em'
                                
                             }}
                            
                             value={"server"}  label="Server">
                                <MenuItem value={"dev"}
                                onClick={ console.log("dev base url selected") }
                                >
                                http://evaaidev.enginecal.com/
                                </MenuItem>
                                <MenuItem value={"prod"}>https://evaai.enginecal.com/</MenuItem>
                                <MenuItem value={"test"}>Test</MenuItem>
                            </Select>
                           
                            <Button  style={{
                                color: "white"
                            }} onClick={
                            onClickHandler 
                            } >Run All</Button>
                           
                        
                        </div>
                        
                      }   
                    
                    
                    
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
