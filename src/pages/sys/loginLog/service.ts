import { request } from 'umi';
import { TableListParams, TableListItem } from './data.d';

export async function pageLoginLog(params?: TableListParams) {
  return request('/api/loginLog/page', {
    params,
  });
}

export async function removeLoginLog(params: { key: number[] }) {
  return request('/api/loginLog', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addLoginLog(params: TableListItem) {
  return request('/api/loginLog', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateLoginLog(params: TableListParams) {
  return request('/api/loginLog', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
