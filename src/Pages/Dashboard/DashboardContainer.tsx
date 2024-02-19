'use client'
import React from 'react'
import { Dashboard } from './Dashboard'
import { SkeletonDashboard } from '@/Components/Skeleton/SkeletonDashboard/SkeletonDashboard'
import { useDashboardQuery } from '@/Hooks/DashboardServicesHook'

export const DashboardContainer = () => {
    const { data, isFetching, isPending } = useDashboardQuery();
    return (
        <div>
            <SkeletonDashboard isLoading={isFetching || isPending}>
                <Dashboard />
            </SkeletonDashboard>
        </div>
    )
}
