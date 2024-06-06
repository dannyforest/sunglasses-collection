/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserSunglassesInput = {
  id?: string | null,
  userId: string,
  brand: string,
  model: string,
  color?: string | null,
  polarized?: boolean | null,
  tint?: string | null,
  purchasePrice?: number | null,
};

export type ModelUserSunglassesConditionInput = {
  userId?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  model?: ModelStringInput | null,
  color?: ModelStringInput | null,
  polarized?: ModelBooleanInput | null,
  tint?: ModelStringInput | null,
  purchasePrice?: ModelIntInput | null,
  and?: Array< ModelUserSunglassesConditionInput | null > | null,
  or?: Array< ModelUserSunglassesConditionInput | null > | null,
  not?: ModelUserSunglassesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserSunglasses = {
  __typename: "UserSunglasses",
  id: string,
  userId: string,
  brand: string,
  model: string,
  color?: string | null,
  polarized?: boolean | null,
  tint?: string | null,
  purchasePrice?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserSunglassesInput = {
  id: string,
  userId?: string | null,
  brand?: string | null,
  model?: string | null,
  color?: string | null,
  polarized?: boolean | null,
  tint?: string | null,
  purchasePrice?: number | null,
};

export type DeleteUserSunglassesInput = {
  id: string,
};

export type ModelUserSunglassesFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  model?: ModelStringInput | null,
  color?: ModelStringInput | null,
  polarized?: ModelBooleanInput | null,
  tint?: ModelStringInput | null,
  purchasePrice?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserSunglassesFilterInput | null > | null,
  or?: Array< ModelUserSunglassesFilterInput | null > | null,
  not?: ModelUserSunglassesFilterInput | null,
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

export type ModelUserSunglassesConnection = {
  __typename: "ModelUserSunglassesConnection",
  items:  Array<UserSunglasses | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserSunglassesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  model?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  polarized?: ModelSubscriptionBooleanInput | null,
  tint?: ModelSubscriptionStringInput | null,
  purchasePrice?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserSunglassesFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSunglassesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserSunglassesMutationVariables = {
  input: CreateUserSunglassesInput,
  condition?: ModelUserSunglassesConditionInput | null,
};

export type CreateUserSunglassesMutation = {
  createUserSunglasses?:  {
    __typename: "UserSunglasses",
    id: string,
    userId: string,
    brand: string,
    model: string,
    color?: string | null,
    polarized?: boolean | null,
    tint?: string | null,
    purchasePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserSunglassesMutationVariables = {
  input: UpdateUserSunglassesInput,
  condition?: ModelUserSunglassesConditionInput | null,
};

export type UpdateUserSunglassesMutation = {
  updateUserSunglasses?:  {
    __typename: "UserSunglasses",
    id: string,
    userId: string,
    brand: string,
    model: string,
    color?: string | null,
    polarized?: boolean | null,
    tint?: string | null,
    purchasePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserSunglassesMutationVariables = {
  input: DeleteUserSunglassesInput,
  condition?: ModelUserSunglassesConditionInput | null,
};

export type DeleteUserSunglassesMutation = {
  deleteUserSunglasses?:  {
    __typename: "UserSunglasses",
    id: string,
    userId: string,
    brand: string,
    model: string,
    color?: string | null,
    polarized?: boolean | null,
    tint?: string | null,
    purchasePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserSunglassesQueryVariables = {
  id: string,
};

export type GetUserSunglassesQuery = {
  getUserSunglasses?:  {
    __typename: "UserSunglasses",
    id: string,
    userId: string,
    brand: string,
    model: string,
    color?: string | null,
    polarized?: boolean | null,
    tint?: string | null,
    purchasePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserSunglassesQueryVariables = {
  filter?: ModelUserSunglassesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSunglassesQuery = {
  listUserSunglasses?:  {
    __typename: "ModelUserSunglassesConnection",
    items:  Array< {
      __typename: "UserSunglasses",
      id: string,
      userId: string,
      brand: string,
      model: string,
      color?: string | null,
      polarized?: boolean | null,
      tint?: string | null,
      purchasePrice?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSunglassesSubscriptionVariables = {
  filter?: ModelSubscriptionUserSunglassesFilterInput | null,
};

export type OnCreateUserSunglassesSubscription = {
  onCreateUserSunglasses?:  {
    __typename: "UserSunglasses",
    id: string,
    userId: string,
    brand: string,
    model: string,
    color?: string | null,
    polarized?: boolean | null,
    tint?: string | null,
    purchasePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSunglassesSubscriptionVariables = {
  filter?: ModelSubscriptionUserSunglassesFilterInput | null,
};

export type OnUpdateUserSunglassesSubscription = {
  onUpdateUserSunglasses?:  {
    __typename: "UserSunglasses",
    id: string,
    userId: string,
    brand: string,
    model: string,
    color?: string | null,
    polarized?: boolean | null,
    tint?: string | null,
    purchasePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSunglassesSubscriptionVariables = {
  filter?: ModelSubscriptionUserSunglassesFilterInput | null,
};

export type OnDeleteUserSunglassesSubscription = {
  onDeleteUserSunglasses?:  {
    __typename: "UserSunglasses",
    id: string,
    userId: string,
    brand: string,
    model: string,
    color?: string | null,
    polarized?: boolean | null,
    tint?: string | null,
    purchasePrice?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
