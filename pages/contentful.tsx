import { GetStaticProps } from 'next'
import { BLOCKS } from '@contentful/rich-text-types';
import Layout from '../components/Layout'
import Link from "next/link"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { fetchEntries } from '../lib/contentfulPosts'

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetchEntries()
    const allPostsData = await res.map((p) => {
        return p.fields
    })
    return {
        props: {
            allPostsData
        },

        revalidate: 1

    }
}

export default function Home({ allPostsData }) {
    console.log(allPostsData);

    return (
        <Layout>
            <h2 className="text-gray-800 text-4xl font-semibold">Latest Blog Posts</h2>
            <div>
                <ul>
                    {allPostsData.map(({ date, title, article, slug }) => (
                        <div key={slug}>
                            <li >
                                <Link href="/blog/[id]" as={`/blog/${slug}`}>
                                    <a>
                                        {title}
                                    </a>
                                </Link>

               - {date} </li>
                            <div dangerouslySetInnerHTML={{
                                __html: documentToHtmlString(article, {
                                    renderNode: {
                                        [BLOCKS.EMBEDDED_ASSET]: (node) => `
                                
                                        <img src="${node.data.target.fields.file.url}" alt=""/>
                                `
                                    }
                                })
                            }} />
                        </div>
                    )
                    )}
                </ul>
            </div>
        </Layout>
    )
}

