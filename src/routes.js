/**
 * Created by santong on 2017/8/9.
 */
import App from './containers/App';
import RepoDetail from './containers/RepoDetail';
import RepoCommits from './components/RepoCommits';

export default class routes {
    static config = [
        // {
        //     path: '/',
        //     component: RepoCommits
        // },
        {
            path: '/',
            component: App
        },
        {
            path: '/repos/:name',
            component: RepoDetail
        }
    ]

}