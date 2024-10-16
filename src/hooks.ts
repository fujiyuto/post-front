import useSWR from 'swr'
import { GetGenreGroupData, GetRestaurants } from './types'

export function useGetGenres() {
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

interface GetRestaurantsProps {
    gun?: string
    locate?: string
    keyword?: string
}
export function useGetRestaurants(gun?: string, locate?: string, keyword?: string) {
    
    async function fetcher(key: string) {
        const res = await fetch(key)
        return res.json()
    }

    const params = {
        gun: gun ?? '',
        locate: locate ?? '',
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

