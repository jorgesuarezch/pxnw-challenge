export const TOKEN_KEY = 'token';

/**
 * Returns the current acces token stored in the localStorage
 */
export const getAccesToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
}

/**
 * Returns the current acces token stored in the localStorage
 */
export const saveAccesToken = (token: string) => {
  return window.localStorage.setItem(TOKEN_KEY, token);
}

/**
 * Transform a files object into an array
 * @param {Array<Object>} files 
 */
export const filesToArray = (files: Object) => Object.keys(files).map((filename) => (
  {
    filename,
    content: files[filename].content || '',
    _key: filename,
  }
));


/**
 * Transform a files array into an object
 * @param {Array<Object>} files 
 */
export const arrayToFilesObject = (files: Array<Object>) => files.reduce((acc, { _key, filename, content }) => (
  {
    ...acc,
    [_key]: {
      filename,
      content,
    },
  }
), {});

/**
 * Do nothing
 */
export const noop = () => { };
