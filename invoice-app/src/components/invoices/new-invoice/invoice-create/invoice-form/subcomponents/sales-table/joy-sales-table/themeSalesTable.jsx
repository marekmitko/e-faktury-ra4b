import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650
    },
    tableContainer: {
      borderRadius: 15,
      margin: "10px 10px",
      maxWidth: 950
    },
    tableHeaderCell: {
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
      fontWeight: "bold",
      color: theme.palette.secondary.dark
    },
    status: {
      fontWeight: "bold",
      fontSize: "0.75rem",
      color: "white",
      backgroundColor: "grey",
      borderRadius: 8,
      padding: "3px 10px",
      display: "inline-block"
    }
  }));