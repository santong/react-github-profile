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
                <div className="repo-mask ">
                    <div className="repo-container">
                        <div className="loading">
                            <div className="loading-title"/>
                            <div className="loading-subtitle"/>
                        </div>
                    </div>
                </div>
            );
        }
        let repo = this.props.data.repository;
        console.log('repo', repo);
        return (
            <div className="repo-mask ">
                <div className="repo-container">
                    <div className="repo-content-header">
                        <div className="repo-content-header-title">
                            <h3>{repo.name}</h3>
                            <a>{repo.description}</a>
                        </div>
                        <div className="repo-status">
                            <div className="status-block">
                                <a className="status-title">Watches</a>
                                <a className="status-content">{repo.watchers.totalCount}</a>
                            </div>
                            <div className="status-block">
                                <a className="status-title">Stars</a>
                                <a className="status-content">{repo.stargazers.totalCount}</a>
                            </div>
                            <div className="status-block">
                                <a className="status-title">Forks</a>
                                <a className="status-content">{repo.forks.totalCount}</a>
                            </div>
                            <div className="status-block">
                                <a className="status-title">Releases</a>
                                <a className="status-content">{repo.releases.totalCount}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default graphql(query.repo_detail('react-github-profile'))(RepoDetail);