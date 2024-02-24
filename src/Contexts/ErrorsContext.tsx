import React, { FC, ReactNode, createContext, useContext, useState } from "react";

export type ErrorType = {
    errorMessage: string;
    identification: string;
    resource: string;
};

interface IErrorsContext {
    error: ErrorType | null;
    setError: (error: ErrorType) => void;
}

const ErrorsContext = createContext<IErrorsContext>({
    error: null,
    setError: (error: ErrorType) => { }
});

interface IChildren {
    children: ReactNode;
}

export const ErrorsContextProvider: FC<IChildren> = ({ children }) => {
    const [error, setError] = useState<ErrorType | null>(null);



    return (
        <ErrorsContext.Provider
            value={{
                error,
                setError
            }}
        >
            {children}
        </ErrorsContext.Provider>)
};

export const useErrors = () => {
    return useContext(ErrorsContext);
}