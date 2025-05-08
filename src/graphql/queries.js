/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = /* GraphQL */ `
  query GetPet($customerId: Int!, $uuid: String!) {
    getPet(customerId: $customerId, uuid: $uuid) {
      uuid
      customerId
      farmGate
      gender
      species
      weight
      foodChain
      cphNumber
      accountType
      active
      medication
      name
      healthy
      medicationNotes
      foodUse
      pregnant
      dob
      healthNotes
      count
      passport
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getPets = /* GraphQL */ `
  query GetPets($customerId: Int!) {
    getPets(customerId: $customerId) {
      uuid
      customerId
      farmGate
      gender
      species
      weight
      foodChain
      cphNumber
      accountType
      active
      medication
      name
      healthy
      medicationNotes
      foodUse
      pregnant
      dob
      healthNotes
      count
      passport
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getPetSnapshot = /* GraphQL */ `
  query GetPetSnapshot($uuid: String!) {
    getPetSnapshot(uuid: $uuid) {
      uuid
      petUuid
      customerId
      orderId
      quoteItemId
      farmGate
      gender
      species
      weight
      foodChain
      cphNumber
      accountType
      active
      medication
      name
      healthy
      medicationNotes
      foodUse
      pregnant
      dob
      healthNotes
      count
      passport
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
