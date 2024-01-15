// createLobby.ts
import { getDatabase, ref, push, set } from "firebase/database";

interface Player {
  name: string;
  ready: boolean;
  gotBingo: boolean;
}

interface Lobby {
  name: string;
  hostUserId: string;
  maxPlayers: number;
  visibility: 'public' | 'private';
  players: Record<string, Player>;
}

export async function createLobby({ name, hostUserId, maxPlayers, visibility }: Lobby): Promise<string> {
  try {
    const db = getDatabase();
    const lobbiesRef = ref(db, 'lobbies');
    const newLobbyRef = push(lobbiesRef);

    // Initialize the players list with the host user
    const players: Record<string, Player> = {
      [hostUserId]: {
        name: "Host's Name", // Replace with the actual name of the host
        ready: false,
        gotBingo: false
      }
    };

    await set(newLobbyRef, {
      name,
      host: hostUserId,
      players,
      maxPlayers,
      status: "waiting",
      visibility
    });

    const lobbyKey = newLobbyRef.key;
    if (lobbyKey === null) {
      throw new Error("Failed to get the lobby key.");
    }
    return lobbyKey;
    
  } catch (error) {
    console.error("Error creating lobby: ", error);
    throw error; // Re-throw the error to allow catch blocks in the calling functions to handle it
  }
}

// Remember to replace "Host's Name" with the actual host's name. If the host's name is not available at this point,
// you may want to pass it as a parameter to the function or retrieve it from your user management system.
