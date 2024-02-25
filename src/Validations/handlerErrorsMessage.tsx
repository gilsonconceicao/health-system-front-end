import { toast } from "@/Components/ui/use-toast";
import { ApiReponseError, MapperErrorMessage } from "./MapperErrorMessage";
import { ErrorType } from "@/Contexts/ErrorsContext";

export const handlerErrorMessage = (error: ApiReponseError) => {
    const errors = MapperErrorMessage(error);
    if (!!errors && Array.isArray(errors)) {
        return errors.map((error) => {
            return toast({
                variant: 'destructive',
                title: "Oops, houve um erro",
                description: error?.errorMessage
            })
        })
    }
    const referenceError = errors as ErrorType;
    return toast({
        variant: 'destructive',
        title: "Oops, houve um erro",
        description: referenceError?.errorMessage
    })
}