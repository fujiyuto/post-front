import { ButtonGroupPropsVariantOverrides } from "@mui/material"

export interface MessagesType {
    success: string
    error: {
        [key: string]: string
    }
}

export interface Genre {
    unique_name: string
    genre_name: string
}

export interface GenreGroupDataValue {
    group_name: string
    genres: Genre[]
}

export interface GetGenreGroupData {
    [key: string]: GenreGroupDataValue
}

export interface Restaurant {
    id: number
    restaurant_name: string
    address: string
    price_min: number|null
    price_max: number|null
    post_num: number
    point_avg: number
    updated_at: string
}

export interface GetRestaurant extends Restaurant {
    genres: Genre[]
}

export interface GetRestaurants {
    restaurants: GetRestaurant[]
}

