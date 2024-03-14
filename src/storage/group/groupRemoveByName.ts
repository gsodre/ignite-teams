import AsyncStorage from "@react-native-async-storage/async-storage";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

export async function groupRemoveByName(groupToBeRemoved: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groups = storedGroups.filter((item) => item !== groupToBeRemoved);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToBeRemoved}`);
  } catch (error) {
    throw error;
  }
}
