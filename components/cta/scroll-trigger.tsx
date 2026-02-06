"use client"

import { useEffect, useRef } from "react"
import { useModal } from "@/context/modal-context"

export function ScrollTrigger() {
    const { openModal, hasAutoTriggered, markAutoTriggered } = useModal()

    useEffect(() => {
        const handleExitIntent = (e: MouseEvent) => {
            if (hasAutoTriggered) return

            // If mouse leaves the top of the window, trigger modal
            if (e.clientY <= 5) {
                markAutoTriggered()
                openModal()
            }
        }

        document.addEventListener("mouseleave", handleExitIntent)

        return () => {
            document.removeEventListener("mouseleave", handleExitIntent)
        }
    }, [openModal, hasAutoTriggered, markAutoTriggered])

    return null
}
