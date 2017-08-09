/**
 * Created by santong on 2017/8/9.
 */
import App from './containers/App';
import RepoDetail from './containers/RepoDetail';

export default class routes {
    static config = [
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