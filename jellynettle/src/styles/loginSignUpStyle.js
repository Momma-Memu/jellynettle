import { makeStyles } from '@material-ui/core/styles';


export const baseNavStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #A673FF 30%, #4FADFF 70%)',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(200, 180, 255, .5)',
        marginBottom: 80,
        height:  70,
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
        height: 50,
        width: 50,
        backgroundImage: './LogoMakr_9328RJ.png'
    },
    logo2: {
        height: 35,
        width: 35,
        marginRight: 10,
        // backgroundImage: './LogoMakr_9328RJ.png'
    }
}));

const loginFieldStyles = makeStyles((theme) => ({
    root: {

    },
    Button:{
        background: 'linear-gradient(45deg, #A673FF 20%, #4FADFF 110%)',
        color: 'white',

    }
}));

export const loginContainerStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #A673FF 30%, #4FADFF 90%)',
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
        background: 'linear-gradient(45deg, #A673FF 30%, #4FADFF 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(200, 180, 255, .5)',
        color: 'white',
        height: 400,
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
    Button:{
        background: 'linear-gradient(45deg, #A673FF 30%, #4FADFF 130%)',
        color: 'white',

    },
    outerDiv: {
        // background: 'blue',
        // backgroundImage: '/styles/signup-login.jpg'
    }
}))

export default loginFieldStyles;