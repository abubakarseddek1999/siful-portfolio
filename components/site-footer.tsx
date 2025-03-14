import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-900 py-6 md:py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
        <div className="flex flex-col gap-2 max-w-md">
          <h2 className="text-lg font-bold text-white">Saiful Islam</h2>
          <p className="text-sm text-gray-400">
            Professional trainer specializing in computer skills, Microsoft Office, typing, and graphic design. Offering
            both online and in-person training sessions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-white">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-400 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/courses" className="text-sm text-gray-400 hover:text-white">
                Courses
              </Link>
              <Link href="/services" className="text-sm text-gray-400 hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-white">Courses</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/courses#excel" className="text-sm text-gray-400 hover:text-white">
                Excel Training
              </Link>
              <Link href="/courses#microsoft" className="text-sm text-gray-400 hover:text-white">
                Microsoft Office
              </Link>
              <Link href="/courses#typing" className="text-sm text-gray-400 hover:text-white">
                Typing Skills
              </Link>
              <Link href="/courses#design" className="text-sm text-gray-400 hover:text-white">
                Graphic Design
              </Link>
              <Link href="/courses#computer" className="text-sm text-gray-400 hover:text-white">
                Computer Skills
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-white">Contact</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@saifulislam.com</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-gray-800 px-4">
        <p className="text-xs text-center text-gray-500">
          © {new Date().getFullYear()} Saiful Islam. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

