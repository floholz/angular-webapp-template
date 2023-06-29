/* tslint:disable */
/* eslint-disable */
import { UserRoleResponse } from './user-role-response';
export interface UserResponse {
  createdAt?: string;
  deletedAt?: null | string;
  email?: null | string;
  firstName?: null | string;
  id?: number;
  isDeleted?: boolean;
  lastName?: null | string;
  userName?: null | string;
  userRole?: UserRoleResponse;
}
