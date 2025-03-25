import React, { useState } from "react";
import playersList from "../../players.json";
import "./index.css";

export default function TeamSelection() {
  const players = [
    {
      "name": "Rohit Sharma",
      "type": "Batsman",
      "battingSkill": 90,
      "bowlingSkill": 90
    },
    {
      "name": "Virat Kohli",
      "type": "Batsman",
      "battingSkill": 90,
      "bowlingSkill": 70
    },
    {
      "name": "Shikhar Dhawan",
      "type": "Batsman",
      "battingSkill": 85,
      "bowlingSkill": 50
    },
    {
      "name": "Shreyas Iyer",
      "type": "Batsman",
      "battingSkill": 87,
      "bowlingSkill": 40
    },
    {
      "name": "Mayank Agarwal",
      "type": "Batsman",
      "battingSkill": 90,
      "bowlingSkill": 40
    },
    {
      "name": "Ajinkya Rahane",
      "type": "Batsman",
      "battingSkill": 84,
      "bowlingSkill": 45
    },
    {
      "name": "Rishabh Pant",
      "type": "WicketKeeper",
      "battingSkill": 90,
      "bowlingSkill": 20
    },
    {
      "name": "KL Rahul",
      "type": "WicketKeeper",
      "battingSkill": 89,
      "bowlingSkill": 20
    },
    {
      "name": "Ishaan Kishan",
      "type": "WicketKeeper",
      "battingSkill": 84,
      "bowlingSkill": 30
    },
    {
      "name": "Ravindra Jadeja",
      "type": "AllRounder",
      "battingSkill": 90,
      "bowlingSkill": 80
    },
    {
      "name": "Hardik Pandya",
      "type": "AllRounder",
      "battingSkill": 80,
      "bowlingSkill": 70
    },
    {
      "name": "Ravichandran Ashwin",
      "type": "AllRounder",
      "battingSkill": 70,
      "bowlingSkill": 90
    },
    {
      "name": "Shivam Dube",
      "type": "AllRounder",
      "battingSkill": 80,
      "bowlingSkill": 80
    },
    {
      "name": "Jasprit Bumrah",
      "type": "Bowler",
      "battingSkill": 50,
      "bowlingSkill": 90
    },
    {
      "name": "Kuldeep Yadav",
      "type": "Bowler",
      "battingSkill": 50,
      "bowlingSkill": 85
    },
    {
      "name": "Navdeep Saini",
      "type": "Bowler",
      "battingSkill": 60,
      "bowlingSkill": 85
    },
    {
      "name": "Shardul Thakur",
      "type": "Bowler",
      "battingSkill": 70,
      "bowlingSkill": 85
    }
  ];

  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const sortByName = () => {
    const sortedNames = [...availablePlayers].sort((a, b) => a.name.localeCompare(b.name));
    setAvailablePlayers(sortedNames);
  };

  const sortByRole = () => {
    const sortedRoles = [...availablePlayers].sort((a, b) => a.type.localeCompare(b.type));
    setAvailablePlayers(sortedRoles);
  };

  const sortByBatting = () => {
    const sortedBatting = [...availablePlayers].sort((a, b) => b.battingSkill - a.battingSkill);
    setAvailablePlayers(sortedBatting);
  };

  const sortByBowling = () => {
    const sortedBowling = [...availablePlayers].sort((a, b) => b.bowlingSkill - a.bowlingSkill);
    setAvailablePlayers(sortedBowling);
  };

  const selectPlayer = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const removePlayer = (player) => {
    setAvailablePlayers([...availablePlayers, player]);
    setSelectedPlayers(selectedPlayers.filter(p => p.name !== player.name));
  };

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div className="table-wrapper">
        <div className="card outlined mt-0 card-wrapper">
          <div className="card-text">
            <h4 className="text-center-div">Available Players</h4>
            <table>
              <thead>
                <tr>
                  <th data-testid="available-players-name" onClick={sortByName}>Name</th>
                  <th data-testid="available-players-role" onClick={sortByRole}>Role</th>
                  <th data-testid="available-players-bat" onClick={sortByBatting}>Batting</th>
                  <th data-testid="available-players-bowl" onClick={sortByBowling}>Bowling</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody data-testid="available-players-table-body">
                {availablePlayers.map((player) => (
                  <tr data-testid={`available-${player.name.replace(" ", "-")}-row`} key={player.name}>
                    <td data-testid={`available-${player.name.replace(" ", "-")}-name`}>{player.name}</td>
                    <td data-testid={`available-${player.name.replace(" ", "-")}-role`}>{player.type}</td>
                    <td data-testid={`available-${player.name.replace(" ", "-")}-bat`}>{player.battingSkill}</td>
                    <td data-testid={`available-${player.name.replace(" ", "-")}-bowl`}>{player.bowlingSkill}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        data-testid={`available-${player.name.replace(" ", "-")}-select`}
                        onClick={() => selectPlayer(player)}
                        disabled={selectedPlayers.some(p => p.name === player.name)}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card outlined mt-0 card-wrapper">
          <div className="card-text">
            <h4 className="text-center-div">Selected Players</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody data-testid="selected-players-table-body">
                {selectedPlayers.map((player) => (
                  <tr data-testid={`selected-${player.name.replace(" ", "-")}-row`} key={player.name}>
                    <td data-testid={`selected-${player.name.replace(" ", "-")}-name`}>{player.name}</td>
                    <td data-testid={`selected-${player.name.replace(" ", "-")}-role`}>{player.type}</td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        data-testid={`selected-${player.name.replace(" ", "-")}-remove`}
                        onClick={() => removePlayer(player)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}