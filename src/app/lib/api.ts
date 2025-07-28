// lib/api.ts

import { CurrentUser } from "@/components/Dashboard/Login";


export const ACCESS_TOKEN_KEY  = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';


/**
 * Build the Authorization header (if an access token is present).
 * @returns A record of headers to include in fetch calls.
 */
function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}


/**
 * Log in with username and password, storing tokens on success.
 * @param username – The user’s username.
 * @param password – The user’s password.
 * @returns The currently authenticated user object.
 * @throws If credentials are invalid or network fails.
 */
export async function login(
  username: string,
  password: string
): Promise<CurrentUser> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Invalid credentials');
  }

  const { access, refresh } = await res.json();
  localStorage.setItem(ACCESS_TOKEN_KEY, access);
  localStorage.setItem(REFRESH_TOKEN_KEY, refresh);

  return fetchCurrentUser();
}

/**
 * Fetch the current logged-in user using the stored JWT access token.
 * Automatically tries a token refresh on a 401 response.
 * @returns The current user object.
 * @throws If fetching fails after retry or if no refresh token is available.
 */
export async function fetchCurrentUser(): Promise<CurrentUser> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/`,
    {
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
    }
  );

  if (res.status === 401) {
    await attemptTokenRefresh();
    return fetchCurrentUser();
  }

  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }

  return res.json();
}

/**
 * Attempt to refresh the JWT access token using the stored refresh token.
 * @throws If no refresh token exists or the refresh request fails.
 */
export async function attemptTokenRefresh(): Promise<void> {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/refresh/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    }
  );

  if (!res.ok) {
    logout();
    throw new Error('Failed to refresh token');
  }

  const { access } = await res.json();
  localStorage.setItem(ACCESS_TOKEN_KEY, access);
}


/**
 * Clear stored tokens and effectively log the user out.
 */
export function logout(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

/**
 * Initialize authentication on page load.
 * @returns The current user if tokens are valid, or null otherwise.
 */
export async function initAuth(): Promise<CurrentUser | null> {
  try {
    return await fetchCurrentUser();
  } catch {
    return null;
  }
}
