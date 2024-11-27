import { ButtonGroupPropsVariantOverrides } from "@mui/material"

interface fetchDataResponse {
    data: any
    isLoading: boolean
    isError: boolean
}

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

export interface useGetRestaurantsResponse extends fetchDataResponse {
    restaurants: {
        id: number
        restaurant_name: string
        address: string
        price_min: number
        price_max: number
        point_avg: number
        post_num: number
        updated_at: string
        thumbnail_image: string
        genres: {
            unique_name: string
            genre_name: strng
        }[]
    }[]
}

export interface useGetRestaurantResponse extends fetchDataResponse {
    id: number
    restaurant_name: string
    zip_cd: string
    address: string
    address_detail: string
    email: string
    tel_no: string
    price_min?: number
    price_max?: number
    post_num: number
    point_avg: number
    updated_at: string
    images: {
        [key: string]: {
            name: string
            image_urls: string[]
        }
    }
    genres: Genre[]
}

export interface useGetGenresResponse extends fetchDataResponse {
    genre_groups: {
        [key: string]: {
            group_name: string
            genres: {
                unique_name: string
                genre_name: string
            }[]
        }
    }
}

// 店への投稿一覧
export interface RestaurantPost {
    user: {
        id: number
        user_name: string
        follower_num: number
        post_num: number
    },
    post: {
        id: number
        title: string
        visited_at: string|null
        period_of_time: number
        points: number
        price_min: number
        price_max: number
        image_url: string|null
        created_at: string
    }
}

export interface GetRestaurantPostsResponse {
    posts: RestaurantPost[]
}

// 投稿詳細取得
export interface GetPostResponse {
    id: number
    user_id: number
    user_name: string
    restaurant_id: number
    restaurant_name: string
    title: string
    content: string
    visited_at: string|null
    period_of_time: number
    points: number
    price_min: number
    price_max: number
    images: string[]
    created_at: string
}

// ユーザー詳細取得
export interface UserDetailResponsePost {
    id: number
    restaurant_id: number
    restaurant_name: string
    title: string
    visited_at: string|null
    period_of_time: number
    points: number
    price_min: number
    price_max: number
    image_url: string|null
    created_at: string
}

export interface GetUserDetailResponse {
    user: {
        user_name: string
        email: string
        tel_no: string
        birthday: string
        gender: string
        user_type: string
        post_num: number
        follower_num: number
        follow_num: number
        visited_num: number
    }
    posts: UserDetailResponsePost[]
}
