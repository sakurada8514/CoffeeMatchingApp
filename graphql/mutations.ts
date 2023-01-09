/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createCoffee = /* GraphQL */ `
  mutation CreateCoffee(
    $input: CreateCoffeeInput!
    $condition: ModelCoffeeConditionInput
  ) {
    createCoffee(input: $input, condition: $condition) {
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
export const updateCoffee = /* GraphQL */ `
  mutation UpdateCoffee(
    $input: UpdateCoffeeInput!
    $condition: ModelCoffeeConditionInput
  ) {
    updateCoffee(input: $input, condition: $condition) {
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
export const deleteCoffee = /* GraphQL */ `
  mutation DeleteCoffee(
    $input: DeleteCoffeeInput!
    $condition: ModelCoffeeConditionInput
  ) {
    deleteCoffee(input: $input, condition: $condition) {
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
export const createRoastLevel = /* GraphQL */ `
  mutation CreateRoastLevel(
    $input: CreateRoastLevelInput!
    $condition: ModelRoastLevelConditionInput
  ) {
    createRoastLevel(input: $input, condition: $condition) {
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
export const updateRoastLevel = /* GraphQL */ `
  mutation UpdateRoastLevel(
    $input: UpdateRoastLevelInput!
    $condition: ModelRoastLevelConditionInput
  ) {
    updateRoastLevel(input: $input, condition: $condition) {
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
export const deleteRoastLevel = /* GraphQL */ `
  mutation DeleteRoastLevel(
    $input: DeleteRoastLevelInput!
    $condition: ModelRoastLevelConditionInput
  ) {
    deleteRoastLevel(input: $input, condition: $condition) {
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
