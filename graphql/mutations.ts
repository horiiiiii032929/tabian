/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRandomChoice = /* GraphQL */ `
  mutation CreateRandomChoice(
    $input: CreateRandomChoiceInput!
    $condition: ModelRandomChoiceConditionInput
  ) {
    createRandomChoice(input: $input, condition: $condition) {
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
export const updateRandomChoice = /* GraphQL */ `
  mutation UpdateRandomChoice(
    $input: UpdateRandomChoiceInput!
    $condition: ModelRandomChoiceConditionInput
  ) {
    updateRandomChoice(input: $input, condition: $condition) {
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
export const deleteRandomChoice = /* GraphQL */ `
  mutation DeleteRandomChoice(
    $input: DeleteRandomChoiceInput!
    $condition: ModelRandomChoiceConditionInput
  ) {
    deleteRandomChoice(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
      randomChoiceParticipantsId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
      randomChoiceParticipantsId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
      randomChoiceParticipantsId
    }
  }
`;
