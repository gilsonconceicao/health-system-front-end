import { getDashboardData } from "@/Services/Dashboard/Dashboard";
import {  useQuery } from "@tanstack/react-query"

export const useDashboardQuery = () => {

    const { data, ...rest } = useQuery({
        queryKey: ["get-appointmens-data"],
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        queryFn: async () => {
            const response = await getDashboardData();
            return response?.data;
        }
    })

    return {
        data,
        ...rest
    }
}
