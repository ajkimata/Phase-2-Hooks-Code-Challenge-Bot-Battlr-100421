import React, { useState } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot,handleAddToArmy }) {
  const [isInArmy, setIsInArmy] = useState(false);

  const handleAddToArmy = () => {
    setIsInArmy(true);
    // Add code to update the army state or perform any other action
    updateArmy(bot.id, true);
  };

  const handleRemoveFromArmy = () => {
    setIsInArmy(false);
    // Add code to update the army state or perform any other action
    updateArmy(bot.id, false);
  };

  const handleDelete = () => {
    // Add code to handle the delete action
    // Example: deleteBot(bot.id);
  };

  return (
    <div className="ui column">
      <div className={`ui card ${isInArmy ? "in-army" : ""}`}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              {isInArmy ? (
                <button
                  className="ui mini red button"
                  onClick={handleRemoveFromArmy}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="ui mini green button"
                  onClick={handleAddToArmy}
                >
                  Add
                </button>
              )}
              <button className="ui mini red button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
