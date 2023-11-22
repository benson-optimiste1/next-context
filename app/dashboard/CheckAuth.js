'use client'
import { useEffect, useContext , setUser} from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AuthContext } from '@/context/AuthContext'


export default function CheckAuth() {

  const { user } = useContext(AuthContext)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if(!user && pathname.startsWith('/dashboard')) {
        const _user = sessionStorage.getItem('user')
        if(_user) {
            setUser(JSON.parse(_user))
        } else {
            // redirect to login page
            router.push('/login')
          }
        }
      if(user && pathname.startsWith('/login')) {
        // redirect toc dashboard page
        router.push('/dashboard')
      }
    }, [user, pathname])

  return null
}