import Link from "next/link"
import { useSession, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import Router from "next/router"
import { useEffect, useState } from "react"
import { DEFAULT_AVATARS_BUCKET } from "../util";

export default function Dashboard() {
  const supabase = useSupabaseClient()
    const [files, setfiles] = useState<{
        key: string;
        url: string;
    }[] | null>(null)
    // get images
    useEffect(() => {
        const getFiles = async () => {
            const { data, error } = await supabase
                .storage    
                .from(DEFAULT_AVATARS_BUCKET)
                .list("reuniao")

            const images = await Promise.all(data!.map(async ({ name }) => {
                const download = supabase
                        .storage
                        .from(DEFAULT_AVATARS_BUCKET)
                        .getPublicUrl(`reuniao/${name}`)

                return {
                    key: name,
                    url: download.data.publicUrl                    
                }
            }))


                console.log(images)
                setfiles(images)
        }

        getFiles()
    }, [])

    return (
        <div>
            <Link href="/profile">
                <a>fazer upload</a>
            </Link>

            <h1>Dashboard</h1>
            <div style={{ display: "flex", gap: "8px" }}>
                {files?.map(({ key, url }) => (
                    <img key={key} src={url} alt="" width="200px" />
                ))}
            </div>

        </div>
    )
}