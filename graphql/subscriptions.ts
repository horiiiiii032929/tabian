/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRandomChoice = /* GraphQL */ `
  subscription OnCreateRandomChoice {
    onCreateRandomChoice {
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
export const onUpdateRandomChoice = /* GraphQL */ `
  subscription OnUpdateRandomChoice {
    onUpdateRandomChoice {
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
export const onDeleteRandomChoice = /* GraphQL */ `
  subscription OnDeleteRandomChoice {
    onDeleteRandomChoice {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      url
      createdAt
      updatedAt
      randomChoiceParticipantsId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      url
      createdAt
      updatedAt
      randomChoiceParticipantsId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      url
      createdAt
      updatedAt
      randomChoiceParticipantsId
    }
  }
`;
