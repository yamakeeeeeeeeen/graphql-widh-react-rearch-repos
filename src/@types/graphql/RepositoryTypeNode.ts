import {
  BranchProtectionRuleConnection,
  CodeOfConduct,
  CommitCommentConnection,
  DeployKeyConnection,
  DeploymentConnection,
  FundingLink,
  GitObject,
  Issue,
  IssueConnection,
  IssueOrPullRequest,
  IssueTemplate,
  Label,
  LabelConnection,
  Language,
  LanguageConnection,
  License,
  Maybe,
  Milestone,
  MilestoneConnection,
  PackageConnection,
  PackageOwner,
  Project,
  ProjectConnection,
  ProjectOwner,
  PullRequest,
  PullRequestConnection,
  PullRequestMergeMethod,
  Ref,
  RefConnection,
  Release,
  ReleaseConnection,
  Repository,
  RepositoryCollaboratorConnection,
  RepositoryConnection,
  RepositoryContactLink,
  RepositoryInfo,
  RepositoryLockReason,
  RepositoryOwner,
  RepositoryPermission,
  RepositoryTopicConnection,
  RepositoryVulnerabilityAlertConnection,
  Scalars,
  StargazerConnection,
  Starrable,
  SubmoduleConnection,
  Subscribable,
  SubscriptionState,
  UniformResourceLocatable,
  UserConnection,
} from '../../client/gen/graphql-client-api';

export type RepositoryTypeNode = { __typename?: 'Repository' } & Pick<
  Node &
    PackageOwner &
    ProjectOwner &
    RepositoryInfo &
    Starrable &
    Subscribable &
    UniformResourceLocatable & {
      __typename?: 'Repository';
      assignableUsers: UserConnection;
      branchProtectionRules: BranchProtectionRuleConnection;
      codeOfConduct?: Maybe<CodeOfConduct>;
      collaborators?: Maybe<RepositoryCollaboratorConnection>;
      commitComments: CommitCommentConnection;
      contactLinks?: Maybe<Array<RepositoryContactLink>>;
      createdAt: Scalars['DateTime'];
      databaseId?: Maybe<Scalars['Int']>;
      defaultBranchRef?: Maybe<Ref>;
      deleteBranchOnMerge: Scalars['Boolean'];
      deployKeys: DeployKeyConnection;
      deployments: DeploymentConnection;
      description?: Maybe<Scalars['String']>;
      descriptionHTML: Scalars['HTML'];
      diskUsage?: Maybe<Scalars['Int']>;
      forkCount: Scalars['Int'];
      forks: RepositoryConnection;
      fundingLinks: Array<FundingLink>;
      hasIssuesEnabled: Scalars['Boolean'];
      hasProjectsEnabled: Scalars['Boolean'];
      hasWikiEnabled: Scalars['Boolean'];
      homepageUrl?: Maybe<Scalars['URI']>;
      id: Scalars['ID'];
      isArchived: Scalars['Boolean'];
      isBlankIssuesEnabled: Scalars['Boolean'];
      isDisabled: Scalars['Boolean'];
      isEmpty: Scalars['Boolean'];
      isFork: Scalars['Boolean'];
      isInOrganization: Scalars['Boolean'];
      isLocked: Scalars['Boolean'];
      isMirror: Scalars['Boolean'];
      isPrivate: Scalars['Boolean'];
      isSecurityPolicyEnabled?: Maybe<Scalars['Boolean']>;
      isTemplate: Scalars['Boolean'];
      isUserConfigurationRepository: Scalars['Boolean'];
      issue?: Maybe<Issue>;
      issueOrPullRequest?: Maybe<IssueOrPullRequest>;
      issueTemplates?: Maybe<Array<IssueTemplate>>;
      issues: IssueConnection;
      label?: Maybe<Label>;
      labels?: Maybe<LabelConnection>;
      languages?: Maybe<LanguageConnection>;
      licenseInfo?: Maybe<License>;
      lockReason?: Maybe<RepositoryLockReason>;
      mentionableUsers: UserConnection;
      mergeCommitAllowed: Scalars['Boolean'];
      milestone?: Maybe<Milestone>;
      milestones?: Maybe<MilestoneConnection>;
      mirrorUrl?: Maybe<Scalars['URI']>;
      name: Scalars['String'];
      nameWithOwner: Scalars['String'];
      object?: Maybe<GitObject>;
      openGraphImageUrl: Scalars['URI'];
      owner: RepositoryOwner;
      packages: PackageConnection;
      parent?: Maybe<Repository>;
      primaryLanguage?: Maybe<Language>;
      project?: Maybe<Project>;
      projects: ProjectConnection;
      projectsResourcePath: Scalars['URI'];
      projectsUrl: Scalars['URI'];
      pullRequest?: Maybe<PullRequest>;
      pullRequests: PullRequestConnection;
      pushedAt?: Maybe<Scalars['DateTime']>;
      rebaseMergeAllowed: Scalars['Boolean'];
      ref?: Maybe<Ref>;
      refs?: Maybe<RefConnection>;
      release?: Maybe<Release>;
      releases: ReleaseConnection;
      repositoryTopics: RepositoryTopicConnection;
      resourcePath: Scalars['URI'];
      securityPolicyUrl?: Maybe<Scalars['URI']>;
      shortDescriptionHTML: Scalars['HTML'];
      squashMergeAllowed: Scalars['Boolean'];
      sshUrl: Scalars['GitSSHRemote'];
      stargazerCount: Scalars['Int'];
      stargazers: StargazerConnection;
      submodules: SubmoduleConnection;
      tempCloneToken?: Maybe<Scalars['String']>;
      templateRepository?: Maybe<Repository>;
      updatedAt: Scalars['DateTime'];
      url: Scalars['URI'];
      usesCustomOpenGraphImage: Scalars['Boolean'];
      viewerCanAdminister: Scalars['Boolean'];
      viewerCanCreateProjects: Scalars['Boolean'];
      viewerCanSubscribe: Scalars['Boolean'];
      viewerCanUpdateTopics: Scalars['Boolean'];
      viewerDefaultCommitEmail?: Maybe<Scalars['String']>;
      viewerDefaultMergeMethod: PullRequestMergeMethod;
      viewerHasStarred: Scalars['Boolean'];
      viewerPermission?: Maybe<RepositoryPermission>;
      viewerPossibleCommitEmails?: Maybe<Array<Scalars['String']>>;
      viewerSubscription?: Maybe<SubscriptionState>;
      vulnerabilityAlerts?: Maybe<RepositoryVulnerabilityAlertConnection>;
      watchers: UserConnection;
    },
  'id' | 'name' | 'url' | 'viewerHasStarred'
> & { stargazers: { __typename?: 'StargazerConnection' } & Pick<StargazerConnection, 'totalCount'> };
