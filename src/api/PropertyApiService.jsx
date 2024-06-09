import { apiClient } from "./Api";

export const createPropertyApi = (property) => apiClient.post('/property', property);

export const retrievePropertyApi = (tin) => apiClient.get(`property?tin=${tin}`);

export const retrievePropertyByE9Api = (e9) => apiClient.get(`property?e9=${e9}`);

export const updatePropertyApi = (property) => apiClient.put(`property`,property)

export const deletePropertyApi = (propertyId) => apiClient.delete(`/property/${propertyId}`);

export const propertyRepairsReports = (userId) => apiClient.get(`propertyRepair?userId=${userId}`);

export const countPropertiesApi = () => apiClient.get(`property/count`);