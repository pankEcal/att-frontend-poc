import React from 'react';
import {
    Grid, IconButton
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid
} from 'components';
import { Button } from 'material-ui';
import { Text } from 'material-ui';


import CustomButton from "../../components/CustomButtons/Button";
import { Link } from 'react-router-dom';
import { CenterFocusStrong, FormatAlignCenter } from 'material-ui-icons';



class DailyMonitoringList extends React.Component{
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        
                        cardTitle="EVA AI DEVELOPMENT"
                        
                        content={
                            <Table
                                
                                tableHeaderColor="primary"
                                tableHead={ ['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ "http://evaaidev.enginecal.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200  ] ,
                                    [ "http://evaaidev.enginecal.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , "Server is Up" ] ,
                                    [ "http://evaaidev.enginecal.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , "Server is Up" ] ,
                                    [ "http://evaaidev.enginecal.com/core", <CustomButton  color="danger" children="Run Test"/> , "Pass" , 200 , "test passed" ] ,
                                    // [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] ,
                                    // [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="EVA AI PRODUCTION"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "https://evaai.enginecal.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "https://evaai.enginecal.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evaai.enginecal.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evaai.enginecal.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    // [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] ,
                                    // [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="EOL DEVELOPMENT"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "http://tvseoldev.enginecal.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "http://tvseoldev.enginecal.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvseoldev.enginecal.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvseoldev.enginecal.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="EOL PRODUCTION"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "https://evaeol.tvsmotor.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "https://evaeol.tvsmotor.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evaeol.tvsmotor.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evaeol.tvsmotor.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="CTR DEVELOPMENT"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "http://evactr.enginecal.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "http://evactr.enginecal.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://evactr.enginecal.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://evactr.enginecal.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="CTR TVS DEVELOPMENT"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "http://tvsctrdev.enginecal.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "http://tvsctrdev.enginecal.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvsctrdev.enginecal.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvsctrdev.enginecal.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="RIDOSCOPE DEVELOPMENT"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "http://tvsrdsdev.enginecal.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "http://tvsrdsdev.enginecal.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvsrdsdev.enginecal.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvsrdsdev.enginecal.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="RIDOSCOPE PRODUCTION"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "https://evards.tvsmotor.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "https://evards.tvsmotor.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evards.tvsmotor.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evards.tvsmotor.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="INTELLIRIDE DEVELOPMENT"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "http://tvsrdsdev.enginecal.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "http://tvsrdsdev.enginecal.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvsrdsdev.enginecal.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "http://tvsrdsdev.enginecal.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="INTELLIRIDE PRODUCTION"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Log']}
                                tableData={[
                                    [ "https://evards.tvsmotor.com/#/pages/login" ,  <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/>  ] ,
                                    [ "https://evards.tvsmotor.com/#/dashboard", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evards.tvsmotor.com/event", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                    [ "https://evards.tvsmotor.com/core", <CustomButton  color="red" children="Run Test"/> , "Pass" , 200 , <CustomButton  color="red" children="Log"/> ] ,
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                {/* <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        plainCard
                        cardTitle="Table on Plain Background"
                        cardSubtitle="Here is a subtitle for this table"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['ID','Name','Country','City','Salary']}
                                tableData={[
                                    [ "1" , "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
                                    [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
                                    [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
                                    [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
                                    [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
                                    [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
                                ]}
                            />
                        }
                    />
                </ItemGrid> */}
            </Grid>
        );
    }
}

export default DailyMonitoringList;
