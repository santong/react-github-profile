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

    static repo_detail(repo_name) {
        return gql(`
        query repoDetail {
            repository(owner: "santong", name: "${repo_name}") {
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
                refs(refPrefix: "refs/", first: 10) {
                  totalCount
                  nodes {
                    name
                    target {
                      ... on Commit {
                        id
                        history(first: 100) {
                          edges {
                            node {
                              messageHeadline
                              oid
                              message
                              author {
                                name
                                email
                                date
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
        }`)
    };
    //
    // static branch_count = gql(`
    //     query branchCounts($owner: String!, $name: String!) {
    //       repository(owner: $owner, name: $name) {
    //         refs(refPrefix: "refs/") {
    //           totalCount
    //         }
    //       }
    //     }`);
    //
    // static commits = gql(`
    //     query commits($owner: String!, $name: String!, $branchCount: Int!) {
    //       repository(owner: $owner, name: $name) {
    //
    //     }
    //   }`);
}
