import { FormDataProps } from "../types/Formdata";
import { api } from "./api.ts";

export const cadastrar = async (formData: FormDataProps) => {
   try {  
    
    const response = await api.post("/cadastrar", formData);
    return response.data; 
} catch (error: unknown) {
    throw new Error(error as string);
}
};
