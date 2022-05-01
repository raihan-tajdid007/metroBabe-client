import { makeStyles } from "@mui/styles";

export default makeStyles((theme ) => ({
    appBar: {
        display: "flex ",
        flexDirection: "row !important",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 15,
        margin: '30px 0',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
//     [theme.breakpoints.down('md')]: {
//     mainContainer: {
//         flexDirection: "column-reverse",
//     }
//    },


}));