'use client'

import { useState, useEffect, FormEvent } from 'react'
import { login, logout, initAuth } from "@/app/lib/api";

export interface CurrentUser {
  username: string
  first_name: string
  restaurant_name: string | null
}

export default function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const [user, setUser] = useState<CurrentUser | null>(null)
  const [initializing, setInitializing] = useState<boolean>(true)

  // Restore session via JWT on mount
  useEffect(() => {
    initAuth()
      .then(u => {
        if (u) setUser(u)
      })
      .catch(() => { })
      .finally(() => setInitializing(false))
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const u = await login(username, password)
      setUser(u)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogoutClick = () => {
    logout()
    setUser(null)
  }

  if (initializing) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2" />
      </div>
    )
  }

  if (user) {
    return (
      <div className="pt-4 text-center">
        <h2 className="text-xl font-semibold">
          Welcome back, {user.first_name}!
        </h2>
        <p className="mt-2">
          You’re working at{' '}
          <span className="font-medium">{user.restaurant_name}</span>.
        </p>
        <button
          onClick={handleLogoutClick}
          className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
        >
          Log out
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 max-w-md mx-auto h-screen p-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Log in</h1>
      <form onSubmit={handleSubmit} className="space-y-4 border-2 p-6 rounded-lg">
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
            className="mt-1 block w-full border-2 rounded px-3 py-2"
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
            className="mt-1 block w-full border-2 rounded px-3 py-2"
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
