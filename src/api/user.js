import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json;
    //What is the purpose of returning null?
    return [null, data];
    //Auto complete want to write it like
    //if code does not work, try this
    //const res = (await response).json;
  } catch (error) {
    return [error.message, []];
  }
};

const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders,
      body: JSON.stringify({ username, orders: [] }),
    });
    if (!response.ok) {
      throw new Error("Could create user with username " + username);
    }
    const data = await response.json;
    //What is the purpose of returning null?
    return [null, data];
    //Auto complete want to write it like
    //if code does not work, try this
    //const res = (await response).json;
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
