/**
 * Created by santong on 2017/8/8.
 */
import React, {Component} from 'react';
import '../assets/styles.css';
import {graphql} from 'react-apollo';
import query from '../query';

class UserProfile extends Component {

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
        return (
            <div className="avatar-wrapper">
                <img src={user.avatarUrl} alt="avatar" className="avatar"/>
                <p>
                    <a>{user.name}</a>
                    <a href={user.websiteUrl} target="blank">{user.websiteUrl}</a>
                </p>
                <div className="info-wrapper">
                    <div className="info-block">
                        <a className="info-title">Repositories</a>
                        <a className="info-content">{user.repositories.totalCount}</a>
                    </div>
                    <div className="info-block">
                        <a className="info-title">Stars</a>
                        <a className="info-content">{user.starredRepositories.totalCount}</a>
                    </div>
                    <div className="info-block">
                        <a className="info-title">Fllowers</a>
                        <a className="info-content">{user.followers.totalCount}</a>
                    </div>
                    <div className="info-block">
                        <a className="info-title">Fllowing</a>
                        <a className="info-content">{user.following.totalCount}</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default graphql(query.user_detail)(UserProfile);