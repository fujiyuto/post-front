import { SearchGenrePage } from "@/pages/restaurant/SearchGenrePage"

import React from 'react'

const Page = ({ params }: { params: { slug: string } }) => {

    return (
        <SearchGenrePage genreUniqueName={params.slug}/>
    )
}

export default Page