"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react"

interface ModalContextType {
    isOpen: boolean
    hasAutoTriggered: boolean
    modalType: "default" | "resource"
    resourceData: { name: string; type: "eBook" | "Whitepaper" | "Case Study" } | null
    openModal: (type?: "default" | "resource", data?: { name: string; type: "eBook" | "Whitepaper" | "Case Study" }) => void
    closeModal: () => void
    markAutoTriggered: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [hasAutoTriggered, setHasAutoTriggered] = useState(false)
    const [modalType, setModalType] = useState<"default" | "resource">("default")
    const [resourceData, setResourceData] = useState<{ name: string; type: "eBook" | "Whitepaper" | "Case Study" } | null>(null)

    // Initialize from sessionStorage on mount
    React.useEffect(() => {
        const stored = sessionStorage.getItem("voishift_cta_triggered")
        if (stored === "true") {
            setHasAutoTriggered(true)
        }
    }, [])

    const openModal = useCallback((type: "default" | "resource" = "default", data: { name: string; type: "eBook" | "Whitepaper" | "Case Study" } | null = null) => {
        setModalType(type)
        setResourceData(data)
        setIsOpen(true)
    }, [])
    
    const closeModal = useCallback(() => setIsOpen(false), [])
    const markAutoTriggered = useCallback(() => {
        setHasAutoTriggered(true)
        sessionStorage.setItem("voishift_cta_triggered", "true")
    }, [])

    return (
        <ModalContext.Provider value={{
            isOpen,
            hasAutoTriggered,
            modalType,
            resourceData,
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
