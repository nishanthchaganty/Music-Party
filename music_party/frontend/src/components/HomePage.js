
import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";
import Room from './Room';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Room from "./Room";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(<Router> 
        <Switch>
            <Route exact path='/'>
                <p>This is the home page</p>
            </Route>
            <Route path ='/join' component={JoinRoomPage}/>
            <Route path ='/create' component={CreateRoomPage}/>
             {/* By some default pass on some props to the room with information relating to the url mentioned. pop called
             match which gives params containing room code  */}
            <Route path = '/room/:roomCode' component = {Room} />
        </Switch>
    </Router>);
  }
}