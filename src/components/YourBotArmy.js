import React from "react";
import BotSpecs from "./BotSpecs";

function YourBotArmy({ selectedBots }) {
  // Your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {selectedBots.map((bot) => (
            <BotSpecs key={bot.id} bot={bot} />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
