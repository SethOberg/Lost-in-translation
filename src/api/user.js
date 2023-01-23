import { createHeaders } from "./index.js";
const apiUrl = process.env.REACT_APP_API_URL;

const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json;
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ username, translations: [] }),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error("Could create user with username " + username);
    }
    const data = await response.json;
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
    //user does not exist
    return [null, user.pop()];
  }

  return await createUser(username);
};
