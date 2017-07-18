export const API_URL = process.env.REACT_APP_API_URL || 'https://api.taiga.io/api/v1';
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://tree.taiga.io';

let dueDates = {};
if (process.env.REACT_APP_DUE_DATE_CUSTOM_ATTRIBUTES) {
  try {
    dueDates = JSON.parse(process.env.REACT_APP_DUE_DATE_CUSTOM_ATTRIBUTES);
  } catch (e) {
    console.error('Due date parameter is wrong', e);
  }
}
export const DUE_DATE_CUSTOM_ATTRIBUTES = dueDates;
export const ISSUE_STATUS_FILTER = process.env.REACT_APP_ISSUE_STATUS_FILTER || '';
export const TASK_STATUS_FILTER = process.env.REACT_APP_TASK_STATUS_FILTER || '';
export const IGNORE_USERS = typeof process.env.REACT_APP_IGNORE_USERS !== 'undefined' ? process.env.REACT_APP_IGNORE_USERS.split(',') : [];
