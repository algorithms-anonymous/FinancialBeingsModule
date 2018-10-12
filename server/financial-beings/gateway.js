'use strict';

const graphql = require('graphql-request');

const AAUserModule = process.env.AA_USER_MODULE;

const client = new graphql.GraphQLClient(AAUserModule, {
  headers: {}
});

/**
* Get all users from Users Module
* @return {object} User module information
* @error {object} Error
*/
async function getAllUsers() {
  try {
    const query = `
    query {
      users {
       id
       referrerId
       firstName
       lastName
       email 
     }
    }`;

    return await client.request(query);
  } catch (err) {
    throw new Error('Getting all users failed');
  }
}

/**
* Get all users from Users Module
* @param {string} userId - User identification string
* @return {object} User module information
* @error {object} Error
*/
async function getUserById(userId) {
  try {
    const query = `
    query {
      user(id:${userId}) {
       id
       authId
       referrerId
       alias
       firstName
       middleName
       lastName
       bio
       email
       emailVerified
       isDeveloper
       isTrader
       isDataAnalyst
       avatarHandle
       avatarChangeDate
       sessionToken
       role {
         id
       }
     }
   }
    `;
  
    return await client.request(query);
  } catch (err) {
    throw new Error('Getting user by id failed');
  }
}

/**
* Gets single user from Users Module
* @param {string} authId - Authorization identification
* @return {object} User module information
* @error {object} Error
*/
async function getUserByAuthId(authId) {
  try {
    const query = `
    query {
      userByAuthId(authId:${authId}) {
       id
       authId
       referrerId
       alias
       firstName
       middleName
       lastName
       bio
       email
       emailVerified
       isDeveloper
       isTrader
       isDataAnalyst
       avatarHandle
       avatarChangeDate
       sessionToken
       role {
         id
       }
     }
   }   
   `;

    return await client.request(query);
  } catch (err) {
    throw new Error('Getting user by auth failed');
  }
}

/**
* Gets user role from User Module
* @param {integer} roleId - Role identification number
* @return {object} User module information
* @error {object} Error
*/
async function getUserRole(roleId) {
  try {
    const query = `
    query {
      role (id: ${roleId}) {
        id
        name
        users {
          id
        }
      }
   }   
   `;

    return await client.request(query);
  } catch (err) {
    throw new Error('Getting user role failed');
  }
}

/**
* Gets user decendents from User Module
* @param {string} userId - User identification number
* @return {object} User module information
* @error {object} Error
*/
async function getUserDescendents(userId) {
  try {
    const query = `
    query {
      descendents(id: ${userId}) {
       id
       referrerId
       alias
       firstName
       middleName
       lastName
       descendents {
         id
       }
     }
   }
    `;

    return await client.request(query);
  } catch (err) {
    throw new Error('Getting user decendents failed');
  }
}

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  getUserByAuthId: getUserByAuthId,
  getUserRole: getUserRole,
  getUserDescendents: getUserDescendents
};