import React from 'react';

export const NotesContext = React.createContext();

export function useNotesContext() {
  return React.useContext(NotesContext);
}
