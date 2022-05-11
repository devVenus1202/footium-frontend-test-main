import { mc } from "src/utility/functions";
import React from "react";
import classes from "./PlayerCard.module.css";
import { Player } from "src/utility/types";

type PlayerCardProps = {
  player: Player;
  draggable: boolean;
  onDragStart: (data: any) => (event: any) => void;
  onDragOver: (data: any) => (event: any) => void;
  onDrop: (data: any) => (event: any) => boolean;
  style?: any;
};

const PlayerCard: React.FC<PlayerCardProps> = (props: PlayerCardProps) => {
  const { player, draggable, onDragOver, onDragStart, onDrop, style } = props;

  return (
    <div
      className={mc(classes.container)}
      draggable={draggable}
      onDragStart={onDragStart({ ...player })}
      onDragOver={onDragOver({ ...player })}
      onDrop={onDrop({ ...player })}
      style={style}
    >
      <div className={mc(classes.content)}>
        <div className={mc(classes.uniform)}>
          <img
            src={`assets/images/${
              player.isGk ? "gk-jersey.png" : "player-jersey.png"
            }`}
            alt=""
          />
          <div className={mc(classes.jerseyNumber)}>{player.jerseyNumber}</div>
        </div>
        <div className={mc(classes.info)}>
          <div
            className={mc(
              classes.position,
              player.isSub ? "" : classes.onPitch
            )}
          >
            {player.playerPosition.position}
          </div>
          <div className={mc(classes.name)}>{player.name.firstName}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
