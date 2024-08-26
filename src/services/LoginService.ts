import { AxiosResponse } from 'axios';
import api from './api';

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export default class LoginService {
  static async login(data: LoginRequest): Promise<LoginResponse> {
    const response: AxiosResponse<LoginResponse> = await api.post('sessions/login', data);
    return response.data;
  }
}
