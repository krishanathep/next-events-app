import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function layout({title, keyword, description, children}) {
    return (
        <div>
            <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keyword} />
            </Head>

           <main className={styles.container}>{children}</main> 
        </div>
    )
}

layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other music events',
    keyword: 'music, dj, edm, events',
}
