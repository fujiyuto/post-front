import useSWR from 'swr'
import { GetGenreGroupData, GetRestaurants } from './types'

interface fetchDataResponse {
    data: any
    isLoading: boolean
    isError: boolean
}

export function useGetGenres(): fetchDataResponse {
    async function fetcher(key: string) {
        const res = await fetch(key)
        return res.json()
    }

    const { data, error, isLoading } = useSWR<GetGenreGroupData>(`${process.env.NEXT_PUBLIC_APP_URL}/api/genres`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
}

export function useGetRestaurants(gun?: string, region?: string, keyword?: string): fetchDataResponse {
    
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
        data,
        isLoading,
        isError: error
    }
}


export function useGetRestaurant(id: string): fetchDataResponse {
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

