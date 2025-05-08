/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addPet = /* GraphQL */ `
  mutation AddPet($input: PetInput) {
    addPet(input: $input) {
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
export const addPetSnapshot = /* GraphQL */ `
  mutation AddPetSnapshot($input: PetSnapshotInput) {
    addPetSnapshot(input: $input) {
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
export const deletePet = /* GraphQL */ `
  mutation DeletePet($customerId: Int!, $uuid: String!) {
    deletePet(customerId: $customerId, uuid: $uuid) {
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
export const deletePetSnapshot = /* GraphQL */ `
  mutation DeletePetSnapshot($uuid: String!) {
    deletePetSnapshot(uuid: $uuid) {
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
export const updatePet = /* GraphQL */ `
  mutation UpdatePet($input: UpdatePetsInput) {
    updatePet(input: $input) {
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
export const updatePetSnapshot = /* GraphQL */ `
  mutation UpdatePetSnapshot($input: UpdatePetSnapshotInput) {
    updatePetSnapshot(input: $input) {
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
