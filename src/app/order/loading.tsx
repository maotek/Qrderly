"use client"

import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2" />
    </div>
  )
}

export default loading