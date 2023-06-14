import { makeStyles } from '@mui/styles';

export const useSignInStyles = makeStyles((theme) => ({
    container: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#EEF2F6" , 
        WebkitBackgroundSize: "cover",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
    },
    boxLogin:{
        width: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 12px 40px 12px",
        backgroundColor: "white",
        borderRadius: 12,
        borderColor: "black",
        boxShadow: 4,
        [theme.breakpoints.down('md')]: {
            width: 400,
        },
    },
}));