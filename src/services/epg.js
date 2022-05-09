import axios from "axios"
import { SERVICES_BASE_PATH } from "../constants/services";


/**
 * Service to get EPG data from the server.
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getEPGScreenData = () => axios.get(`${SERVICES_BASE_PATH}epg`);
