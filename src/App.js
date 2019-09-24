import React, { Component } from 'react';
import './App.css';
class App extends Component {
   
  state = {
    todos: []
  }
  componentDidMount() {
    const todos = [
      {
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9415346313"
      },
      {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9415346314"
      },
      {
        "id": 3,
        "name": "test3",
        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9415346315"
      },
      {
        "id": 4,
        "name": "test4",
        "age": "14",
        "gender": "male",
        "email": "test4@gmail.com",
        "phoneNo": "9415346316"
      },
      {
        "id": 5,
        "name": "test5",
        "age": "15",
        "gender": "male",
        "email": "test5@gmail.com",
        "phoneNo": "9415346317"
      },
      {
        "id": 6,
        "name": "test6",
        "age": "16",
        "gender": "male",
        "email": "test6@gmail.com",
        "phoneNo": "9415346318"
      }
    ]
    this.setState({ todos: todos })
  }
  render() {

    return (
      <div className="container">
        <div className="col-xs-12">
          <h4>User List </h4>
          <table border="1">
            <tr>
              <td> <h5> Id  </h5> </td><td> <h5> Name</h5></td><td> <h5> Age </h5></td>
              <td>  <h5>  Gender </h5></td><td> <h5> Email</h5></td><td> <h5> Phone No</h5></td>
            </tr>
            {this.state.todos.map((todo) => (
              <tr>
                <td>
                  <h5> {todo.id} </h5>
                </td>

                <td>
                  <h5>  {todo.name} </h5>
                </td>

                <td>
                  <h5>  {todo.age} </h5>
                </td>

                <td>
                  <h5>  {todo.gender} </h5>
                </td>

                <td>
                  <h5>  {todo.email} </h5>
                </td>
                <td> <h5> {todo.phoneNo} </h5>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
export default App;
