import React, {Component} from 'react';
import '../assets/styles.css';
import {graphql} from 'react-apollo';
import UserProfile from '../components/UserProfile';
import Repos from '../components/Repos';
import query from '../query';

class App extends Component {

    componentDidMount() {
        console.log(query.login);
    }

    render() {
        return (
            <div className="App">
                <div className="main">
                    <UserProfile/>
                    <p className="section-title">Favorite Repos</p>
                    <Repos/>
                </div>
            </div>
        );
    }
}


export default graphql(query.login)(App);
