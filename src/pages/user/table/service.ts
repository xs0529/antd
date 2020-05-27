import { request } from 'umi';
import { TableListParams, TableListItem } from './data.d';

export async function queryUser(params?: TableListParams) {
  return request('/api/user', {
    params,
  });
}

export async function pageUser(params?: TableListParams) {
  return request('/api/user/page', {
    params,
  });
}

export async function removeUser(params: { key: number[] }) {
  return request('/api/user/remove', {
    method: 'DELETE',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addUser(params: TableListItem) {
  return request('/api/user/add', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateUser(params: TableListParams) {
  return request('/api/user/update', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}
