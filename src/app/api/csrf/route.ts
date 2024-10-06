import { axiosInstance } from "../axiosConf"

export async function GET( request: Request ) {
    const result = await axiosInstance.get('/sanctum/csrf-cookie')
    
    const response = Response.json({message: 'ok'})
    
    result.headers["set-cookie"]?.forEach(cookie => {
        response.headers.append('Set-Cookie', cookie)
    })
    return response
}
