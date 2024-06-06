/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserSunglasses = /* GraphQL */ `subscription OnCreateUserSunglasses(
  $filter: ModelSubscriptionUserSunglassesFilterInput
) {
  onCreateUserSunglasses(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSunglassesSubscriptionVariables,
  APITypes.OnCreateUserSunglassesSubscription
>;
export const onUpdateUserSunglasses = /* GraphQL */ `subscription OnUpdateUserSunglasses(
  $filter: ModelSubscriptionUserSunglassesFilterInput
) {
  onUpdateUserSunglasses(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSunglassesSubscriptionVariables,
  APITypes.OnUpdateUserSunglassesSubscription
>;
export const onDeleteUserSunglasses = /* GraphQL */ `subscription OnDeleteUserSunglasses(
  $filter: ModelSubscriptionUserSunglassesFilterInput
) {
  onDeleteUserSunglasses(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSunglassesSubscriptionVariables,
  APITypes.OnDeleteUserSunglassesSubscription
>;
