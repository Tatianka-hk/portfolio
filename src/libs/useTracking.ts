"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

function getCookie(name: string) {
    const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
    return m ? decodeURIComponent(m[2]) : ""
}

async function track(payload: any) {
    try {
        await fetch("/api/track", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            keepalive: true,
        })
    } catch (e) {}
}

export function useTracking(getUiLanguage?: () => string | undefined) {
    const pathname = usePathname()
    const sentRef = useRef<string>("")

    useEffect(() => {
        const visitorId = getCookie("visitorId") || "unknown"
        const language =
            getUiLanguage?.() ||
            navigator.languages?.[0] ||
            navigator.language ||
            "en"
        const country = document?.documentElement?.getAttribute("data-country") || ""
        const referrer = document.referrer || ""
        const userAgent = navigator.userAgent

        const payload = {
            visitorId,
            event: "pageview",
            path: pathname,
            language,
            country,
            referrer,
            userAgent,
            ts: Date.now(),
        }

        const key = JSON.stringify([payload.path, payload.language, payload.country])
        if (sentRef.current !== key) {
            sentRef.current = key
            track(payload)
        }
    }, [pathname, getUiLanguage])

    const trackLanguage = (lang: string) => {
        const visitorId = getCookie("visitorId") || "unknown"
        track({ visitorId, event: "lang", language: lang, ts: Date.now() })
    }

    return { trackLanguage }
}
