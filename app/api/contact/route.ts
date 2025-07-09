import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/emails/ContactEmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // 入力値の検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メールアドレスの簡易検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // メール送信
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resendの検証済みドメインを使用
      to: process.env.CONTACT_EMAIL || 'contact@loopsketch.com',
      subject: `【お問い合わせ】${name}様より`,
      react: ContactEmailTemplate({ name, email, message }),
      reply_to: email,
    })

    return NextResponse.json({ 
      success: true,
      data 
    })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    )
  }
}