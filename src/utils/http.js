import http from "./request";

export const cityList = () => http("get", "api/cityList");
export default {
    cityList
};