const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.sunglasses_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `query GetUserSunglasses($id: ID!) {
            getUserSunglasses(id: $id) {
              id
              userId
              brand
              model
              color
              polarized
              tint
              purchasePrice
            }
        }`,
        "getUserSunglasses",
        {id: req.params.id},
        req, res);
});


// Handle sunglasses create on POST.
exports.sunglasses_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateUserSunglasses(
      $userId: String!,
      $brand: String!,
      $model: String!,
      $color: String,
      $polarized: Boolean,
      $tint: String,
      $purchasePrice: Int
      ) {
      createUserSunglasses(input: {userId: $userId, brand: $brand, model: $model, color: $color, polarized: $polarized, tint: $tint, purchasePrice: $purchasePrice}) {
          id
          userId
          brand
          model
          color
          polarized
          tint
          purchasePrice
      }
    }

    `, "createUserSunglasses", {...req.body}, req, res)
});

exports.sunglasses_list = asyncHandler(async (req, res, next) => {
    await executeQuery(`query ListUserSunglasses($brand: String!){
              listUserSunglasses(filter: {brand: {contains: $brand}}) {
                items {
                  id
                  userId
                  brand
                  model
                  color
                  polarized
                  tint
                  purchasePrice
                }
              }
            }
    `, "listUserSunglasses", {brand: req.query.brand}, req, res)
})

exports.sunglasses_update = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `mutation UpdateUserSunglasses($input: UpdateUserSunglassesInput!) {
            updateUserSunglasses(input: $input) {
                  id
                  userId
                  brand
                  model
                  color
                  polarized
                  tint
                  purchasePrice
            }
        }`,
        "updateUserSunglasses",
        {
            input: {
                id: req.params.id,
                ...req.body
            }
        },
        req, res
    );
})

exports.sunglasses_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `mutation DeleteUserSunglasses($id: ID!) {
            deleteUserSunglasses(input: {id: $id}) {
                id
            }
        }`,
        "deleteUserSunglasses",
        {id: req.params.id},
        req, res);
})