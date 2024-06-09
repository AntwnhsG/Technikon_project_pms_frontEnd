import { apiClient } from "./Api";

export const createRepairApi = (repair) => apiClient.post('/propertyRepair', repair);