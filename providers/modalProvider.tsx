"use client"

import { StoreModal } from "@/components/modals/StoreModal";

import { useEffect, useState } from "react"

export const ModalProvider = () => {

const [isMonted , setIsMonted ]= useState(false) ;


    useEffect(() => {
   
    setIsMonted(true)
 

 }, [])

 if (!isMonted) {
    return null
 }


 return (
 <>
 <StoreModal />
 </>
 )
 
}