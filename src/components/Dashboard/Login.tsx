'use client'

import { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'
import { Restaurant } from '@/types/types'

interface LoginProps {
  restaurant: Restaurant
}

interface CurrentUser {
  username: string
  restaurant_code: string | null
}

export default function Login({ restaurant }: LoginProps) {
  const [username, setUsername]     = useState<string>('')
  const [password, setPassword]     = useState<string>('')
  const [error, setError]           = useState<string | null>(null)
  const [loading, setLoading]       = useState<boolean>(false)
  const [loggedIn, setLoggedIn]     = useState<boolean>(false)
  const [initializing, setInitializing] = useState<boolean>(true)

  // ① On mount, check current session
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me/`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          const data: CurrentUser = await res.json()
          setUsername(data.username)
          setLoggedIn(true)
        }
      })
      .catch(() => {
        // ignore network/401
      })
      .finally(() => {
        setInitializing(false)
      })
  }, [])

  // ② Login handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        }
      )

      if (res.ok) {
        setLoggedIn(true)
      } else {
        const text = await res.text()
        setError(text || 'Login failed')
      }
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // ③ Logout handler
  const handleLogout = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout/`,
      {
        method: 'POST',
        credentials: 'include',
      }
    )
    setLoggedIn(false)
    setUsername('')
  }

  // ④ While checking session, show spinner
  if (initializing) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2" />
      </div>
    )
  }

  // ⑤ If logged in, show welcome + logout
  if (loggedIn) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Welcome back, {username}!</h2>
        <button
          onClick={handleLogout}
          className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
        >
          Log out
        </button>
      </div>
    )
  }

  // ⑥ Otherwise render the login form
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Log in to {restaurant.name}
      </h1>

      {restaurant.logo_url && (
        <div className="flex justify-center mb-6">
          <Image
            src={restaurant.logo_url}
            alt={`${restaurant.name} logo`}
            width={96}
            height={96}
            className="object-contain rounded-lg shadow"
            unoptimized
          />
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-6 rounded-lg shadow"
      >
        {error && <p className="text-red-500">{error}</p>}

        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.currentTarget.value)}
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Logging in…' : 'Log In'}
        </button>
      </form>
    </div>
  )
}
