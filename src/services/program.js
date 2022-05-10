import axios from "axios"
import { SERVICES_BASE_PATH } from "../constants/services";


/**
 * Service to get Program Information.
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getProgramInfo = () => 
axios.get(`${SERVICES_BASE_PATH}program/program_catchup_id`);

export const getLiveProgramInfo = () => 
axios.get(`${SERVICES_BASE_PATH}program/program_live_id`);
