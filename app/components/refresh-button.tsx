'use client'
import { useRouter } from 'next/navigation'

export default function RefreshBtn() {
  const router = useRouter()

  return (
    <button
      className="rouded bg-indigo-600 py-1 px-3 font-medium text-white hover:bg-indigo-700"
      onClick={() => router.refresh()}
    >
      Regresh current route
    </button>
  )
}