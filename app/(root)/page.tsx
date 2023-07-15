'use client'
import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/useStoreModal'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) =>state.isOpen);

  useEffect(() => {
 if (!isOpen) {
  onOpen()
 }
  }, [])
  
  return (
 <>
 <div className='p-4'>
root 
 </div>
 </>
  )
}
