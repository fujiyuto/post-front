import { axiosInstance } from "../axiosConf";
import { NextRequest, NextResponse } from "next/server";
import { messages } from "@/messages";
import { redirect } from "next/navigation";

export async function POST( request: NextRequest ) {
    const formData = await request.formData()
    try {
        const res = await axiosInstance({
            method: 'post',
            url: '/api/login',
            data: formData
        })

        return NextResponse.json({ message: messages.success }, { status: res.status })

    } catch (e: any) {
        console.log(e)

        return NextResponse.json({ message: messages.error.login }, { status: e.status })
    }
}