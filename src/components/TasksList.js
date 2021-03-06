import { List } from "@material-ui/core";
import Task from "./Task";



export default function TasksList (props) {
    return (
        <List component="ul">
        {props.messages.map((task, index) => {
         return <Task key={index} index={index} text={task.text} completed={task.completed} toggleMessage={props.toggleMessage}/>
       })}
     </List>
    )
    
}