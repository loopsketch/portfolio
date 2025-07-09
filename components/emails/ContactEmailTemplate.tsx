import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface ContactEmailTemplateProps {
  name: string
  email: string
  message: string
}

export const ContactEmailTemplate = ({
  name,
  email,
  message,
}: ContactEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>新しいお問い合わせ: {name}様より</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>新しいお問い合わせがありました</Heading>
          
          <Section style={section}>
            <Text style={label}>お名前:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>メールアドレス:</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={messageSection}>
            <Text style={label}>メッセージ:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            このメールは loopsketch.com のお問い合わせフォームから送信されました。
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

// スタイル定義
const main = {
  backgroundColor: '#f4f4f5',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  margin: '40px auto',
  padding: '40px',
  maxWidth: '600px',
}

const h1 = {
  color: '#18181b',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '32px',
  margin: '0 0 24px',
}

const section = {
  margin: '0 0 16px',
}

const messageSection = {
  margin: '24px 0',
}

const label = {
  color: '#71717a',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0 0 4px',
}

const value = {
  color: '#18181b',
  fontSize: '16px',
  margin: '0',
}

const messageText = {
  backgroundColor: '#f4f4f5',
  borderRadius: '6px',
  color: '#18181b',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '16px',
  whiteSpace: 'pre-wrap' as const,
}

const hr = {
  borderColor: '#e4e4e7',
  margin: '24px 0',
}

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
}

const footer = {
  color: '#71717a',
  fontSize: '14px',
  margin: '24px 0 0',
  textAlign: 'center' as const,
}