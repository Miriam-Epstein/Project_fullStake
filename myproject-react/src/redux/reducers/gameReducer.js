import {
    SET_GAMES,
    ADD_GAME,
    UPDATE_GAME,
    DELETE_GAME,
  } from "../actions/gameActions";
  
  const initialState = {
    games: [],
  };
  
  export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_GAMES:
        return { ...state, games: action.payload };
  
      case ADD_GAME:
        return { ...state, games: [...state.games, action.payload] };
  
      case UPDATE_GAME:
        return {
          ...state,
          games: state.games.map((game) =>
            game.gameId === action.payload.gameId ? action.payload : game
          ),
        };
  
      case DELETE_GAME:
        return {
          ...state,
          games: state.games.filter(
            (game) => game.gameId !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default gameReducer;
