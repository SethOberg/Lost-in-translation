const apiKey = process.env.REACT_APP_API_KEY;

/**
 * createHeaders is a function that has default set HTTP headers.
 *
 * @param {none} none - the string to be added to the user's translation history.
 * @returns {Sring} This function will return a String containing specific headers.
 */
export const createHeaders = () => {
  return {
    "content-type": "application/json",
    "x-api-key": apiKey,
  };
};
