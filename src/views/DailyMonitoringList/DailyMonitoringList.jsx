import React from 'react';
import { Grid, Button } from 'material-ui';

import { RegularCard, Table, ItemGrid } from 'components';

import CustomButton from "../../components/CustomButtons/Button";


class DailyMonitoringList extends React.Component{
    render(){

        
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        
                        cardTitle="SYSTEM"
                        
                        content={
                            <Table
                                
                                tableHeaderColor="primary"
                                tableHead={ ['API','Tests','Status','Message']}
                                tableData={[
                                    [ 
                                        "http://evaaidev.enginecal.com/#/pages/login" ,  
                                        // <Button  onClick={
                                        //     (event) => console.log("Run test button clicked")   
                                        //     } >Run Test</Button> , 
                                        <button onClick={
                                            (event) => console.log("Run test button clicked")   
                                            }
                                        
                                        >Run test</button> ,
                                        "Pass" , 
                                        
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://evaaidev.enginecal.com/#/dashboard", 
                                        <button onClick={
                                            (event) => console.log("Run test button clicked")   
                                            }
                                        
                                        >Run test</button> , 
                                        "Pass" , 
                                       
                                        "Server is Up" 
                                    ] ,
                                    [ 
                                        "http://evaaidev.enginecal.com/event", 
                                        <button onClick={
                                            (event) => console.log("Run test button clicked")   
                                            }
                                        
                                        >Run test</button> ,
                                        "Pass" , 
                                     
                                        "Server is Up" ] ,
                                    [ 
                                        "http://evaaidev.enginecal.com/core", 
                                        // <CustomButton children="Run Test"/> , 
                                        <button onClick={
                                            (event) => console.log("Run test button clicked")   
                                            }
                                        
                                        >Run test</button> ,
                                        "Pass" , 
                                      
                                        "test passed" 
                                    ] ,
                                   
                                ]}
                
                            />
                            
                        }
                    />
                </ItemGrid>
                {/* <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="EVA AI PRODUCTION"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "https://evaai.enginecal.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed"  
                                    ] ,
                                    [ 
                                        "https://evaai.enginecal.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evaai.enginecal.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evaai.enginecal.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "http://tvseoldev.enginecal.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed"  
                                    ] ,
                                    [ 
                                        "http://tvseoldev.enginecal.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://tvseoldev.enginecal.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://tvseoldev.enginecal.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "https://evaeol.tvsmotor.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed"  
                                    ] ,
                                    [ 
                                        "https://evaeol.tvsmotor.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evaeol.tvsmotor.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evaeol.tvsmotor.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "http://evactr.enginecal.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed"  
                                    ] ,
                                    [ 
                                        "http://evactr.enginecal.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://evactr.enginecal.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://evactr.enginecal.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "http://tvsctrdev.enginecal.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" ,
                                        200 , 
                                        "Test passed"   
                                    ] ,
                                    [ 
                                        "http://tvsctrdev.enginecal.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed"  
                                    ] ,
                                    [ 
                                        "http://tvsctrdev.enginecal.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                     ] ,
                                    [ 
                                        "http://tvsctrdev.enginecal.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "https://evards.tvsmotor.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evards.tvsmotor.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evards.tvsmotor.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evards.tvsmotor.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed"  
                                    ] ,
                                    [ 
                                        "http://tvsrdsdev.enginecal.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed"  
                                    ] ,
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
                                tableHead={['Api','Tests','Status','Status Code','Message']}
                                tableData={[
                                    [ 
                                        "https://evards.tvsmotor.com/#/pages/login" ,  
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evards.tvsmotor.com/#/dashboard", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evards.tvsmotor.com/event", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
                                    [ 
                                        "https://evards.tvsmotor.com/core", 
                                        <CustomButton  color="red" children="Run Test"/> , 
                                        "Pass" , 
                                        200 , 
                                        "Test passed" 
                                    ] ,
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
