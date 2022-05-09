import axios from "axios";
import { SERVICES_BASE_PATH } from "../constants/services";

/**
 * Service to get the user favorite channels from the server.
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getFavoriteChannels = (userId) =>
  axios.get(`${SERVICES_BASE_PATH}favoriteChannels/${userId}`);
