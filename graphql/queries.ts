/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRandomChoice = /* GraphQL */ `
  query GetRandomChoice($id: ID!) {
    getRandomChoice(id: $id) {
      id
      winnerResult
      participants {
        items {
          id
          name
          url
          createdAt
          updatedAt
          randomChoiceParticipantsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRandomChoices = /* GraphQL */ `
  query ListRandomChoices(
    $filter: ModelRandomChoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRandomChoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        winnerResult
        participants {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      url
      createdAt
      updatedAt
      randomChoiceParticipantsId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        createdAt
        updatedAt
        randomChoiceParticipantsId
      }
      nextToken
    }
  }
`;
