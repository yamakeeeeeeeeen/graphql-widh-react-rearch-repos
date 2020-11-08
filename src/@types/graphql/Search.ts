import {
  Maybe,
  PageInfo,
  Repository,
  SearchResultItemConnection,
  SearchResultItemEdge,
  StargazerConnection,
} from '../../client/gen/graphql-client-api';

export type Search =
  | ({ __typename?: 'SearchResultItemConnection' } & Pick<SearchResultItemConnection, 'repositoryCount'> & {
        pageInfo: { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'
        >;
        edges?: Maybe<
          Array<
            Maybe<
              { __typename?: 'SearchResultItemEdge' } & Pick<SearchResultItemEdge, 'cursor'> & {
                  node?: Maybe<
                    | { __typename?: 'App' }
                    | { __typename?: 'Issue' }
                    | { __typename?: 'MarketplaceListing' }
                    | { __typename?: 'Organization' }
                    | { __typename?: 'PullRequest' }
                    | ({ __typename?: 'Repository' } & Pick<Repository, 'id' | 'name' | 'url' | 'viewerHasStarred'> & {
                          stargazers: { __typename?: 'StargazerConnection' } & Pick<StargazerConnection, 'totalCount'>;
                        })
                    | { __typename?: 'User' }
                  >;
                }
            >
          >
        >;
      })
  | undefined;
