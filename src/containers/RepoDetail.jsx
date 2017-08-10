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

import RepoCommits from '../components/RepoCommits';

class RepoDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.data.loading) {
            return this.renderLoading();
        }
        return (
            <div className="repo-mask">
                <div className="repo-container">
                    {this.renderHeader()}
                    {this.renderCommits()}

                    <Link to={'/'} className="close-button">
                        close
                    </Link>
                </div>
            </div>

        );
    }

    renderCommits() {
        let data = this.props.data;
        if (!data) {
            return;
        }
        let branched = [];
        data.repository.refs.nodes.forEach(item => {
            let commits = item.target.history.edges.map(item => {
                return {
                    des: item.node.messageHeadline
                }
            });
            commits.reverse();
            branched.push({
                name: item.name,
                commits: commits
            });

        });
        console.log(branched);
        return (
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {
                    branched.map((item, index) => {
                        return (
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1}}
                                 key={item.name}>
                                <a style={{flex: 1, textAlign: 'right', paddingRight: 20}}>{item.name}</a>
                                <RepoCommits commits={item.commits} key={index} sliderWidth={550}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    renderLoading() {
        return (
            <div className="loading">
                <div className="loading-title"/>
                <div className="loading-subtitle"/>
            </div>
        );
    }

    renderHeader() {
        let repo = this.props.data.repository;
        return (
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
        );
    }
}
const RepoDetailWithData = graphql(query.repo_detail(), {
    options: (props) => {
        return {
            variables: {
                repo_name: props.match.params.name
            }
        }
    }
})(RepoDetail);


export default RepoDetailWithData;