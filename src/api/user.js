import { createHeaders } from "./index.js";
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

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

export const addTranslationHistory = async (sentence, userId) => {
  console.log(createHeaders);
  console.log("This is the api Url: " + apiUrl);
  const response = await fetch(`${apiUrl}/${userId}`);
  if (!response.ok) {
    throw new Error("Could not retrieve translations history");
  }
  const data = await response.json();
  let currentTranslations = data.translations;
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
