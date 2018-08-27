// id of the library we are going to select.
export const selectedLibrary = libraryId => ({
  type: 'select_library',
  payload: libraryId
});
