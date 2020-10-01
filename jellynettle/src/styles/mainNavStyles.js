import { makeStyles } from '@material-ui/core/styles';

const mainNavStyles = makeStyles((theme) => ({
    bar: {
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        flexGrow: 1,
    },
    hamburger : {
        paddingBottom: 1,
        paddingLeft: 15,
        fontSize: 30,
        '&:hover': {
            color: '#73E79E',
            cursor: 'pointer',
        },
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
        // marginLeft: 10,
        flexGrow: 1,
    },
    account: {
        color: 'white',
        fontSize: 30,
        justifyContent: 'flex-end',
        marginLeft: 10,
        '&:hover': {
            color: '#73E79E',
            cursor: 'pointer',
        },
    },
    settings: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10,
        justifyContent: 'flex-end',
        '&:hover': {
            color: '#73E79E',
            cursor: 'pointer',
        },
    },
    messages: {
        // flexGrow: 1,
        color: 'white',
        fontSize: 30,
        // marginLeft: 20,
        justifyContent: 'flex-end',
        '&:hover': {
            color: '#73E79E',
            cursor: 'pointer',
        },
    },
    notifications: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10,
        // marginTop: 3,
        // paddingRight: 5,
        justifyContent: 'flex-end',
        '&:hover': {
            color: '#73E79E',
            cursor: 'pointer',
        },
    },
    logout: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10,
        marginRight: 30,
        justifyContent: 'flex-end',
        '&:hover': {
            color: '#73E79E',
            cursor: 'pointer',
        },
    },
    search: {
        // display: 'flex',
        // flexDirection: 'column',
        color: 'white',
        fontSize: 30,
        marginRight: 30,
        marginTop: 15,
        // flexGrow: 1,
        // justifyContent: 'flex-end',
        '&:hover': {
            color: '#73E79E',
            cursor: 'pointer',
        },
    }
  }));

export default mainNavStyles;
