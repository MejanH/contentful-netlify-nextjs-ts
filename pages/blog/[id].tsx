import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIDS, getPostData } from "../../lib/posts"
import Link from "next/link"
import Layout from "../../components/Layout"

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIDS()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        },
        revalidate: 1
    }
}

export default function Post({ postData }: {
    postData: {
        title: string;
        id: string;
        date: string;
        contentHtml: string;
    }
}) {
    return (
        <Layout>
            <h1 className="text-4xl font-semibold">
                {postData.title}
            </h1>
            - {postData.date}
            <hr />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        </Layout>
    )
}