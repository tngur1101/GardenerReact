import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/searchPage/searchPage";
import ChallengePage from "./pages/teamChallengePage/teamChallengePage";
import SearchResultPage from "./pages/searchResultPage/searchResultPage";
import GameStartPage from "./pages/minigamePage/gameStartPage";
import './App.css';
import ProfilePage from "./pages/profilePage/profilePage";

function App() {
  return (
    <>
      <Route exact path="/search">
        <SearchPage />
      </Route>

      <Route exact path="/search/result">
        <SearchResultPage />
      </Route>

      <Route exact path="/challenge">
        <ChallengePage />
      </Route>

      <Route exact path="/minigame">
        <GameStartPage />
      </Route>

      <Route exact path="/profile/:id">
        <ProfilePage />
      </Route>
    </>
  );
} 

export default App;
