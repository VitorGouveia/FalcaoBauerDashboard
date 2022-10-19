import {useRouter} from "next/router"
import {
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { useCallback, useEffect, useState } from "react";

export default function SimpleCard({
    uid,
    url,
    size,
    onUpload,
  }: {
    uid: string
    url: string
    size: number
    onUpload: (url: string) => void
  }) {
    const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()
  const supabase = useSupabaseClient()
  const color = useColorModeValue('gray.50', 'gray.800')
  const color2 = useColorModeValue('white', 'gray.700')
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  const downloadImage = useCallback(async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error)
    }
  }, [supabase.storage])

  const sess = useSession()

  useEffect(() => {
    setSession(sess)
    if(!sess) {
        // router.push("/")
    }
  }, [router, sess])

  useEffect(() => {
    if (url) downloadImage(url)
  }, [downloadImage, url])


  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
        setUploading(true)
  
        if (!event.target.files || event.target.files.length == 0) {
          throw 'You must select an image to upload.'
        }
        const DEFAULT_AVATARS_BUCKET = "charts"
  
        const user = await supabase.auth.getUser()
        const file = event.target.files[0]
        const fileExt = file.name.split('.').pop()
        const fileName = `${session?.user.id}${Math.random()}.${fileExt}`
        const filePath = `${fileName}`
  
        let { error: uploadError } = await supabase.storage
          .from(DEFAULT_AVATARS_BUCKET)
          .upload(filePath, file)
  
        if (uploadError) {
          throw uploadError
        }
  
        let { error: updateError } = await supabase.from('profiles').upsert({
          id: user.data.user?.id,
          avatar_url: filePath,
        })
  
        if (updateError) {
          throw updateError
        }
        console.log("uploaded with success")
      } catch (error) {
        alert((error as Error).message)
      } finally {
        setUploading(false)
      }
  }
  

  return (
    <div>
        <label className="button primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>

        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
    </div>
  );
}