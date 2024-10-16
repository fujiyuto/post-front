import { axiosInstance } from "../axiosConf"
import { NextResponse } from "next/server"

export async function GET( request: Request ) {
    const res = await axiosInstance.get('/api/genres')

    return NextResponse.json(res.data)
}