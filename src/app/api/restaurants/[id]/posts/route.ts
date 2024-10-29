import { axiosInstance } from "@/app/api/axiosConf"
import { NextResponse } from "next/server"

export async function GET( request: Request, { params }: { params: { id: string } } ) {
    
    const res = await axiosInstance.get(`/api/posts/restaurant/${params.id}`)

    return NextResponse.json(res.data)
}
