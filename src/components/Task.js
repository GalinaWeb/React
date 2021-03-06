import { ListItem, ListItemText, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles ({
    root: {
        display: "flex",
        marginBottom: 10,
        flexGrow: 1 
    },
    ListItem: {
       
        flexGrow: 1 
    }
})

export default function Task(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
    <ListItem className={classes.ListItem}
    button
    onClick={() => props.toggleMessage(props.index)}
    >
    <ListItemText
    style={{textDecoration: props.completed ? "line-through" : "none"}}
       primary={props.text} />
      
    </ListItem>
    <Button color="secondary" variant="contained">Delete</Button>
    </div>
    )
}