export const runtime = "edge"

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!
const SECRET = process.env.TRACK_SECRET!

type Payload = {
    visitorId: string
    event: "pageview" | "lang" | "custom"
    path?: string
    language?: string
    country?: string
    referrer?: string
    userAgent?: string
    ts?: number
}

async function sendToTelegram(text: string) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
    const body = {
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
    }
    await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
    })
}

export async function POST(req: Request) {
    if (req.headers.get("x-track-secret") !== SECRET) {
        return new Response(JSON.stringify({ ok: false, error: "unauthorized" }), {
            status: 401,
        })
    }
    const data = (await req.json()) as Payload

    const lines = [
        `🛰 <b>Подія:</b> ${data.event}`,
        `👤 <b>Відвідувач:</b> ${data.visitorId}`,
        data.path ? `🧭 <b>Сторінка:</b> ${data.path}` : "",
        data.language ? `🗣 <b>Мова інтерфейсу:</b> ${data.language}` : "",
        data.country ? `🌍 <b>Країна:</b> ${data.country}` : "",
        data.referrer ? `↩️ <b>Джерело переходу:</b> ${data.referrer}` : "",
        data.userAgent
            ? `🖥 <b>Браузер / пристрій:</b> ${data.userAgent.slice(0, 160)}`
            : "",
        data.ts ? `⏱ <b>Час:</b> ${new Date(data.ts).toISOString()}` : "",
    ]
        .filter(Boolean)
        .join("\n")

    try {
        await sendToTelegram(lines)
        return new Response(JSON.stringify({ ok: true }), { status: 200 })
    } catch (e) {
        return new Response(JSON.stringify({ ok: false }), { status: 500 })
    }
}
