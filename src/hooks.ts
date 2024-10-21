import useSWR from 'swr'
import { GenreGroupDataValue, GetGenreGroupData, useGetRestaurantsResponse, useGetRestaurantResponse, useGetGenresResponse } from './types'


export function useGetGenres(): useGetGenresResponse {
    async function fetcher(key: string) {
        const res = await fetch(key)
        return res.json()
    }

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_APP_URL}/api/genres`, fetcher)

    return {
        data: data === undefined ? null : data,
        isLoading,
        isError: error
    }
}

export function useGetRestaurants(gun?: string, region?: string, keyword?: string): useGetRestaurantsResponse {
    
    async function fetcher(key: string) {
        const res = await fetch(key)
        return res.json()
    }

    const params = {
        gun: gun ?? '',
        region: region ?? '',
        keyword: keyword ?? ''
    }
    const queryString: string = new URLSearchParams(params).toString()

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants?${queryString}`, fetcher)

    return {
        data: data === undefined ? null : data,
        isLoading,
        isError: error
    }
}


export function useGetRestaurant(id: string): useGetRestaurantResponse {
    async function fetcher(key: string) {
        const res = await fetch(key)
        return res.json()
    }

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}

