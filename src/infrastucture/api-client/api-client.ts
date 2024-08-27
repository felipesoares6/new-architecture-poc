import axios from "axios";

export const buildApiClient = ({ baseURL }: { baseURL: string }) => {
  const apiClient = axios.create({ baseURL });

  return apiClient;
};
