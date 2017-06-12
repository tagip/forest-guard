export const API_URL = process.env.REACT_APP_API_URL || 'https://api.taiga.io/api/v1';
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://tree.taiga.io';
let dueDates = {};
if (process.env.REACT_APP_DUE_DATE_CUSTOM_ATTRIBUTES) {
  try {
    dueDates = JSON.parse(JSON.parse("\"" + process.env.REACT_APP_DUE_DATE_CUSTOM_ATTRIBUTES + "\""));
  } catch (e) {
    console.error('Due date parameter is wrong', e);
  }
}
export const DUE_DATE_CUSTOM_ATTRIBUTES = dueDates;

