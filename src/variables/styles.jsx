/*!

 =========================================================
 * Material Dashboard React - v1.0.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
    WebkitTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    MozTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    OTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    MsTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const container = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
};

const boxShadow = {
    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};

const card = {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    margin: '25px 0',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    borderRadius: '3px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
};

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
    lineHeight: '1.5em',
};

const primaryColor = '#9c27b0';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const grayColor = '#999999';

const primaryBoxShadow = {
    boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)'
};
const infoBoxShadow = {
    boxShadow: '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow = {
    boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow = {
    boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow =  {
    boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};

const orangeCardHeader = {
    background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
    ...warningBoxShadow,
};
const greenCardHeader = {
    background: 'linear-gradient(60deg, #66bb6a, #43a047)',
    ...successBoxShadow,
};
const redCardHeader = {
    background: 'linear-gradient(60deg, #ef5350, #e53935)',
    ...dangerBoxShadow,
};
const blueCardHeader = {
    background: 'linear-gradient(60deg, #26c6da, #00acc1)',
    ...infoBoxShadow,
};
const purpleCardHeader = {
    background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
    ...primaryBoxShadow,
};

const cardHeader = {
    margin: '-20px 15px 0',
    borderRadius: '3px',
    padding: '15px',
};

const defaultBoxShadow = {
    border: '0',
    borderRadius: '3px',
    boxShadow: '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    padding: '10px 0',
    WebkitTransition: 'all 150ms ease 0s',
    MozTransition: 'all 150ms ease 0s',
    OTransition: 'all 150ms ease 0s',
    MsTransition: 'all 150ms ease 0s',
    transition: 'all 150ms ease 0s',
}

// ##############################
// // // App styles
// #############################

const appStyle = theme => ({
    wrapper: {
        position: 'relative',
        top: '0',
        height: '100vh',
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        overflow: 'auto',
        position: 'relative',
        float: 'right',
        ...transition,
        maxHeight: '100%',
        width: '100%',
    },
    content: {
        marginTop: '70px',
        padding: '30px 15px',
        minHeight: 'calc(100% - 123px)',
    },
    container,
    map:{
        marginTop: '70px',
    }
});

// ##############################
// // // Sidebar styles
// #############################

const sidebarStyle = theme => ({
    drawerPaper: {
        border: 'none',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        zIndex: '1',
        // overflow: 'auto',
        ...boxShadow,
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'fixed',
            height: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            ...boxShadow,
            position: 'fixed',
            display: 'block',
            top: '0',
            height: '100vh',
            right: '0',
            left: 'auto',
            zIndex: '1032',
            visibility: 'visible',
            overflowY: 'visible',
            borderTop: 'none',
            textAlign: 'left',
            paddingRight: '0px',
            paddingLeft: '0',
            WebkitTransform: `translate3d(${drawerWidth}px, 0, 0)`,
            MozTransform: `translate3d(${drawerWidth}px, 0, 0)`,
            OTransform: `translate3d(${drawerWidth}px, 0, 0)`,
            MsTransform: `translate3d(${drawerWidth}px, 0, 0)`,
            transform: `translate3d(${drawerWidth}px, 0, 0)`,
            ...transition,
        },
    },
    logo: {
        position: 'relative',
        padding: '15px 15px',
        zIndex: '4',
        '&:after':{
            content: '""',
            position: 'absolute',
            bottom: '0',

            height: '1px',
            right: '15px',
            width: 'calc(100% - 30px)',
            backgroundColor: 'rgba(180, 180, 180, 0.3)',
        }
    },
    logoLink: {
        ...defaultFont,
        textTransform: 'uppercase',
        padding: '5px 0',
        display: 'block',
        fontSize: '18px',
        textAlign: 'left',
        fontWeight: '400',
        lineHeight: '30px',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        '&,&:hover': {
            color: '#FFFFFF',
        }
    },
    logoImage: {
        width: '300px',
        height: '100px',
        display: 'inline-block',
        maxHeight: '300px',
        marginTop: '30px',
        marginLeft: '40px',
        marginRight: '15px',
    },
    img: {
        width: '150px',
        top: '16px',
        position: 'center',
        verticalAlign: 'middle',
        border: '0',
    },
    background: {
        position: 'absolute',
        zIndex: '1',
        height: '100%',
        width: '100%',
        display: 'block',
        top: '0',
        left: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        '&:after': {
            position: 'absolute',
            zIndex: '3',
            width: '100%',
            height: '100%',
            content: '""',
            display: 'block',
            background: '#000',
            opacity: '.8',
        }
    },
    list: {
        marginTop: '20px',
        paddingLeft: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '0',
        listStyle: 'none',

    },
    item: {
        position: 'relative',
        display: 'block',
        textDecoration: 'none',
    },
    itemLink: {
        WebkitTransition: 'all 300ms linear',
        MozTransition: 'all 300ms linear',
        OTransition: 'all 300ms linear',
        MsTransition: 'all 300ms linear',
        transition: 'all 300ms linear',
        margin: '10px 15px 0',
        borderRadius: '3px',
        position: 'relative',
        display: 'block',
        padding: '10px 15px',
        backgroundColor: 'transparent',
        ...defaultFont,
    },
    itemIcon: {
        width: '24px',
        height: '30px',
        float: 'left',
        marginRight: '15px',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    itemText: {
        ...defaultFont,
        margin: '0',
        lineHeight: '30px',
        fontSize: '14px',
        color: '#FFFFFF',
    },
    whiteFont: {
        color: "#FFFFFF"
    },
    purple: {
        backgroundColor: primaryColor,
        ...primaryBoxShadow,
        '&:hover': {
            backgroundColor: primaryColor,
            ...primaryBoxShadow,
        }
    },
    blue: {
        backgroundColor: infoColor,
        boxShadow: '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
        '&:hover': {
            backgroundColor: infoColor,
            boxShadow: '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
        }
    },
    green: {
        backgroundColor: successColor,
        boxShadow: '0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
        '&:hover': {
            backgroundColor: successColor,
            boxShadow: '0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
        }
    },
    orange: {
        backgroundColor: warningColor,
        boxShadow: '0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
        '&:hover': {
            backgroundColor: warningColor,
            boxShadow: '0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
        }
    },
    red: {
        backgroundColor: dangerColor,
        boxShadow: '0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
        '&:hover': {
            backgroundColor: dangerColor,
            boxShadow: '0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
        }
    },
    sidebarWrapper: {
        position: 'relative',
        height: 'calc(100vh - 75px)',
        overflow: 'auto',
        width: '260px',
        zIndex: '4',
    }
});

// ##############################
// // // Header styles
// #############################

const headerStyle = theme => ({
    appBar: {
        top: '-30px',
        [theme.breakpoints.down('md')]:{
            top: '-15px'
        },
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: '0',
        marginBottom: '0',
        position: 'absolute',
        width: '100%',
        paddingTop: '10px',
        zIndex: '1029',
        color: '#555555',
        border: '0',
        borderRadius: '3px',
        padding: '10px 0',
        WebkitTransition: 'all 150ms ease 0s',
        MozTransition: 'all 150ms ease 0s',
        OTransition: 'all 150ms ease 0s',
        MsTransition: 'all 150ms ease 0s',
        transition: 'all 150ms ease 0s',
        minHeight: '50px',
        display: 'block',
    },
    container,
    flex:{
        flex: 1,
    },
    title: {
        ...defaultFont,
        lineHeight: '30px',
        fontSize: '18px',
        borderRadius: '3px',
        textTransform: 'none',
        color: 'inherit',
        top: '10px',
        '&:hover,&:focus': {
            background: 'transparent'
        }
    },
    appResponsive: {
        top: '8px'
    },
    primary: {
        backgroundColor: primaryColor,
        color: '#FFFFFF',
        ...defaultBoxShadow
    },
    info: {
        backgroundColor: infoColor,
        color: '#FFFFFF',
        ...defaultBoxShadow
    },
    success: {
        backgroundColor: successColor,
        color: '#FFFFFF',
        ...defaultBoxShadow
    },
    warning: {
        backgroundColor: warningColor,
        color: '#FFFFFF',
        ...defaultBoxShadow
    },
    danger: {
        backgroundColor: dangerColor,
        color: '#FFFFFF',
        ...defaultBoxShadow
    }
});

// ##############################
// // // HeaderLinks styles
// #############################

const headerLinksStyle = theme => ({
    popperClose: {
      pointerEvents: 'none',
    },
    search: {
        [theme.breakpoints.down('sm')]:{
            margin: '10px 15px',
            float: 'none !important',
            paddingTop: '1px',
            paddingBottom: '1px',
            padding: '10px 15px',
            width: 'auto',
            marginTop: '40px'
        },
    },
    linkText: {
        zIndex: '4',
        ...defaultFont,
        fontSize: '14px',
    },
    buttonLink: {
        top: '-6px',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            marginLeft: '30px',
            width: 'auto',
        },
    },
    searchButton: {
        [theme.breakpoints.down('sm')]: {
            top: '-50px !important',
            marginRight: '22px',
            float: 'right'
        }
    },
    top: {
        top: '-6px',
        zIndex: '4',
    },
    searchIcon:{
        width: '17px',
        zIndex: '4',
    },
    links:{
        width: '20px',
        height: '20px',
        zIndex: '4',
        [theme.breakpoints.down('sm')]:{
            display: 'block',
            width: '30px',
            height: '30px',
            color: '#a9afbb',
            marginRight: '15px',
        },
    },
    
    dropdown: {
        borderRadius: '3px',
        border: '0',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
        top: '100%',
        zIndex: '1000',
        minWidth: '160px',
        padding: '5px 0',
        margin: '2px 0 0',
        fontSize: '14px',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box',
    },
    pooperResponsive: {
        [theme.breakpoints.down('sm')]: {
            zIndex: '1640',
            position: 'static',
            float: 'none',
            width: 'auto',
            marginTop: '0',
            backgroundColor: 'transparent',
            border: '0',
            WebkitBoxShadow: 'none',
            boxShadow: 'none',
            color: 'black'
        }
    },
    dropdownItem: {
        ...defaultFont,
        fontSize: '13px',
        padding: '10px 20px',
        margin: '0 5px',
        borderRadius: '2px',
        WebkitTransition: 'all 150ms linear',
        MozTransition: 'all 150ms linear',
        OTransition: 'all 150ms linear',
        MsTransition: 'all 150ms linear',
        transition: 'all 150ms linear',
        display: 'block',
        clear: 'both',
        fontWeight: '400',
        lineHeight: '1.42857143',
        color: '#333',
        whiteSpace: 'nowrap',
        '&:hover': {
            backgroundColor: primaryColor,
            color: '#FFFFFF',
            ...primaryBoxShadow,
        }
    },
});


// ##############################
// // // Dashboard styles
// #############################

const dashboardStyle = {
    successText: {
        color: successColor,
    },
    upArrowCardCategory: {
        width: 14,
        height: 14,
    },
}

// ##############################
// // // RegularCard styles
// #############################

const regularCardStyle = {
    card,
    cardPlain: {
        background: 'transparent',
        boxShadow: 'none',
    },
    cardHeader: {
        ...cardHeader,
        ...defaultFont,
    },
    cardPlainHeader:{
        marginLeft: 0,
        marginRight: 0,
    },
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
    cardTitle: {
        color: '#FFFFFF',
        marginTop: '0',
        marginBottom: '5px',
        ...defaultFont,
        fontSize: '1.125em',
    },
    cardSubtitle: {
        ...defaultFont,
        marginBottom: '0',
        color: 'rgba(255, 255, 255, 0.62)',
        margin: '0 0 10px',
    },
    cardActions: {
        padding: '14px',
        display: 'block',
        height: 'auto'
    }
};



// ##############################
// // // Button styles
// #############################

const buttonStyle = {
    button: {
        backgroundColor: grayColor,
        color: '#FFFFFF',
        boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        border: 'none',
        borderRadius: '3px',
        position: 'relative',
        padding: '12px 30px',
        margin: '10px 1px',
        fontSize: '12px',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: '0',
        willChange: 'box-shadow, transform',
        transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: grayColor,
            boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
        }
    },
    fullWidth:{
        width: '100%'
    },
    primary: {
        backgroundColor: primaryColor,
        boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
        '&:hover': {
            backgroundColor: primaryColor,
            boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
        }
    },
    info: {
        backgroundColor: infoColor,
        boxShadow: '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
        '&:hover': {
            backgroundColor: infoColor,
            boxShadow: '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
        }
    },
    success: {
        backgroundColor: successColor,
        boxShadow: '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
        '&:hover': {
            backgroundColor: successColor,
            boxShadow: '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
        }
    },
    warning: {
        backgroundColor: warningColor,
        boxShadow: '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
        '&:hover': {
            backgroundColor: warningColor,
            boxShadow: '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
        }
    },
    danger: {
        backgroundColor: dangerColor,
        boxShadow: '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
        '&:hover': {
            backgroundColor: dangerColor,
            boxShadow: '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
        }
    },
    rose: {
        backgroundColor: roseColor,
        boxShadow: '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
        '&:hover': {
            backgroundColor: roseColor,
            boxShadow: '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
        }
    },
    white: {
        '&,&:focus,&:hover': {
            backgroundColor: '#FFFFFF',
            color: grayColor
        }
    },
    simple: {
        '&,&:focus,&:hover':{
            color: '#FFFFFF',
            background: 'transparent',
            boxShadow: 'none',
        }
    },
    transparent: {
        '&,&:focus,&:hover': {
            color: "inherit",
            background: 'transparent',
            boxShadow: 'none',
        }
    },
    round: {
        borderRadius: '30px',
    },
    disabled: {
        opacity: '0.65',
        pointerEvents: 'none'
    }
};

// ##############################
// // // IconButton styles
// #############################

const iconButtonStyle = {
    button: {
        height: '40px',
        minWidth: '40px',
        width: '40px',
        borderRadius: '50%',
        fontSize: '24px',
        margin: 'auto',
        padding: '0',
        boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        overflow: 'hidden',
        position: 'relative',
        lineHeight: 'normal',
        border: 'none',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: '0',
        willChange: 'box-shadow, transform',
        transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'inline-block',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        cursor: 'pointer',
        userSelect: 'none',
        backgroundImage: 'none',
        backgroundColor: grayColor,
        '&:hover': {
            backgroundColor: grayColor,
            boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
        }
    },
    primary: {
        backgroundColor: primaryColor,
        boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
        '&:hover': {
            backgroundColor: primaryColor,
            boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
        }
    },
    info: {
        backgroundColor: infoColor,
        boxShadow: '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
        '&:hover': {
            backgroundColor: infoColor,
            boxShadow: '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
        }
    },
    success: {
        backgroundColor: successColor,
        boxShadow: '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
        '&:hover': {
            backgroundColor: successColor,
            boxShadow: '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
        }
    },
    warning: {
        backgroundColor: warningColor,
        boxShadow: '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
        '&:hover': {
            backgroundColor: warningColor,
            boxShadow: '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
        }
    },
    danger: {
        backgroundColor: dangerColor,
        boxShadow: '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
        '&:hover': {
            backgroundColor: dangerColor,
            boxShadow: '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
        }
    },
    rose: {
        backgroundColor: roseColor,
        boxShadow: '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
        '&:hover': {
            backgroundColor: roseColor,
            boxShadow: '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
        }
    },
    white: {
        '&,&:focus,&:hover': {
            backgroundColor: '#FFFFFF',
            color: grayColor
        }
    },
    simple: {
        color: '#FFFFFF',
        background: 'transparent',
        boxShadow: 'none',
    }
};

// ##############################
// // // Table styles
// #############################

const tableStyle = theme => ({
    warningTableHeader: {
        color: warningColor,
    },
    primaryTableHeader: {
        color: primaryColor,
    },
    dangerTableHeader: {
        color: dangerColor,
    },
    successTableHeader: {
        color: successColor,
    },
    infoTableHeader: {
        color: infoColor,
    },
    roseTableHeader: {
        color: roseColor,
    },
    grayTableHeader: {
        color: grayColor,
    },
    table: {
        marginBottom: '0',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: 'transparent',
        borderSpacing: '0',
        borderCollapse: 'collapse',
    },
    tableHeadCell: {
        color: 'inherit',
        ...defaultFont,
        fontSize: '1em',
    },
    tableCell: {
        ...defaultFont,
        lineHeight: '1.42857143',
        padding: '12px 8px',
        verticalAlign: 'middle',
    },
    tableResponsive: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    }
})

// ##############################
// // // CustomInput styles
// #############################

const customInputStyle = {
    disabled: {
        '&:before': {
            backgroundColor: 'transparent !important',
        }
    },
    underline: {
        '&:before': {
            backgroundColor: '#D2D2D2',
            height: '1px !important',
        }
    },
    inkbar: {
        '&:after': {
            backgroundColor: primaryColor
        }
    },
    inkbarError: {
        '&:after': {
            backgroundColor: dangerColor
        }
    },
    inkbarSuccess: {
        '&:after': {
            backgroundColor: successColor
        }
    },
    labelRoot: {
        ...defaultFont,
        color: '#AAAAAA',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '1.42857',
    },
    labelRootError: {
        color: dangerColor
    },
    labelRootSuccess: {
        color: successColor
    },
    feedback: {
        position: 'absolute',
        top: '18px',
        right: '0',
        zIndex: '2',
        display: 'block',
        width: '24px',
        height: '24px',
        textAlign: 'center',
        pointerEvents: 'none',
    },
    marginTop: {
        marginTop: '16px',
    },
    formControl: {
        paddingBottom: '10px',
        margin: '27px 0 0 0',
        position: 'relative',
    }
};

// ##############################
// // // Typography styles
// #############################

const typographyStyle = {
    defaultFontStyle: {
        ...defaultFont,
        fontSize : '14px',
    },
    defaultHeaderMargins: {
        marginTop: '20px',
        marginBottom: '10px',
    },
    pStyle: {
        margin: '0 0 10px'
    },
    quote: {
        padding: '10px 20px',
        margin: '0 0 20px',
        fontSize: '17.5px',
        borderLeft: '5px solid #eee',
    },
    quoteText: {
        margin: '0 0 10px',
        fontStyle: 'italic'
    },
    quoteAuthor: {
        display: 'block',
        fontSize: '80%',
        lineHeight: '1.42857143',
        color: '#777',
    },
    mutedText: {
        color: '#777',
    },
    primaryText: {
        color: primaryColor,
    },
    infoText: {
        color: infoColor,
    },
    successText: {
        color: successColor,
    },
    warningText: {
        color: warningColor,
    },
    dangerText: {
        color: dangerColor,
    },
    smallText: {
        fontSize: '65%',
        fontWeight: '400',
        lineHeight: '1',
        color: '#777',
    },
    aStyle: {
        textDecoration: 'none',
        backgroundColor: 'transparent',
        '&,&:hover':{
            color: '#FFFFFF',
        }
    }
};

module.exports = {
    dashboardStyle,
    regularCardStyle,
    buttonStyle,
    iconButtonStyle,
    tableStyle,
    customInputStyle,
    typographyStyle,
    headerStyle,
    sidebarStyle,
    appStyle,
    headerLinksStyle,
}
