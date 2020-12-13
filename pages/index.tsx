import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    },

    revalidate: 1

  }
}

export default function Home({ allPostsData }: {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[]
}) {
  return (
    <Layout>
      <h2 className="text-gray-800 text-4xl font-semibold">Latest Blog Posts</h2>
      <div>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>
                  {title}
                </a>
              </Link>

               - {date}</li>
          )
          )}
        </ul>
      </div>
    </Layout>
  )
}

