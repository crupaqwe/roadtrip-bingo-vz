import { getDatabase, ref, runTransaction } from "firebase/database";

interface JoinLobbyData {
  lobbyId: string;
  userId: string;
  userName: string;
}

async function joinLobby({ lobbyId, userId, userName }: JoinLobbyData) {
  const db = getDatabase();
  const lobbyRef = ref(db, `lobbies/${lobbyId}`);

  try {
    await runTransaction(lobbyRef, (lobby) => {
      if (lobby) {
        const playerCount = lobby.players ? Object.keys(lobby.players).length : 0;

        // Check if the lobby is joinable
        if (lobby.status === 'waiting' && playerCount < lobby.maxPlayers) {
          // Add the user to the lobby's players list
          if (!lobby.players) {
            lobby.players = {};
          }
          lobby.players[userId] = {
            name: userName,
            ready: false
          };
        } else {
          // Lobby is full or has started the game
          throw new Error('Lobby is full or has already started.');
        }
      }
      return lobby;
    });
  } catch (error) {
    console.error("Could not join lobby: ", error);
    throw error; // Rethrow the error for further handling
  }
}
