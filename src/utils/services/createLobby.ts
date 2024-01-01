import { getDatabase, ref, push, set } from "firebase/database";

interface Lobby {
  name: string;
  hostUserId: string;
  maxPlayers: number;
  visibility: 'public' | 'private'; // Assuming visibility can only be 'public' or 'private'
}

export async function createLobby({ name, hostUserId, maxPlayers, visibility }: Lobby) {
  try {
    const db = getDatabase();
    const lobbiesRef = ref(db, 'lobbies');
    const newLobbyRef = push(lobbiesRef);
    await set(newLobbyRef, {
      name,
      host: hostUserId,
      players: {
        [hostUserId]: {
          name: "Host's Name", // Replace with the actual name
          ready: false
        }
      },
      maxPlayers,
      status: "waiting",
      visibility
    });
    // If needed, handle the lobby key, e.g., redirect to the lobby page
    //const lobbyKey = newLobbyRef.key;
    // ...
  } catch (error) {
    console.error("Error creating lobby: ", error);
  }
}
