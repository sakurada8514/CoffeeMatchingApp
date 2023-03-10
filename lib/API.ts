import { API, graphqlOperation } from "aws-amplify";
import { useNotificationStore } from "stores/notifications";

export const mutation = async <T>(query, input: T) => {
  try {
    return await API.graphql(graphqlOperation(query, { input }));
  } catch (error) {
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message: "エラーが発生しました。時間をおいて再度お試しください。",
    });
    throw error;
  }
};

// 以下自動生成

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null;
  name: string;
  userType: UserType;
  email: string;
  iconUrl?: string | null;
  address?: string | null;
  companyId?: string | null;
  companyUsersId?: string | null;
  userRoastLevelId?: string | null;
};

export enum UserType {
  General = "General",
  Company = "Company",
}

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  userType?: ModelUserTypeInput | null;
  email?: ModelStringInput | null;
  iconUrl?: ModelStringInput | null;
  address?: ModelStringInput | null;
  companyId?: ModelIDInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  companyUsersId?: ModelIDInput | null;
  userRoastLevelId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelUserTypeInput = {
  eq?: UserType | null;
  ne?: UserType | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  name: string;
  userType: UserType;
  email: string;
  iconUrl?: string | null;
  address?: string | null;
  recipes?: ModelRecipeConnection | null;
  roastLevel?: roastLevel | null;
  companyId?: string | null;
  createdAt: string;
  updatedAt: string;
  companyUsersId?: string | null;
  userRoastLevelId?: string | null;
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection";
  items: Array<Recipe | null>;
  nextToken?: string | null;
};

export type Recipe = {
  __typename: "Recipe";
  id: string;
  isEnabled: boolean;
  title: string;
  tasteComment: string;
  rate?: number | null;
  viewCount: number;
  grindLevel?: number | null;
  coffeeWaterRate?: string | null;
  waterTemperature?: number | null;
  dripperName?: string | null;
  brewTime?: string | null;
  mediaUrl?: string | null;
  originStory?: string | null;
  distributionChannel?: string | null;
  roastDate?: string | null;
  waterDescription?: string | null;
  grinder?: string | null;
  createdAt: string;
  updatedAt: string;
  userRecipesId?: string | null;
  companyRecipesId?: string | null;
};

export type roastLevel = {
  __typename: "roastLevel";
  id: string;
  level: Level;
  coffee?: Coffee | null;
  user?: User | null;
  createdAt: string;
  updatedAt: string;
  roastLevelCoffeeId?: string | null;
  roastLevelUserId?: string | null;
};

export enum Level {
  Light = "Light",
  MediumLight = "MediumLight",
  Medium = "Medium",
  MediumDark = "MediumDark",
  Dark = "Dark",
}

export type Coffee = {
  __typename: "Coffee";
  id: string;
  region: string;
  variety: string;
  processing?: Processing | null;
  recipe: Recipe;
  createdAt: string;
  updatedAt: string;
  coffeeRecipeId: string;
};

export enum Processing {
  Washed = "Washed",
  Honey = "Honey",
  Natural = "Natural",
  Anaerobic = "Anaerobic",
  Anarobic = "Anarobic",
  Carbonic = "Carbonic",
  Mercelation = "Mercelation",
  Others = "Others",
}

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  userType?: UserType | null;
  email?: string | null;
  iconUrl?: string | null;
  address?: string | null;
  companyId?: string | null;
  companyUsersId?: string | null;
  userRoastLevelId?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateCompanyInput = {
  id?: string | null;
  name: string;
  profile?: string | null;
  logoUrl?: string | null;
  companyUrl?: string | null;
  address: string;
  phoneNumber: string;
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null;
  profile?: ModelStringInput | null;
  logoUrl?: ModelStringInput | null;
  companyUrl?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  name: string;
  profile?: string | null;
  logoUrl?: string | null;
  companyUrl?: string | null;
  address: string;
  phoneNumber: string;
  users?: ModelUserConnection | null;
  recipes?: ModelRecipeConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  profile?: string | null;
  logoUrl?: string | null;
  companyUrl?: string | null;
  address?: string | null;
  phoneNumber?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateRecipeInput = {
  id?: string | null;
  isEnabled: boolean;
  title: string;
  tasteComment: string;
  rate?: number | null;
  viewCount: number;
  grindLevel?: number | null;
  coffeeWaterRate?: string | null;
  waterTemperature?: number | null;
  dripperName?: string | null;
  brewTime?: string | null;
  mediaUrl?: string | null;
  originStory?: string | null;
  distributionChannel?: string | null;
  roastDate?: string | null;
  waterDescription?: string | null;
  grinder?: string | null;
  userRecipesId?: string | null;
  companyRecipesId?: string | null;
};

export type ModelRecipeConditionInput = {
  isEnabled?: ModelBooleanInput | null;
  title?: ModelStringInput | null;
  tasteComment?: ModelStringInput | null;
  rate?: ModelIntInput | null;
  viewCount?: ModelIntInput | null;
  grindLevel?: ModelIntInput | null;
  coffeeWaterRate?: ModelStringInput | null;
  waterTemperature?: ModelIntInput | null;
  dripperName?: ModelStringInput | null;
  brewTime?: ModelStringInput | null;
  mediaUrl?: ModelStringInput | null;
  originStory?: ModelStringInput | null;
  distributionChannel?: ModelStringInput | null;
  roastDate?: ModelStringInput | null;
  waterDescription?: ModelStringInput | null;
  grinder?: ModelStringInput | null;
  and?: Array<ModelRecipeConditionInput | null> | null;
  or?: Array<ModelRecipeConditionInput | null> | null;
  not?: ModelRecipeConditionInput | null;
  userRecipesId?: ModelIDInput | null;
  companyRecipesId?: ModelIDInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateRecipeInput = {
  id: string;
  isEnabled?: boolean | null;
  title?: string | null;
  tasteComment?: string | null;
  rate?: number | null;
  viewCount?: number | null;
  grindLevel?: number | null;
  coffeeWaterRate?: string | null;
  waterTemperature?: number | null;
  dripperName?: string | null;
  brewTime?: string | null;
  mediaUrl?: string | null;
  originStory?: string | null;
  distributionChannel?: string | null;
  roastDate?: string | null;
  waterDescription?: string | null;
  grinder?: string | null;
  userRecipesId?: string | null;
  companyRecipesId?: string | null;
};

export type DeleteRecipeInput = {
  id: string;
};

export type CreateCoffeeInput = {
  id?: string | null;
  region: string;
  variety: string;
  processing?: Processing | null;
  coffeeRecipeId: string;
};

export type ModelCoffeeConditionInput = {
  region?: ModelStringInput | null;
  variety?: ModelStringInput | null;
  processing?: ModelProcessingInput | null;
  and?: Array<ModelCoffeeConditionInput | null> | null;
  or?: Array<ModelCoffeeConditionInput | null> | null;
  not?: ModelCoffeeConditionInput | null;
  coffeeRecipeId?: ModelIDInput | null;
};

export type ModelProcessingInput = {
  eq?: Processing | null;
  ne?: Processing | null;
};

export type UpdateCoffeeInput = {
  id: string;
  region?: string | null;
  variety?: string | null;
  processing?: Processing | null;
  coffeeRecipeId?: string | null;
};

export type DeleteCoffeeInput = {
  id: string;
};

export type CreateRoastLevelInput = {
  id?: string | null;
  level: Level;
  roastLevelCoffeeId?: string | null;
  roastLevelUserId?: string | null;
};

export type ModelRoastLevelConditionInput = {
  level?: ModelLevelInput | null;
  and?: Array<ModelRoastLevelConditionInput | null> | null;
  or?: Array<ModelRoastLevelConditionInput | null> | null;
  not?: ModelRoastLevelConditionInput | null;
  roastLevelCoffeeId?: ModelIDInput | null;
  roastLevelUserId?: ModelIDInput | null;
};

export type ModelLevelInput = {
  eq?: Level | null;
  ne?: Level | null;
};

export type UpdateRoastLevelInput = {
  id: string;
  level?: Level | null;
  roastLevelCoffeeId?: string | null;
  roastLevelUserId?: string | null;
};

export type DeleteRoastLevelInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  userType?: ModelUserTypeInput | null;
  email?: ModelStringInput | null;
  iconUrl?: ModelStringInput | null;
  address?: ModelStringInput | null;
  companyId?: ModelIDInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  companyUsersId?: ModelIDInput | null;
  userRoastLevelId?: ModelIDInput | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  profile?: ModelStringInput | null;
  logoUrl?: ModelStringInput | null;
  companyUrl?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null;
  isEnabled?: ModelBooleanInput | null;
  title?: ModelStringInput | null;
  tasteComment?: ModelStringInput | null;
  rate?: ModelIntInput | null;
  viewCount?: ModelIntInput | null;
  grindLevel?: ModelIntInput | null;
  coffeeWaterRate?: ModelStringInput | null;
  waterTemperature?: ModelIntInput | null;
  dripperName?: ModelStringInput | null;
  brewTime?: ModelStringInput | null;
  mediaUrl?: ModelStringInput | null;
  originStory?: ModelStringInput | null;
  distributionChannel?: ModelStringInput | null;
  roastDate?: ModelStringInput | null;
  waterDescription?: ModelStringInput | null;
  grinder?: ModelStringInput | null;
  and?: Array<ModelRecipeFilterInput | null> | null;
  or?: Array<ModelRecipeFilterInput | null> | null;
  not?: ModelRecipeFilterInput | null;
  userRecipesId?: ModelIDInput | null;
  companyRecipesId?: ModelIDInput | null;
};

export type ModelCoffeeFilterInput = {
  id?: ModelIDInput | null;
  region?: ModelStringInput | null;
  variety?: ModelStringInput | null;
  processing?: ModelProcessingInput | null;
  and?: Array<ModelCoffeeFilterInput | null> | null;
  or?: Array<ModelCoffeeFilterInput | null> | null;
  not?: ModelCoffeeFilterInput | null;
  coffeeRecipeId?: ModelIDInput | null;
};

export type ModelCoffeeConnection = {
  __typename: "ModelCoffeeConnection";
  items: Array<Coffee | null>;
  nextToken?: string | null;
};

export type ModelRoastLevelFilterInput = {
  id?: ModelIDInput | null;
  level?: ModelLevelInput | null;
  and?: Array<ModelRoastLevelFilterInput | null> | null;
  or?: Array<ModelRoastLevelFilterInput | null> | null;
  not?: ModelRoastLevelFilterInput | null;
  roastLevelCoffeeId?: ModelIDInput | null;
  roastLevelUserId?: ModelIDInput | null;
};

export type ModelRoastLevelConnection = {
  __typename: "ModelRoastLevelConnection";
  items: Array<roastLevel | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  userType?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  iconUrl?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  companyId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  profile?: ModelSubscriptionStringInput | null;
  logoUrl?: ModelSubscriptionStringInput | null;
  companyUrl?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  phoneNumber?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
};

export type ModelSubscriptionRecipeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  isEnabled?: ModelSubscriptionBooleanInput | null;
  title?: ModelSubscriptionStringInput | null;
  tasteComment?: ModelSubscriptionStringInput | null;
  rate?: ModelSubscriptionIntInput | null;
  viewCount?: ModelSubscriptionIntInput | null;
  grindLevel?: ModelSubscriptionIntInput | null;
  coffeeWaterRate?: ModelSubscriptionStringInput | null;
  waterTemperature?: ModelSubscriptionIntInput | null;
  dripperName?: ModelSubscriptionStringInput | null;
  brewTime?: ModelSubscriptionStringInput | null;
  mediaUrl?: ModelSubscriptionStringInput | null;
  originStory?: ModelSubscriptionStringInput | null;
  distributionChannel?: ModelSubscriptionStringInput | null;
  roastDate?: ModelSubscriptionStringInput | null;
  waterDescription?: ModelSubscriptionStringInput | null;
  grinder?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRecipeFilterInput | null> | null;
  or?: Array<ModelSubscriptionRecipeFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionCoffeeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  region?: ModelSubscriptionStringInput | null;
  variety?: ModelSubscriptionStringInput | null;
  processing?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCoffeeFilterInput | null> | null;
  or?: Array<ModelSubscriptionCoffeeFilterInput | null> | null;
};

export type ModelSubscriptionRoastLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  level?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRoastLevelFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoastLevelFilterInput | null> | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    id: string;
    name: string;
    userType: UserType;
    email: string;
    iconUrl?: string | null;
    address?: string | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    roastLevel?: {
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null;
    companyId?: string | null;
    createdAt: string;
    updatedAt: string;
    companyUsersId?: string | null;
    userRoastLevelId?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    id: string;
    name: string;
    userType: UserType;
    email: string;
    iconUrl?: string | null;
    address?: string | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    roastLevel?: {
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null;
    companyId?: string | null;
    createdAt: string;
    updatedAt: string;
    companyUsersId?: string | null;
    userRoastLevelId?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    id: string;
    name: string;
    userType: UserType;
    email: string;
    iconUrl?: string | null;
    address?: string | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    roastLevel?: {
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null;
    companyId?: string | null;
    createdAt: string;
    updatedAt: string;
    companyUsersId?: string | null;
    userRoastLevelId?: string | null;
  } | null;
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type CreateCompanyMutation = {
  createCompany?: {
    __typename: "Company";
    id: string;
    name: string;
    profile?: string | null;
    logoUrl?: string | null;
    companyUrl?: string | null;
    address: string;
    phoneNumber: string;
    users?: {
      __typename: "ModelUserConnection";
      items: Array<{
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type UpdateCompanyMutation = {
  updateCompany?: {
    __typename: "Company";
    id: string;
    name: string;
    profile?: string | null;
    logoUrl?: string | null;
    companyUrl?: string | null;
    address: string;
    phoneNumber: string;
    users?: {
      __typename: "ModelUserConnection";
      items: Array<{
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type DeleteCompanyMutation = {
  deleteCompany?: {
    __typename: "Company";
    id: string;
    name: string;
    profile?: string | null;
    logoUrl?: string | null;
    companyUrl?: string | null;
    address: string;
    phoneNumber: string;
    users?: {
      __typename: "ModelUserConnection";
      items: Array<{
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput;
  condition?: ModelRecipeConditionInput | null;
};

export type CreateRecipeMutation = {
  createRecipe?: {
    __typename: "Recipe";
    id: string;
    isEnabled: boolean;
    title: string;
    tasteComment: string;
    rate?: number | null;
    viewCount: number;
    grindLevel?: number | null;
    coffeeWaterRate?: string | null;
    waterTemperature?: number | null;
    dripperName?: string | null;
    brewTime?: string | null;
    mediaUrl?: string | null;
    originStory?: string | null;
    distributionChannel?: string | null;
    roastDate?: string | null;
    waterDescription?: string | null;
    grinder?: string | null;
    createdAt: string;
    updatedAt: string;
    userRecipesId?: string | null;
    companyRecipesId?: string | null;
  } | null;
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput;
  condition?: ModelRecipeConditionInput | null;
};

export type UpdateRecipeMutation = {
  updateRecipe?: {
    __typename: "Recipe";
    id: string;
    isEnabled: boolean;
    title: string;
    tasteComment: string;
    rate?: number | null;
    viewCount: number;
    grindLevel?: number | null;
    coffeeWaterRate?: string | null;
    waterTemperature?: number | null;
    dripperName?: string | null;
    brewTime?: string | null;
    mediaUrl?: string | null;
    originStory?: string | null;
    distributionChannel?: string | null;
    roastDate?: string | null;
    waterDescription?: string | null;
    grinder?: string | null;
    createdAt: string;
    updatedAt: string;
    userRecipesId?: string | null;
    companyRecipesId?: string | null;
  } | null;
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput;
  condition?: ModelRecipeConditionInput | null;
};

export type DeleteRecipeMutation = {
  deleteRecipe?: {
    __typename: "Recipe";
    id: string;
    isEnabled: boolean;
    title: string;
    tasteComment: string;
    rate?: number | null;
    viewCount: number;
    grindLevel?: number | null;
    coffeeWaterRate?: string | null;
    waterTemperature?: number | null;
    dripperName?: string | null;
    brewTime?: string | null;
    mediaUrl?: string | null;
    originStory?: string | null;
    distributionChannel?: string | null;
    roastDate?: string | null;
    waterDescription?: string | null;
    grinder?: string | null;
    createdAt: string;
    updatedAt: string;
    userRecipesId?: string | null;
    companyRecipesId?: string | null;
  } | null;
};

export type CreateCoffeeMutationVariables = {
  input: CreateCoffeeInput;
  condition?: ModelCoffeeConditionInput | null;
};

export type CreateCoffeeMutation = {
  createCoffee?: {
    __typename: "Coffee";
    id: string;
    region: string;
    variety: string;
    processing?: Processing | null;
    recipe: {
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    coffeeRecipeId: string;
  } | null;
};

export type UpdateCoffeeMutationVariables = {
  input: UpdateCoffeeInput;
  condition?: ModelCoffeeConditionInput | null;
};

export type UpdateCoffeeMutation = {
  updateCoffee?: {
    __typename: "Coffee";
    id: string;
    region: string;
    variety: string;
    processing?: Processing | null;
    recipe: {
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    coffeeRecipeId: string;
  } | null;
};

export type DeleteCoffeeMutationVariables = {
  input: DeleteCoffeeInput;
  condition?: ModelCoffeeConditionInput | null;
};

export type DeleteCoffeeMutation = {
  deleteCoffee?: {
    __typename: "Coffee";
    id: string;
    region: string;
    variety: string;
    processing?: Processing | null;
    recipe: {
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    coffeeRecipeId: string;
  } | null;
};

export type CreateRoastLevelMutationVariables = {
  input: CreateRoastLevelInput;
  condition?: ModelRoastLevelConditionInput | null;
};

export type CreateRoastLevelMutation = {
  createRoastLevel?: {
    __typename: "roastLevel";
    id: string;
    level: Level;
    coffee?: {
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roastLevelCoffeeId?: string | null;
    roastLevelUserId?: string | null;
  } | null;
};

export type UpdateRoastLevelMutationVariables = {
  input: UpdateRoastLevelInput;
  condition?: ModelRoastLevelConditionInput | null;
};

export type UpdateRoastLevelMutation = {
  updateRoastLevel?: {
    __typename: "roastLevel";
    id: string;
    level: Level;
    coffee?: {
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roastLevelCoffeeId?: string | null;
    roastLevelUserId?: string | null;
  } | null;
};

export type DeleteRoastLevelMutationVariables = {
  input: DeleteRoastLevelInput;
  condition?: ModelRoastLevelConditionInput | null;
};

export type DeleteRoastLevelMutation = {
  deleteRoastLevel?: {
    __typename: "roastLevel";
    id: string;
    level: Level;
    coffee?: {
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roastLevelCoffeeId?: string | null;
    roastLevelUserId?: string | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    id: string;
    name: string;
    userType: UserType;
    email: string;
    iconUrl?: string | null;
    address?: string | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    roastLevel?: {
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null;
    companyId?: string | null;
    createdAt: string;
    updatedAt: string;
    companyUsersId?: string | null;
    userRoastLevelId?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCompanyQueryVariables = {
  id: string;
};

export type GetCompanyQuery = {
  getCompany?: {
    __typename: "Company";
    id: string;
    name: string;
    profile?: string | null;
    logoUrl?: string | null;
    companyUrl?: string | null;
    address: string;
    phoneNumber: string;
    users?: {
      __typename: "ModelUserConnection";
      items: Array<{
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompaniesQuery = {
  listCompanies?: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      name: string;
      profile?: string | null;
      logoUrl?: string | null;
      companyUrl?: string | null;
      address: string;
      phoneNumber: string;
      users?: {
        __typename: "ModelUserConnection";
        nextToken?: string | null;
      } | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetRecipeQueryVariables = {
  id: string;
};

export type GetRecipeQuery = {
  getRecipe?: {
    __typename: "Recipe";
    id: string;
    isEnabled: boolean;
    title: string;
    tasteComment: string;
    rate?: number | null;
    viewCount: number;
    grindLevel?: number | null;
    coffeeWaterRate?: string | null;
    waterTemperature?: number | null;
    dripperName?: string | null;
    brewTime?: string | null;
    mediaUrl?: string | null;
    originStory?: string | null;
    distributionChannel?: string | null;
    roastDate?: string | null;
    waterDescription?: string | null;
    grinder?: string | null;
    createdAt: string;
    updatedAt: string;
    userRecipesId?: string | null;
    companyRecipesId?: string | null;
  } | null;
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRecipesQuery = {
  listRecipes?: {
    __typename: "ModelRecipeConnection";
    items: Array<{
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCoffeeQueryVariables = {
  id: string;
};

export type GetCoffeeQuery = {
  getCoffee?: {
    __typename: "Coffee";
    id: string;
    region: string;
    variety: string;
    processing?: Processing | null;
    recipe: {
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    coffeeRecipeId: string;
  } | null;
};

export type ListCoffeesQueryVariables = {
  filter?: ModelCoffeeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCoffeesQuery = {
  listCoffees?: {
    __typename: "ModelCoffeeConnection";
    items: Array<{
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetRoastLevelQueryVariables = {
  id: string;
};

export type GetRoastLevelQuery = {
  getRoastLevel?: {
    __typename: "roastLevel";
    id: string;
    level: Level;
    coffee?: {
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roastLevelCoffeeId?: string | null;
    roastLevelUserId?: string | null;
  } | null;
};

export type ListRoastLevelsQueryVariables = {
  filter?: ModelRoastLevelFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRoastLevelsQuery = {
  listRoastLevels?: {
    __typename: "ModelRoastLevelConnection";
    items: Array<{
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    id: string;
    name: string;
    userType: UserType;
    email: string;
    iconUrl?: string | null;
    address?: string | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    roastLevel?: {
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null;
    companyId?: string | null;
    createdAt: string;
    updatedAt: string;
    companyUsersId?: string | null;
    userRoastLevelId?: string | null;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    id: string;
    name: string;
    userType: UserType;
    email: string;
    iconUrl?: string | null;
    address?: string | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    roastLevel?: {
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null;
    companyId?: string | null;
    createdAt: string;
    updatedAt: string;
    companyUsersId?: string | null;
    userRoastLevelId?: string | null;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    id: string;
    name: string;
    userType: UserType;
    email: string;
    iconUrl?: string | null;
    address?: string | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    roastLevel?: {
      __typename: "roastLevel";
      id: string;
      level: Level;
      coffee?: {
        __typename: "Coffee";
        id: string;
        region: string;
        variety: string;
        processing?: Processing | null;
        createdAt: string;
        updatedAt: string;
        coffeeRecipeId: string;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      roastLevelCoffeeId?: string | null;
      roastLevelUserId?: string | null;
    } | null;
    companyId?: string | null;
    createdAt: string;
    updatedAt: string;
    companyUsersId?: string | null;
    userRoastLevelId?: string | null;
  } | null;
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
};

export type OnCreateCompanySubscription = {
  onCreateCompany?: {
    __typename: "Company";
    id: string;
    name: string;
    profile?: string | null;
    logoUrl?: string | null;
    companyUrl?: string | null;
    address: string;
    phoneNumber: string;
    users?: {
      __typename: "ModelUserConnection";
      items: Array<{
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?: {
    __typename: "Company";
    id: string;
    name: string;
    profile?: string | null;
    logoUrl?: string | null;
    companyUrl?: string | null;
    address: string;
    phoneNumber: string;
    users?: {
      __typename: "ModelUserConnection";
      items: Array<{
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?: {
    __typename: "Company";
    id: string;
    name: string;
    profile?: string | null;
    logoUrl?: string | null;
    companyUrl?: string | null;
    address: string;
    phoneNumber: string;
    users?: {
      __typename: "ModelUserConnection";
      items: Array<{
        __typename: "User";
        id: string;
        name: string;
        userType: UserType;
        email: string;
        iconUrl?: string | null;
        address?: string | null;
        companyId?: string | null;
        createdAt: string;
        updatedAt: string;
        companyUsersId?: string | null;
        userRoastLevelId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    recipes?: {
      __typename: "ModelRecipeConnection";
      items: Array<{
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null;
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?: {
    __typename: "Recipe";
    id: string;
    isEnabled: boolean;
    title: string;
    tasteComment: string;
    rate?: number | null;
    viewCount: number;
    grindLevel?: number | null;
    coffeeWaterRate?: string | null;
    waterTemperature?: number | null;
    dripperName?: string | null;
    brewTime?: string | null;
    mediaUrl?: string | null;
    originStory?: string | null;
    distributionChannel?: string | null;
    roastDate?: string | null;
    waterDescription?: string | null;
    grinder?: string | null;
    createdAt: string;
    updatedAt: string;
    userRecipesId?: string | null;
    companyRecipesId?: string | null;
  } | null;
};

export type OnUpdateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null;
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?: {
    __typename: "Recipe";
    id: string;
    isEnabled: boolean;
    title: string;
    tasteComment: string;
    rate?: number | null;
    viewCount: number;
    grindLevel?: number | null;
    coffeeWaterRate?: string | null;
    waterTemperature?: number | null;
    dripperName?: string | null;
    brewTime?: string | null;
    mediaUrl?: string | null;
    originStory?: string | null;
    distributionChannel?: string | null;
    roastDate?: string | null;
    waterDescription?: string | null;
    grinder?: string | null;
    createdAt: string;
    updatedAt: string;
    userRecipesId?: string | null;
    companyRecipesId?: string | null;
  } | null;
};

export type OnDeleteRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null;
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?: {
    __typename: "Recipe";
    id: string;
    isEnabled: boolean;
    title: string;
    tasteComment: string;
    rate?: number | null;
    viewCount: number;
    grindLevel?: number | null;
    coffeeWaterRate?: string | null;
    waterTemperature?: number | null;
    dripperName?: string | null;
    brewTime?: string | null;
    mediaUrl?: string | null;
    originStory?: string | null;
    distributionChannel?: string | null;
    roastDate?: string | null;
    waterDescription?: string | null;
    grinder?: string | null;
    createdAt: string;
    updatedAt: string;
    userRecipesId?: string | null;
    companyRecipesId?: string | null;
  } | null;
};

export type OnCreateCoffeeSubscriptionVariables = {
  filter?: ModelSubscriptionCoffeeFilterInput | null;
};

export type OnCreateCoffeeSubscription = {
  onCreateCoffee?: {
    __typename: "Coffee";
    id: string;
    region: string;
    variety: string;
    processing?: Processing | null;
    recipe: {
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    coffeeRecipeId: string;
  } | null;
};

export type OnUpdateCoffeeSubscriptionVariables = {
  filter?: ModelSubscriptionCoffeeFilterInput | null;
};

export type OnUpdateCoffeeSubscription = {
  onUpdateCoffee?: {
    __typename: "Coffee";
    id: string;
    region: string;
    variety: string;
    processing?: Processing | null;
    recipe: {
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    coffeeRecipeId: string;
  } | null;
};

export type OnDeleteCoffeeSubscriptionVariables = {
  filter?: ModelSubscriptionCoffeeFilterInput | null;
};

export type OnDeleteCoffeeSubscription = {
  onDeleteCoffee?: {
    __typename: "Coffee";
    id: string;
    region: string;
    variety: string;
    processing?: Processing | null;
    recipe: {
      __typename: "Recipe";
      id: string;
      isEnabled: boolean;
      title: string;
      tasteComment: string;
      rate?: number | null;
      viewCount: number;
      grindLevel?: number | null;
      coffeeWaterRate?: string | null;
      waterTemperature?: number | null;
      dripperName?: string | null;
      brewTime?: string | null;
      mediaUrl?: string | null;
      originStory?: string | null;
      distributionChannel?: string | null;
      roastDate?: string | null;
      waterDescription?: string | null;
      grinder?: string | null;
      createdAt: string;
      updatedAt: string;
      userRecipesId?: string | null;
      companyRecipesId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    coffeeRecipeId: string;
  } | null;
};

export type OnCreateRoastLevelSubscriptionVariables = {
  filter?: ModelSubscriptionRoastLevelFilterInput | null;
};

export type OnCreateRoastLevelSubscription = {
  onCreateRoastLevel?: {
    __typename: "roastLevel";
    id: string;
    level: Level;
    coffee?: {
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roastLevelCoffeeId?: string | null;
    roastLevelUserId?: string | null;
  } | null;
};

export type OnUpdateRoastLevelSubscriptionVariables = {
  filter?: ModelSubscriptionRoastLevelFilterInput | null;
};

export type OnUpdateRoastLevelSubscription = {
  onUpdateRoastLevel?: {
    __typename: "roastLevel";
    id: string;
    level: Level;
    coffee?: {
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roastLevelCoffeeId?: string | null;
    roastLevelUserId?: string | null;
  } | null;
};

export type OnDeleteRoastLevelSubscriptionVariables = {
  filter?: ModelSubscriptionRoastLevelFilterInput | null;
};

export type OnDeleteRoastLevelSubscription = {
  onDeleteRoastLevel?: {
    __typename: "roastLevel";
    id: string;
    level: Level;
    coffee?: {
      __typename: "Coffee";
      id: string;
      region: string;
      variety: string;
      processing?: Processing | null;
      recipe: {
        __typename: "Recipe";
        id: string;
        isEnabled: boolean;
        title: string;
        tasteComment: string;
        rate?: number | null;
        viewCount: number;
        grindLevel?: number | null;
        coffeeWaterRate?: string | null;
        waterTemperature?: number | null;
        dripperName?: string | null;
        brewTime?: string | null;
        mediaUrl?: string | null;
        originStory?: string | null;
        distributionChannel?: string | null;
        roastDate?: string | null;
        waterDescription?: string | null;
        grinder?: string | null;
        createdAt: string;
        updatedAt: string;
        userRecipesId?: string | null;
        companyRecipesId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      coffeeRecipeId: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      name: string;
      userType: UserType;
      email: string;
      iconUrl?: string | null;
      address?: string | null;
      recipes?: {
        __typename: "ModelRecipeConnection";
        nextToken?: string | null;
      } | null;
      roastLevel?: {
        __typename: "roastLevel";
        id: string;
        level: Level;
        createdAt: string;
        updatedAt: string;
        roastLevelCoffeeId?: string | null;
        roastLevelUserId?: string | null;
      } | null;
      companyId?: string | null;
      createdAt: string;
      updatedAt: string;
      companyUsersId?: string | null;
      userRoastLevelId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roastLevelCoffeeId?: string | null;
    roastLevelUserId?: string | null;
  } | null;
};
