/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRandomChoiceInput = {
  id?: string | null,
  winnerResult: string,
};

export type ModelRandomChoiceConditionInput = {
  winnerResult?: ModelStringInput | null,
  and?: Array< ModelRandomChoiceConditionInput | null > | null,
  or?: Array< ModelRandomChoiceConditionInput | null > | null,
  not?: ModelRandomChoiceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type randomChoice = {
  __typename: "randomChoice",
  id: string,
  winnerResult: string,
  participants?: ModelUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  url?: string | null,
  createdAt: string,
  updatedAt: string,
  randomChoiceParticipantsId?: string | null,
};

export type UpdateRandomChoiceInput = {
  id: string,
  winnerResult?: string | null,
};

export type DeleteRandomChoiceInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  url?: string | null,
  randomChoiceParticipantsId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  randomChoiceParticipantsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  randomChoiceParticipantsId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelRandomChoiceFilterInput = {
  id?: ModelIDInput | null,
  winnerResult?: ModelStringInput | null,
  and?: Array< ModelRandomChoiceFilterInput | null > | null,
  or?: Array< ModelRandomChoiceFilterInput | null > | null,
  not?: ModelRandomChoiceFilterInput | null,
};

export type ModelRandomChoiceConnection = {
  __typename: "ModelRandomChoiceConnection",
  items:  Array<randomChoice | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  randomChoiceParticipantsId?: ModelIDInput | null,
};

export type CreateRandomChoiceMutationVariables = {
  input: CreateRandomChoiceInput,
  condition?: ModelRandomChoiceConditionInput | null,
};

export type CreateRandomChoiceMutation = {
  createRandomChoice?:  {
    __typename: "randomChoice",
    id: string,
    winnerResult: string,
    participants?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        randomChoiceParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRandomChoiceMutationVariables = {
  input: UpdateRandomChoiceInput,
  condition?: ModelRandomChoiceConditionInput | null,
};

export type UpdateRandomChoiceMutation = {
  updateRandomChoice?:  {
    __typename: "randomChoice",
    id: string,
    winnerResult: string,
    participants?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        randomChoiceParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRandomChoiceMutationVariables = {
  input: DeleteRandomChoiceInput,
  condition?: ModelRandomChoiceConditionInput | null,
};

export type DeleteRandomChoiceMutation = {
  deleteRandomChoice?:  {
    __typename: "randomChoice",
    id: string,
    winnerResult: string,
    participants?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        randomChoiceParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    randomChoiceParticipantsId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    randomChoiceParticipantsId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    randomChoiceParticipantsId?: string | null,
  } | null,
};

export type GetRandomChoiceQueryVariables = {
  id: string,
};

export type GetRandomChoiceQuery = {
  getRandomChoice?:  {
    __typename: "randomChoice",
    id: string,
    winnerResult: string,
    participants?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        randomChoiceParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRandomChoicesQueryVariables = {
  filter?: ModelRandomChoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRandomChoicesQuery = {
  listRandomChoices?:  {
    __typename: "ModelRandomChoiceConnection",
    items:  Array< {
      __typename: "randomChoice",
      id: string,
      winnerResult: string,
      participants?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    randomChoiceParticipantsId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      randomChoiceParticipantsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRandomChoiceSubscription = {
  onCreateRandomChoice?:  {
    __typename: "randomChoice",
    id: string,
    winnerResult: string,
    participants?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        randomChoiceParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRandomChoiceSubscription = {
  onUpdateRandomChoice?:  {
    __typename: "randomChoice",
    id: string,
    winnerResult: string,
    participants?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        randomChoiceParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRandomChoiceSubscription = {
  onDeleteRandomChoice?:  {
    __typename: "randomChoice",
    id: string,
    winnerResult: string,
    participants?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        randomChoiceParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    randomChoiceParticipantsId?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    randomChoiceParticipantsId?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    randomChoiceParticipantsId?: string | null,
  } | null,
};
