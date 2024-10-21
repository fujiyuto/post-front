import { axiosInstance } from "../../axiosConf"
import { NextResponse } from "next/server"

export async function GET( request: Request, { params }: { params: { id: string } } ) {
    
    const res = await axiosInstance.get(`/api/restaurants/${params.id}`)

    // console.log(res.data)

    return NextResponse.json(res.data)
}