// סוגי הפעולות
export const SET_GAMES = "SET_GAMES";
export const ADD_GAME = "ADD_GAME";
export const UPDATE_GAME = "UPDATE_GAME";
export const DELETE_GAME = "DELETE_GAME";

// פעולות
export const setGamesAction = (games) => ({
  type: SET_GAMES,
  payload: games,
});

export const addGameAction = (game) => ({
  type: ADD_GAME,
  payload: game,
});

export const updateGameAction = (game) => ({
  type: UPDATE_GAME,
  payload: game,
});

export const deleteGameAction = (gameId) => ({
  type: DELETE_GAME,
  payload: gameId,
});
