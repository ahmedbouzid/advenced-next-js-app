"use client"

import { useStoreModal } from "@/hooks/useStoreModal"
import { Modal } from "@/components/ui/modal"



export const StoreModal = () => {

    const storeModal = useStoreModal()

    return (
        <Modal
        title="Create Store"
        description="Add a new Store"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
            Create store form
        </Modal>
    )
}