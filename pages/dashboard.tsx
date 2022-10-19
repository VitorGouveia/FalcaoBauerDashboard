import Link from "next/link"
import Router from "next/router"

export default function Dashboard() {
    // get images

    return (
        <div>
            <Link href="/profile">
                <a>fazer upload</a>
            </Link>

            <h1>Dashboard</h1>
        </div>
    )
}