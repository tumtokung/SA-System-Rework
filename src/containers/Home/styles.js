import { makeStyles } from '@mui/styles';

export const useAddCourse = makeStyles((theme) => ({
    container: {
        
    },
    inputFile: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center", 
        border: "1px solid black", 
        height: 50, 
        borderRadius: 4,
        padding: theme.spacing(2),
    }

}));
