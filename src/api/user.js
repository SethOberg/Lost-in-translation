import { createHeaders } from "./index.js";
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

/**
 * checkForUser is a function which recieves a username input and sends a GET request to search for the requested user.
 *
 * @param {username} username - a username to search for available user.
 * @returns {Array}  returns an array with response state and data.
 */
const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();

    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

/**
 * createUser is a function which sends API POST request to an API endpoint upon creation of a new user.
 *
 * @param {username} username - a username for the new user that will be created.
 * @returns {Array}  returns an array with response state and data.
 */
const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ username, translations: [] }),
    });
    if (!response.ok) {
      throw new Error("Could create user with username " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

/**
 * loginuser is a function which handles the login, it recieves a username value and searches through the API to check if the user exists.
 *
 * @param {username} username - an array of items to be added to the select list.
 * @returns {Array} This function returns an array with response status code and a user. Will return null if user was not found.
 */
export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  if (checkError !== null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    //User already exists
    return [null, user.pop()];
  }

  //User does not exist
  return await createUser(username);
};

/**
 * addTranslationHistory is a function stores a recent translated word or sentence.
 * The function expects a String value and userId arguments to store the recent translation for the specific user in the API.
 *
 * @param {sentence, userId} sentence - the string to be added to the user's translation history.
 * @returns {JSON} This function will return a JSON response.
 */
export const addTranslationHistory = async (sentence, userId) => {
  console.log(createHeaders);
  console.log("This is the api Url: " + apiUrl);
  const response = await fetch(`${apiUrl}/${userId}`);
  if (!response.ok) {
    throw new Error("Could not retrieve translations history");
  }
  const data = await response.json();
  let currentTranslations = [...data.translations];
  console.log(typeof currentTranslations);
  if (currentTranslations.length > 9) {
    currentTranslations.shift();
  }
  fetch(`${apiUrl}/${userId}`, {
    method: "PATCH", // NB: Set method to PATCH
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      // Provide new translations to add to user with id 1
      translations: [...currentTranslations, sentence],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not update translations history");
      }
      return response.json();
    })
    .then((updatedUser) => {
      // updatedUser is the user with the Patched data
      console.log("It worked bro!!!");
      console.log(updatedUser);
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * rempveTranslationHistory is a function which truncates all your translation history in the API.
 * The function expects userId arguments.
 *
 * @param {sentence, userId} sentence - the string to be added to the user's translation history.
 * @returns {JSON} This function will return a JSON response.
 */
export const removeTranslationHistory = async (userId) => {
  fetch(`${apiUrl}/${userId}`, {
    method: "PATCH", // NB: Set method to PATCH
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      // Provide new translations to add to user with id 1
      translations: [],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not update translations history");
      }
      return response.json();
    })
    .then((updatedUser) => {
      // updatedUser is the user with the Patched data
      console.log("It worked bro!!!");
      console.log(updatedUser);
    })
    .catch((error) => {
      console.log(error);
    });
};
