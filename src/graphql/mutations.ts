/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserSunglasses = /* GraphQL */ `mutation CreateUserSunglasses(
  $input: CreateUserSunglassesInput!
  $condition: ModelUserSunglassesConditionInput
) {
  createUserSunglasses(input: $input, condition: $condition) {
    id
    userId
    brand
    model
    color
    polarized
    tint
    purchasePrice
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserSunglassesMutationVariables,
  APITypes.CreateUserSunglassesMutation
>;
export const updateUserSunglasses = /* GraphQL */ `mutation UpdateUserSunglasses(
  $input: UpdateUserSunglassesInput!
  $condition: ModelUserSunglassesConditionInput
) {
  updateUserSunglasses(input: $input, condition: $condition) {
    id
    userId
    brand
    model
    color
    polarized
    tint
    purchasePrice
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserSunglassesMutationVariables,
  APITypes.UpdateUserSunglassesMutation
>;
export const deleteUserSunglasses = /* GraphQL */ `mutation DeleteUserSunglasses(
  $input: DeleteUserSunglassesInput!
  $condition: ModelUserSunglassesConditionInput
) {
  deleteUserSunglasses(input: $input, condition: $condition) {
    id
    userId
    brand
    model
    color
    polarized
    tint
    purchasePrice
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserSunglassesMutationVariables,
  APITypes.DeleteUserSunglassesMutation
>;
