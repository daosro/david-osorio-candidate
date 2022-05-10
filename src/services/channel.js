import axios from "axios";
import { SERVICES_BASE_PATH } from "../constants/services";

/**
 * Service to get the channel live stream source.
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getChannelsLiveSource = (channelId) =>
  axios.get(`${SERVICES_BASE_PATH}channel/${channelId}`);
