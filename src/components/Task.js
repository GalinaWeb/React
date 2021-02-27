export default function Task(props) {
    return (<li onClick={() => props.toggleMessage(props.index)}
    style={{textDecoration: props.completed ? "line-through" : "none"}}>{props.text}</li>
    )
}