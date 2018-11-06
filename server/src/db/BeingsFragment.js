const gql = require('graphql-tag');

const BEINGS_FRAGMENT = gql`{
    id
    type
    kind
    name
    slug
    avatar
    status {
        status
        reason
        createdOn
    }
    updatedOn
    createdOn
    team
    parent
    creator
    admins {
        adminId
        financialBeingId
    }
}`;

module.exports = BEINGS_FRAGMENT;
