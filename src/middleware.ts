import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { nanoid } from "nanoid"

const SECRET = process.env.TRACK_SECRET!

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const cookieName = "visitorId"
    let visitorId = req.cookies.get(cookieName)?.value
    if (!visitorId) {
        visitorId = nanoid(16)
        res.cookies.set(cookieName, visitorId, {
            httpOnly: false,
            sameSite: "Lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        })
    }

    const country = (
        req.geo?.country ||
        req.headers.get("x-vercel-ip-country") ||
        "ZZ"
    ).toUpperCase()
    const uiLang = req.cookies.get("ui_lang")?.value || ""
    console.log({ visitorId, country, uiLang })

    const payload = {
        visitorId,
        event: "pageview",
        path: req.nextUrl.pathname,
        language: uiLang || (req.headers.get("accept-language") || "").split(",")[0],
        country,
        referrer: req.headers.get("referer") || "",
        userAgent: req.headers.get("user-agent") || "",
        ts: Date.now(),
    }

    try {
        await fetch(new URL("/api/track", req.url), {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-track-secret": SECRET,
            },
            body: JSON.stringify(payload),
        })
    } catch {}

    res.headers.set("x-country", country)
    res.cookies.set("country", country, { path: "/", sameSite: "Lax" })

    return res
}

export const config = {
    matcher: [
        "/((?!_next|static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map)).*)",
    ],
}
