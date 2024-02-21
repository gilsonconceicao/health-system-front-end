import { getDashboardData } from "@/Services/Dashboard/Dashboard";
import { DashboardType } from "@/Services/Dashboard/Dashboard.type";
import {  useQuery } from "@tanstack/react-query"

export const useDashboardQuery = () => {

    const { data, ...rest } = useQuery({
        queryKey: ["get-appointmens-data"],
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnMount: 'always',
        queryFn: async () => {
            const response = await getDashboardData();
            return response?.data as DashboardType;
        }
    })

    return {
        data,
        ...rest
    }
}
