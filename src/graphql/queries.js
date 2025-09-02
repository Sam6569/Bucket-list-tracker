/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBucketItem = /* GraphQL */ `
  query GetBucketItem($id: ID!) {
    getBucketItem(id: $id) {
      id
      name
      description
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBucketItems = /* GraphQL */ `
  query ListBucketItems(
    $filter: ModelBucketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBucketItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
