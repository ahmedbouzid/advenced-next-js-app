'use client'
import { Modal } from '@/components/ui/modal'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
 <>
 <div className='p-4'>
 <UserButton  afterSignOutUrl="/"/>
<Modal isOpen description="tesr" title="test" onClose= {() => {} }>
  Children
</Modal>
 </div>
 </>
  )
}
