import { AxiosResponse } from 'axios';
import api from './api';

export interface RegisterResponse {
    id: string;
    name: string;
    email: string;
    idade: number;
    estado: string;
    cidade: string;
    nomeArt: string;
    logo: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    youtube: string;
    spotify: string;
    genPref: string;
    corPrim: string;
    corSec: string;
    corTer: string;
    espcldd: string;
    password: string; // Isso pode ser um hash ou string mascarada, conforme retorno da API
    created_at: string;
    updated_at: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    espcldd: string;
    idade: number;
    estado: string;
    cidade: string;
    nomeArt: string;
    logo: string;
    instagram: string;
    facebook: string;
    tiktok: string;
    youtube: string;
    spotify: string;
    genPref: string;
    corPrim: string;
    corSec: string;
    corTer: string;
}

export default class RegisterService {
    static async register(data: RegisterRequest): Promise<RegisterResponse> {
        const response: AxiosResponse<RegisterResponse> = await api.post('register', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data;
    }
}
