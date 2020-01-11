import React, { Component} from "react";
import 'antd/dist/antd.css';
import AppLayout from "./layout/AppLayout";
import "./App.css";
import { hot } from 'react-hot-loader/root';

class App extends Component{
    render(){
        let user={name:"Rohit Sharma",email:"sharmarohit.inu@gmail.com"}
        return(
            <div >
            <AppLayout user={user}/>
        </div>
    );
    }
}

export default hot(App);