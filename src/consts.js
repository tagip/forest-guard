export const API_URL = process.env.REACT_APP_API_URL || 'https://api.taiga.io/api/v1';
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://tree.taiga.io';
const dueDates = JSON.parse("\"" + process.env.REACT_APP_DUE_DATE_CUSTOM_ATTRIBUTES + "\"");
export const DUE_DATE_CUSTOM_ATTRIBUTES = JSON.parse(dueDates);
