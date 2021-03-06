import { useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles ({
    root: {
        display: "flex"
    },
    TextField: {
        marginRight: 10,
        flexGrow: 1 
    }
})

export default function NewMessage ({addNewMessage}) {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState("")
    function submitHandler(event) {
    event.preventDefault()
    if (inputValue === "") return;
    const newMessage = {
        text: inputValue,
        completed: false
    }
    addNewMessage(newMessage)
    setInputValue('')
}

    return (
    <form className={classes.root} onSubmit={submitHandler}>
        <TextField className={classes.TextField} label="Message text" variant="outlined" value={inputValue} onChange={(event) => setInputValue(event.target.value)
     }/>
    <Button type="submit" variant="contained" color="primary">Add message</Button>
    </form>
    )
    
}