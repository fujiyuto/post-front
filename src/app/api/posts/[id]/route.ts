import { axiosInstance } from "../../axiosConf"
import { NextResponse } from "next/server"

export async function GET( request: Request, { params }: { params: { id: string } } ) {
    
    const res = await axiosInstance.get(`/api/posts/${params.id}`)

    return NextResponse.json(res.data)
}
