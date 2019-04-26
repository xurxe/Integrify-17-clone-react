import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout-div"

export default () => (
    <div>
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />

            <title>Powerfully simple</title>
            <meta name="description" content="With a squeeky clean design" />
            <meta name="keywords" content="react, gatsby, clone" />

            <meta property="og:title" content="Powerfully simple" />
            <meta property="og:description" content="With a squeeky clean design" />
            <meta property="og:image" content=" " />
            <meta property="og:url" content=" " />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Layout></Layout>
    </div>
)

