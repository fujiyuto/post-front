import { axiosInstance } from "../axiosConf"
import { NextResponse } from "next/server"

export async function GET( request: Request ) {
    const { searchParams } = new URL(request.url)
    const gun = searchParams.get('gun') ?? ''
    const res = await axiosInstance.get(`/api/restaurants?gun=${gun}`)

    console.log(res.data)

    return NextResponse.json(res.data)
}
