import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    // Fetch bot data
    fetch("/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bot data:", error));
  }, []);

  const handleAddToArmy = (bot) => {
    setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
  };

  return (
    <div>
      <YourBotArmy selectedBots={selectedBots} />
      <BotCollection bots={bots} handleAddToArmy={handleAddToArmy} />
    </div>
  );
}

export default BotsPage;
