import { NextRequest, NextResponse } from 'next/server'
import { ContactForm } from '@/types'

// In a real application, you would save this to a database
// For now, we'll just log it and return a success response
const contacts: ContactForm[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const { name, email, message } = body
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create contact entry
    const contact: ContactForm = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    }

    // Save to array (in production, save to database)
    contacts.push({
      ...contact,
      timestamp: new Date().toISOString()
    } as ContactForm & { timestamp: string })

    // Log the contact (in production, you might send an email or notification)
    console.log('New contact form submission:', contact)

    // Here you could also send an email notification
    // await sendEmailNotification(contact)

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        contact: { name: contact.name, email: contact.email }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // In a real application, you would fetch from database
    // For now, return the contacts array (without sensitive data)
    const safeContacts = contacts.map(({ name, email }) => ({ name, email }))
    
    return NextResponse.json(
      { contacts: safeContacts, count: contacts.length },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
