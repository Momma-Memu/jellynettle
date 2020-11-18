import { makeStyles } from '@material-ui/core/styles';


export const baseNavStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #8058c5 30%, #4393da 70%)',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(200, 180, 255, .5)',
        marginBottom: 80,
        height:  100,
    },
    link: {
        borderBottom: 10,
        borderColor: 'black',
        marginLeft: 10,
        outline: 4,
        outlineColor: 'black',
    },
    linkText: {
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            color: '#73E79E',
            // textDecoration: 'underline',
        },
        fontSize: 20,
    },
    logo: {
        height: 35,
        width: 35,
        backgroundImage: './LogoMakr_9328RJ.png'
    },
    logo2: {
        height: 35,
        width: 35,
        marginRight: 10,
        marginLeft: 20,
        cursor: 'pointer',
        // backgroundImage: './LogoMakr_9328RJ.png'
    }
}));

const loginFieldStyles = makeStyles((theme) => ({
    root: {

    },
    Button:{
        background: 'linear-gradient(45deg, #8058c5 20%, #4393da 110%)',
        color: 'white',

    }
}));

export const loginContainerStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #8058c5 30%, #4393da 70%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(200, 180, 255, .5)',
        color: 'white',
        height: 300,
        width: 400,
        padding: '0 30px',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
    },
    signUp: {
        marginTop: 10,
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
    },
}))

export const signUpContainerStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #8058c5 30%, #4393da 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(200, 180, 255, .5)',
        color: 'white',
        height: 500,
        width: 400,
        // padding: '0 30px',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
    },
    root2: {
        display: 'flex',
        background: 'linear-gradient(45deg, #8058c5 30%, #4393da 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(200, 180, 255, .5)',
        color: 'white',
        height: 500,
        width: 400,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: 30,
    },
    signUp: {
        marginTop: 10,
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
    },
    Button:{
        background: 'linear-gradient(45deg, #8058c5 30%, #4393da 130%)',
        color: 'white',

    },
    outerDiv: {
        // background: 'blue',
        // backgroundImage: '/styles/signup-login.jpg'
    }
}))

export default loginFieldStyles;