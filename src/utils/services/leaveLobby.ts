import { getDatabase, ref, runTransaction } from "firebase/database";

interface LeaveLobbyData {
  lobbyId: string;
  userId: string;
}

export async function leaveLobby({ lobbyId, userId }: LeaveLobbyData) {
  const db = getDatabase();
  const lobbyRef = ref(db, `lobbies/${lobbyId}`);
  //console.log(lobbyRef);
  try {
    await runTransaction(lobbyRef, (lobby) => {
      // console.log('tried');
      // console.log(lobby);
      //   console.log(lobby.players);
      //   console.log(lobby.players[1].id);
      if (lobby && lobby.players ){//&& lobby.players[userId]) {
        // Remove the user from the lobby's players list
        console.log(lobby);
        console.log(lobby.players);
        console.log(userId);
        delete lobby.players[userId];

        // If the lobby is now empty, you might choose to delete it
        if (Object.keys(lobby.players).length === 0) {
          return null; // Returning null will delete the data at this location
        }
      } else {
        // If the lobby does not exist or the user is not in it
        throw new Error("Lobby does not exist or user is not in it.");
      }
      return lobby; // Return the updated lobby data
    });
  } catch (error) {
    console.error("Could not leave lobby: ", error);
    throw error; // Rethrow the error for further handling
  }
}
