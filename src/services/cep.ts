import { api } from "./api.ts";

export const buscarCep = async (cep: string) => {
    try {
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error: unknown) {
        throw new Error(error as string);
    }
};
