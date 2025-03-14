"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSuccess(true)

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <div className="flex min-h-screen flex-col dark">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-400">Contact Me</h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Get in touch for training inquiries, custom programs, or any questions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-400">Get in Touch</h2>
                <p className="text-gray-400">
                  Fill out the form and I'll get back to you as soon as possible. You can also reach me directly using
                  the contact information provided.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <h3 className="font-medium text-white">Phone</h3>
                  </div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">Available Monday-Friday, 9am-5pm</p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <h3 className="font-medium text-white">Email</h3>
                  </div>
                  <p className="text-gray-300">contact@saifulislam.com</p>
                  <p className="text-sm text-gray-400">I typically respond within 24 hours</p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <h3 className="font-medium text-white">Location</h3>
                  </div>
                  <p className="text-gray-300">123 Training Street, Suite 456</p>
                  <p className="text-gray-300">New York, NY 10001</p>
                  <p className="text-sm text-gray-400">Available for in-person training in the NYC area</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
                <p className="text-sm text-gray-400 mb-6">I'll get back to you as soon as possible</p>
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-md text-green-400">
                    Message sent successfully! Thank you for your message. I'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

