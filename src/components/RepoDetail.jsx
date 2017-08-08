/**
 * Created by santong on 2017/8/8.
 */
import React, {Component} from 'react';
import '../assets/styles.css';
import {graphql} from 'react-apollo';
import query from '../query';

class RepoDetail extends Component {
    render() {
        if (this.props.data.loading) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div className="repo-status">
                <div className="status-block">
                    <a className="status-title">Watches</a>
                    <a className="status-content">16</a>
                </div>
                <div className="status-block">
                    <a className="status-title">Stars</a>
                    <a className="status-content">424</a>
                </div>
                <div className="status-block">
                    <a className="status-title">Forks</a>
                    <a className="status-content">3</a>
                </div>
                <div className="status-block">
                    <a className="status-title">Issues</a>
                    <a className="status-content">6</a>
                </div>
                <div className="status-block">
                    <a className="status-title">Branchs</a>
                    <a className="status-content">424</a>
                </div>
                <div className="status-block">
                    <a className="status-title">Releases</a>
                    <a className="status-content">3</a>
                </div>
            </div>
        );
    }
}
export default graphql(query.repo_detail)(RepoDetail);