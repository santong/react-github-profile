import {gql} from 'react-apollo';
export default class {
    static login = gql(`
        query login{
          viewer {
            login
          }
        }
    `);

    static user_repos = gql`
        query userRepos{
            user(login: "santong") {
                pinnedRepositories(first: 6){
                    nodes{
                        id
                        name
                        url
                        stargazers{
                          totalCount
                        }
                        forks{
                          totalCount
                        }
                    }
                }
            }
        }`;

    static user_detail = gql(`
        query userDetail{
            user(login: "santong") {
                name
                websiteUrl
                avatarUrl
                starredRepositories {
                  totalCount
                }
                repositories {
                  totalCount
                }
                followers {
                  totalCount
                }
                following {
                  totalCount
                }
            }
        }`);

    static repo_detail = gql(`
        query($name: String!) {
            repository(owner: "santong", name: $name) {
                id
                name
                description
                watchers {
                    totalCount
                }
                stargazers {
                    totalCount
                }
                forks {
                    totalCount
                }
                issues {
                    totalCount
                }
                releases {
                    totalCount
                }
            }
        }`);
}
