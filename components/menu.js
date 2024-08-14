import Link from "next/link"

export function Menu(){
    return(
        <ul>
            <Link href="/">
            <li><b>Home</b></li>
            </Link>
            <Link href="/learn/next">
            <li>Learn Next!</li>
            </Link>
            <Link href="/learn/react">
            <li>Learn React!</li>
            </Link>
            <Link href="/learn/reactjs">
            <li>Learn React.js!</li>
            </Link>
            <Link href="/learn/vue">
            <li>Learn Vue.js!</li>
            </Link>
            <Link href="/learn/nextjs">
            <li>Learn Next.js!</li>
            </Link>
            <Link href="/contacts">
            <li>Contacts...</li>
            </Link>
            <Link href="/about">
            <li>About...</li>
            </Link>
            <Link href="/news">
            <li>News...</li>
            </Link>
            <Link href="/news/static/top-stories">
            <li>Top Stories...</li>
            </Link>
            <Link href="/news/static/popular">
            <li>Most Popular...</li>
            </Link>
        </ul>
    )
}