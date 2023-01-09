/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onCreateRecipe(filter: $filter) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onUpdateRecipe(filter: $filter) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onDeleteRecipe(filter: $filter) {
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
export const onCreateCoffee = /* GraphQL */ `
  subscription OnCreateCoffee($filter: ModelSubscriptionCoffeeFilterInput) {
    onCreateCoffee(filter: $filter) {
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
export const onUpdateCoffee = /* GraphQL */ `
  subscription OnUpdateCoffee($filter: ModelSubscriptionCoffeeFilterInput) {
    onUpdateCoffee(filter: $filter) {
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
export const onDeleteCoffee = /* GraphQL */ `
  subscription OnDeleteCoffee($filter: ModelSubscriptionCoffeeFilterInput) {
    onDeleteCoffee(filter: $filter) {
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
export const onCreateRoastLevel = /* GraphQL */ `
  subscription OnCreateRoastLevel(
    $filter: ModelSubscriptionRoastLevelFilterInput
  ) {
    onCreateRoastLevel(filter: $filter) {
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
export const onUpdateRoastLevel = /* GraphQL */ `
  subscription OnUpdateRoastLevel(
    $filter: ModelSubscriptionRoastLevelFilterInput
  ) {
    onUpdateRoastLevel(filter: $filter) {
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
export const onDeleteRoastLevel = /* GraphQL */ `
  subscription OnDeleteRoastLevel(
    $filter: ModelSubscriptionRoastLevelFilterInput
  ) {
    onDeleteRoastLevel(filter: $filter) {
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
