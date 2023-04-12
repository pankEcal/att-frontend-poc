import React from 'react';
import { withStyles } from 'material-ui';

import RegularCard from 'components/Cards/RegularCard';

import { Button } from 'components';

import { Table } from 'components';

const style = {
    typo: {
        paddingLeft: '25%',
        marginBottom: '40px',
        position: 'relative',
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: '10px',
        color: '#19191a',
        display: 'block',
        fontWeight: '400',
        fontSize: '13px',
        lineHeight: '13px',
        left: '0',
        marginLeft: '20px',
        position: 'absolute',
        width: '260px',
    },
    file_upload: {
        paddingLeft: '50%',
        marginBottom: '40px',
        position: 'relative',
    }
}

class LoadTestingPage extends React.Component {
    render() {
        
        return (
            <RegularCard

                cardTitle={"File Upload API"}

                // cardSubtitle={"Created using Roboto Font Family"}
                content={


                    <div className={``} >
                        <div className={`inputContainer`} >
                            {/* Instead of button we are using input  */}
                            {/* <Button>Side</Button> */}
                            <h4>Choose the File to upload</h4>
                            <input type="file" id="myFile" />
                            <input type="submit" value="submit" className='submitBtn' />
                            Count
                            <Button color="danger">0</Button>
                            Interval
                            <Button color="danger">5 sec</Button>
                        </div>
                        <br></br>
                        <Button color="danger" fullWidth>Run Test</Button>
                        <br></br>

                        <div>
                            <h3 align="center">Report</h3>
                            <Table
                                
                                tableHeaderColor="primary"
                                tableHead={ ['S.No','Timestamp','Status Code','Progress Status']}
                                tableData={[
                                    [ "1" ,  "325356355" , "Pass" , 200 ] ,
                                    [ "2" ,  "242435345" , "Pass" , 200 ] ,
                                    [ "3" ,  "232436463" , "Pass" , 200 ] ,
                                    [ "4" ,  "674563454" , "Pass" , 200 ] ,
                                ]}
                            />  
                        </div>
                    </ div>
                }
            />
        );
    }
}

export default withStyles(style)(LoadTestingPage);
