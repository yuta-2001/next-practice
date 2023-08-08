'use client'
import { useRouter } from 'next/navigation'

export default function RefreshBtn({
  destination = ''
}: {
  destination?: string
}) {
  const router = useRouter()
  return (
    <button
      className="rouded bg-indigo-600 py-1 px-3 font-medium text-white hover:bg-indigo-700"
      onClick={() => router.push(`/${destination}`)}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )
}