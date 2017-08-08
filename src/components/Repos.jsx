/**
 * Created by santong on 2017/8/8.
 */
import React, {Component} from 'react';
import '../assets/styles.css';
import {graphql} from 'react-apollo';
import query from '../query';

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
                <div className="repo" onClick={() => this.onClick(item.id)} key={item.id}>
                    <a href={item.url} target="blank">{item.name}</a>
                    <div>
                        <a>Stars: {item.stargazers.totalCount}</a>
                        <a>Forks: {item.forks.totalCount}</a>
                    </div>
                </div>
            );
        });
        return (
            <div className="repo-wrapper">
                {list}
            </div>
        );
    }

    onClick(id) {
        console.log('id', id);

    }
}

export default graphql(query.user_repos)(Repos);