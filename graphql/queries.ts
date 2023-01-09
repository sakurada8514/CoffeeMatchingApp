/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      userType
      email
      iconUrl
      address
      recipes {
        items {
          id
          isEnabled
          title
          tasteComment
          rate
          viewCount
          grindLevel
          coffeeWaterRate
          waterTemperature
          dripperName
          brewTime
          mediaUrl
          originStory
          distributionChannel
          roastDate
          waterDescription
          grinder
          createdAt
          updatedAt
          userRecipesId
          companyRecipesId
        }
        nextToken
      }
      roastLevel {
        id
        level
        coffee {
          id
          region
          variety
          processing
          createdAt
          updatedAt
          coffeeRecipeId
        }
        user {
          id
          name
          userType
          email
          iconUrl
          address
          companyId
          createdAt
          updatedAt
          companyUsersId
          userRoastLevelId
        }
        createdAt
        updatedAt
        roastLevelCoffeeId
        roastLevelUserId
      }
      companyId
      createdAt
      updatedAt
      companyUsersId
      userRoastLevelId
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
        userType
        email
        iconUrl
        address
        recipes {
          nextToken
        }
        roastLevel {
          id
          level
          createdAt
          updatedAt
          roastLevelCoffeeId
          roastLevelUserId
        }
        companyId
        createdAt
        updatedAt
        companyUsersId
        userRoastLevelId
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      profile
      logoUrl
      companyUrl
      address
      phoneNumber
      users {
        items {
          id
          name
          userType
          email
          iconUrl
          address
          companyId
          createdAt
          updatedAt
          companyUsersId
          userRoastLevelId
        }
        nextToken
      }
      recipes {
        items {
          id
          isEnabled
          title
          tasteComment
          rate
          viewCount
          grindLevel
          coffeeWaterRate
          waterTemperature
          dripperName
          brewTime
          mediaUrl
          originStory
          distributionChannel
          roastDate
          waterDescription
          grinder
          createdAt
          updatedAt
          userRecipesId
          companyRecipesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profile
        logoUrl
        companyUrl
        address
        phoneNumber
        users {
          nextToken
        }
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      isEnabled
      title
      tasteComment
      rate
      viewCount
      grindLevel
      coffeeWaterRate
      waterTemperature
      dripperName
      brewTime
      mediaUrl
      originStory
      distributionChannel
      roastDate
      waterDescription
      grinder
      createdAt
      updatedAt
      userRecipesId
      companyRecipesId
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isEnabled
        title
        tasteComment
        rate
        viewCount
        grindLevel
        coffeeWaterRate
        waterTemperature
        dripperName
        brewTime
        mediaUrl
        originStory
        distributionChannel
        roastDate
        waterDescription
        grinder
        createdAt
        updatedAt
        userRecipesId
        companyRecipesId
      }
      nextToken
    }
  }
`;
export const getCoffee = /* GraphQL */ `
  query GetCoffee($id: ID!) {
    getCoffee(id: $id) {
      id
      region
      variety
      processing
      recipe {
        id
        isEnabled
        title
        tasteComment
        rate
        viewCount
        grindLevel
        coffeeWaterRate
        waterTemperature
        dripperName
        brewTime
        mediaUrl
        originStory
        distributionChannel
        roastDate
        waterDescription
        grinder
        createdAt
        updatedAt
        userRecipesId
        companyRecipesId
      }
      createdAt
      updatedAt
      coffeeRecipeId
    }
  }
`;
export const listCoffees = /* GraphQL */ `
  query ListCoffees(
    $filter: ModelCoffeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoffees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        region
        variety
        processing
        recipe {
          id
          isEnabled
          title
          tasteComment
          rate
          viewCount
          grindLevel
          coffeeWaterRate
          waterTemperature
          dripperName
          brewTime
          mediaUrl
          originStory
          distributionChannel
          roastDate
          waterDescription
          grinder
          createdAt
          updatedAt
          userRecipesId
          companyRecipesId
        }
        createdAt
        updatedAt
        coffeeRecipeId
      }
      nextToken
    }
  }
`;
export const getRoastLevel = /* GraphQL */ `
  query GetRoastLevel($id: ID!) {
    getRoastLevel(id: $id) {
      id
      level
      coffee {
        id
        region
        variety
        processing
        recipe {
          id
          isEnabled
          title
          tasteComment
          rate
          viewCount
          grindLevel
          coffeeWaterRate
          waterTemperature
          dripperName
          brewTime
          mediaUrl
          originStory
          distributionChannel
          roastDate
          waterDescription
          grinder
          createdAt
          updatedAt
          userRecipesId
          companyRecipesId
        }
        createdAt
        updatedAt
        coffeeRecipeId
      }
      user {
        id
        name
        userType
        email
        iconUrl
        address
        recipes {
          nextToken
        }
        roastLevel {
          id
          level
          createdAt
          updatedAt
          roastLevelCoffeeId
          roastLevelUserId
        }
        companyId
        createdAt
        updatedAt
        companyUsersId
        userRoastLevelId
      }
      createdAt
      updatedAt
      roastLevelCoffeeId
      roastLevelUserId
    }
  }
`;
export const listRoastLevels = /* GraphQL */ `
  query ListRoastLevels(
    $filter: ModelRoastLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoastLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        level
        coffee {
          id
          region
          variety
          processing
          createdAt
          updatedAt
          coffeeRecipeId
        }
        user {
          id
          name
          userType
          email
          iconUrl
          address
          companyId
          createdAt
          updatedAt
          companyUsersId
          userRoastLevelId
        }
        createdAt
        updatedAt
        roastLevelCoffeeId
        roastLevelUserId
      }
      nextToken
    }
  }
`;
