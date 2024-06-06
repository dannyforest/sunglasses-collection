/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserSunglasses = /* GraphQL */ `query GetUserSunglasses($id: ID!) {
  getUserSunglasses(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserSunglassesQueryVariables,
  APITypes.GetUserSunglassesQuery
>;
export const listUserSunglasses = /* GraphQL */ `query ListUserSunglasses(
  $filter: ModelUserSunglassesFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSunglasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSunglassesQueryVariables,
  APITypes.ListUserSunglassesQuery
>;
