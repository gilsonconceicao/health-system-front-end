import { ErrorType } from "@/Contexts/ErrorsContext";

export type ApiReponseError = {
    response: {
        data: ErrorType | ErrorType[]
    }
}

export function MapperErrorMessage(model: ApiReponseError): ErrorType | ErrorType[] {
    const objectError = model.response.data; 
    return objectError;
}