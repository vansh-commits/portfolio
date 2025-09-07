import { NextResponse } from "next/server"
import { Resend } from "resend"

type ContactPayload = {
  name: string
  email: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as Partial<ContactPayload>

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please provide a valid email." }, { status: 400 })
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ ok: false, error: "Message should be at least 10 characters." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toAddress = process.env.CONTACT_TO_EMAIL || "vansh.malhotra439@gmail.com"
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Email service not configured." }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const subject = `New contact message from ${name}`
    const text = `From: ${name} <${email}>\n\n${message}`
    const sendResult = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject,
      text,
      replyTo: email,
    })
    const result = sendResult as { id?: string }
    console.log(result)
    return NextResponse.json({ ok: true})
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 })
  }
}


