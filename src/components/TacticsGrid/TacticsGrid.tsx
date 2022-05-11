import React, { useState } from "react";
import { team1 } from "src/data";
import PlayerCard from "../PlayerCard";
import classes from "./TacticsGrid.module.css";
import { mc } from "src/utility/functions";
import { Player, Team } from "src/utility/types";

const swapPlayers = (
  fromPlayer: Player,
  toPlayer: Player,
  players: Team,
  setPlayers: any
) => {
  let pls = { ...players };
  let fromIndex = -1;
  let toIndex = -1;

  // Get players' indexes in subs array
  if (fromPlayer.isSub || toPlayer.isSub) {
    pls.subs.forEach((player, index) => {
      if (player.id === fromPlayer.id) {
        fromIndex = index;
      }
      if (player.id === toPlayer.id) {
        toIndex = index;
      }
    });
  }

  // Get players' indexes in firstEleven array
  if (!fromPlayer.isSub || !toPlayer.isSub) {
    pls.firstEleven.forEach((player, index) => {
      if (player.id === fromPlayer.id) {
        fromIndex = index;
      }
      if (player.id === toPlayer.id) {
        toIndex = index;
      }
    });
  }

  // If users are found in any group. 
  // Goal keeper should be swapped with only goal keepers.
  if (fromIndex !== -1 && toIndex !== -1 && fromPlayer.isGk === toPlayer.isGk) {
    const fromGroup = !fromPlayer.isSub ? "firstEleven" : "subs";
    const toGroup = !toPlayer.isSub ? "firstEleven" : "subs";

    let fromPlayerData = pls[fromGroup][fromIndex];
    let toPlayerData = pls[toGroup][toIndex];

    pls[toGroup][toIndex] = { ...fromPlayerData, isSub: toPlayerData.isSub };
    pls[fromGroup][fromIndex] = { ...toPlayerData, isSub: fromPlayer.isSub };
    setPlayers(pls);
  }
};

// Handling grag and drop
const handleDrop =
  (data: any, players: any, setPlayers: any) => (event: any) => {
    event.preventDefault();
    let fromPlayer = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toPlayer = { ...data };

    swapPlayers(fromPlayer, toPlayer, players, setPlayers);
    return false;
  };

const handleDragStart = (data: any) => (event: any) => {
  let fromPlayer = JSON.stringify(data);
  event.dataTransfer.setData("dragContent", fromPlayer);
};

const handleDragOver = () => (event: any) => {
  event.preventDefault();
  return false;
};

// Matrics for positions in grid
const position: any = {
  // (4, 3, 3) -> 5 * 7 matrics
  // [playerIndex] : [Row, Col]
  0: [0, 1],
  1: [0, 2],
  2: [0, 3],
  3: [2, 1],
  4: [2, 2],
  5: [2, 3],
  6: [4, 0],
  7: [4, 1],
  8: [4, 3],
  9: [4, 4],
  10: [6, 2],
};

const TacticsGrid = () => {
  const [players, setPlayers] = useState(team1);
  return (
    <div className={mc(classes.container)}>
      <div className={mc(classes.pitchBackground)}>
        <div className={mc(classes.pitch)}>
          {players.firstEleven.map((player: Player, index: number) => (
            <PlayerCard
              player={player}
              key={player.id}
              draggable
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(data: any) => handleDrop(data, players, setPlayers)}
              style={{
                gridRowStart: position[index][0] + 1,
                gridColumnStart: position[index][1] + 1,
              }}
            />
          ))}
        </div>
      </div>
      <div className={mc(classes.bench)}>
        <>
          {players.subs.map((player : Player) => (
            <PlayerCard
              player={player}
              key={player.id}
              draggable
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(data: any) => handleDrop(data, players, setPlayers)}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default TacticsGrid;
