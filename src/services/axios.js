import axios from "axios";
import { API } from "../utils/constants";

const networkService = axios.create({
    baseURL: API.BASE_URL
});

export const imageBaseUrl = API.IMAGE_BASE_URL;

export default networkService;