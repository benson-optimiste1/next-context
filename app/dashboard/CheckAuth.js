'use client'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/AuthContext'

export default function CheckAuth() {

  const { user } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    if(!user) {
      // redirect to login page
      router.push('/login')
    }
  }, [user])

  return null
}