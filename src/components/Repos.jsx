/**
 * Created by santong on 2017/8/8.
 */
import React, {Component} from 'react';
import '../assets/styles.css';
import {graphql} from 'react-apollo';
import query from '../query';
import {
    Link
} from 'react-router-dom'

class Repos extends Component {
    render() {
        if (this.props.data.loading) {
            return (
                <div className="loading">
                    <div className="loading-title"/>
                    <div className="loading-subtitle"/>
                </div>
            );
        }
        let user = this.props.data.user;
        let list = user.pinnedRepositories.nodes.map((item) => {
            return (
                <Link to={`/repos/${item.name}`} key={item.id}>
                    <div className="repo">
                        <p>{item.name}</p>
                        <div>
                            <p>Stars: {item.stargazers.totalCount}</p>
                            <p>Forks: {item.forks.totalCount}</p>
                        </div>
                    </div>
                </Link>
            );
        });
        return (
            <div className="repo-wrapper">
                {list}
            </div>
        );
    }
}

export default graphql(query.user_repos)(Repos);