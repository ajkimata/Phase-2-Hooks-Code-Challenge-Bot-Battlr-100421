import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleAddToArmy }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleAddToArmy={handleAddToArmy}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
