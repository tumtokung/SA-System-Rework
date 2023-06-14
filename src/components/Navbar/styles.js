import { makeStyles } from '@mui/styles';

export const useMenuListStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        transition:".3s",
        padding: "24px 12px",
        display: "flex", 
        alignItems: "center", 
        // justifyContent: "center", 
        flexDirection: "column"
    },
    header:{
        textDecoration: "none", 
        width: "100%",
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center"
    },
    profile:{
        width : "100%",
        background: "#ffffff",
        padding: "8px 2px",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    divider:{
        width: "100%",
        backgroundColor: theme.palette.text.white,  
        margin: "16px 0px"
    },
    MenuLink: {
        textDecoration: "none", 
        width: "100%",
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        borderRadius: 8,
        padding: 4
    }
}));
