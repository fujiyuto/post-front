import { axiosInstance } from "../axiosConf"
import { NextResponse } from "next/server"

export async function GET( request: Request ) {
    const res = await axiosInstance.get('/api/restaurants')
    // const res = await axios.get(`${process.env.API_URL}/sanctum/csrf-cookie`)
    // console.log((await res).status)
    console.log(res.data.data)

    return Response.json({message: 'hello'})
}
