import useSWR from 'swr'
import { GenreGroupDataValue, GetGenreGroupData, useGetRestaurantsResponse, useGetRestaurantResponse, useGetGenresResponse } from './types'

async function fetcher(key: string) {
    const res = await fetch(key)
    return res.json()
}

export function useGetGenres() {
    const { data, error, isLoading } = useSWR<useGetGenresResponse>(`${process.env.NEXT_PUBLIC_APP_URL}/api/genres`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}

export function useGetRestaurants(gun?: string, region?: string, keyword?: string) {
    const params = {
        gun: gun ?? '',
        region: region ?? '',
        keyword: keyword ?? ''
    }
    const queryString: string = new URLSearchParams(params).toString()

    const { data, error, isLoading } = useSWR<useGetRestaurantsResponse>(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants?${queryString}`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}

export function useGetRestaurant(id: string) {
    const { data, error, isLoading } = useSWR<useGetRestaurantResponse>(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}

export function useGetFollows(id: string) {
    const { data, error, isLoading } = useSWR<useGetRestaurantResponse>(`${process.env.NEXT_PUBLIC_APP_URL}/api/follows/${id}`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}

export function useGetFollowers(id: string) {
    const { data, error, isLoading } = useSWR<useGetRestaurantResponse>(`${process.env.NEXT_PUBLIC_APP_URL}/api/followers/${id}`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}

