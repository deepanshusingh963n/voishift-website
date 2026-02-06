"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react"

interface ModalContextType {
    isOpen: boolean
    hasAutoTriggered: boolean
    openModal: () => void
    closeModal: () => void
    markAutoTriggered: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [hasAutoTriggered, setHasAutoTriggered] = useState(false)

    const openModal = useCallback(() => setIsOpen(true), [])
    const closeModal = useCallback(() => setIsOpen(false), [])
    const markAutoTriggered = useCallback(() => setHasAutoTriggered(true), [])

    return (
        <ModalContext.Provider value={{
            isOpen,
            hasAutoTriggered,
            openModal,
            closeModal,
            markAutoTriggered
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}
