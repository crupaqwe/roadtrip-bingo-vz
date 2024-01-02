// services/listPublicLobbies.ts

import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';

export const listPublicLobbies = async () => {
  const db = getDatabase();
  const lobbiesRef = query(ref(db, 'lobbies'), orderByChild('visibility'), equalTo('public'));

  try {
    const snapshot = await get(lobbiesRef);
    if (snapshot.exists()) {
      let lobbies: any[] = [];
      snapshot.forEach((childSnapshot) => {
        lobbies.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      return lobbies;
    } else {
      // Handle the case where there are no public lobbies
      return [];
    }
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching public lobbies: ", error);
    throw error;
  }
};
