import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Calender from "./routes/Calender";
import Goals from "./routes/Goals";
import Workouts from "./routes/Workouts";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
