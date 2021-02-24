import React from "react";
import Task from "./components/Task";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     inputValue: '',
     messages: [{text: 'Task1', completed: false}, {text: 'Task2', completed: false}, {text: 'Task3', completed: true}],
      //counter: 0
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.state.inputValue !== '')
    this.setState((prevState) => {
      // return {messages: [...prevState.messages, <Task key={prevState.messages.length} text={this.state.inputValue}/>], inputValue: ''}})
      return {messages: [...prevState.messages, {text: prevState.inputValue, completed: false}], inputValue: ''}})
  }

  render() {
    
    return (
      <>
    <form onSubmit={this.submitHandler}>
      <input value={this.state.inputValue} onChange={(event) => {this.setState({inputValue: event.target.value})
     }} type="text"/>
     <button type="submit">Submit</button>
    </form>
    {/* <p>{this.state.message}</p> */}
     <ul>
       {this.state.messages.map((task, index) => {
         return <Task key={index} text={task.text} completed={task.completed}/>
       })}
     </ul>
    </>
    )
  }
}

  
 /** render() {
    return (
    <div>
      <input onChange={(event) => {this.setState((prevState) => {
        return {value: event.target.value,
        }
      })
     }} type="text"/>

      <p>{this.state.value.toUpperCase()}</p>
      <p>{this.state.counter}</p>
      <button onClick={() => {
        this.setState((prevState) => {
          return {
            counter: prevState.counter +1
          }
        })
      }}>Click</button>
      
    </div>
    )
  }
}*/

class TestClass {
  constructor(mes1, mes2) {
    
  }

  method1 () {
    console.log('method1')
  }
}

class ChildClass extends TestClass {
  constructor(mes1, mes2) {
    super();
    this.mes1 = mes1
    this.mes2 = mes2
  }

  method2 () {
    console.log(this.mes1 + ' '+ this.mes2)
  }
}

const testObj = new TestClass ()
testObj.method1()

const childObj = new ChildClass ('Hello', 'World')
childObj.method1()






















/**import Elem from "./components/Elem";
import City from "./components/City";
import Phone from "./components/Phone";

function  App () {
  return (
  <div>
  <Elem name="John" lastname="Petrov"/>
  <City cityname="Volgograd" country="Russia"/>
  <Phone number="900"/>
  </div> 
  )
  
}

export default App*/
