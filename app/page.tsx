import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Code, FileSpreadsheet, Keyboard, Palette } from "lucide-react"
import saiful from "../assets/images/saiful.jpg"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800 dark">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-400">
    Saiful Islam
  </h1>
  <p className="text-xl text-gray-400">
    Professional Trainer in Computer Skills, Microsoft Office, and Graphic Design
  </p>
  <p className="text-lg text-gray-300">
    With years of experience in training individuals and organizations, Saiful Islam is dedicated to empowering students with the knowledge they need to succeed in today's digital world. From mastering Microsoft Office tools like Word, Excel, and PowerPoint to learning advanced graphic design techniques using software like Photoshop and Illustrator, his courses offer hands-on learning experiences that ensure real-world application.
  </p>
  <p className="text-lg text-gray-300">
    Saiful's passion for teaching and his practical approach to training have made him a trusted name in the field. His expertise extends to various computer-related skills, including programming, web design, and digital marketing. Whether you're a beginner or looking to sharpen your skills, Saiful’s courses cater to all levels and are designed to help you achieve your professional goals.
  </p>
</div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/courses">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 inline-flex items-center gap-1">
                    Explore Courses <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={saiful}
                alt="Saiful Islam"
                width={450}
                height={550}
                className="rounded-lg w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark">
        <div className="container mx-auto px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">
                My Expertise
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Specialized training in various computer skills and software applications
              </p>
            </div>
          </div>
          <div className="mx-auto grid  grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <FileSpreadsheet className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-1">Excel Training</h3>
                <p className="text-sm text-gray-400 mb-4">Master spreadsheets, formulas, and data analysis</p>
                <p className="text-gray-400 mb-6">
                  Learn Excel from basics to advanced features including PivotTables, VLOOKUP, and macros.
                </p>
                <Link href="/courses#excel">
                  <button className="px-3 py-1 text-sm text-gray-300 bg-transparent border border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <Code className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-1">Computer Skills</h3>
                <p className="text-sm text-gray-400 mb-4">Essential computer literacy for modern workplaces</p>
                <p className="text-gray-400 mb-6">
                  From basic operations to advanced troubleshooting and software management.
                </p>
                <Link href="/courses#computer">
                  <button className="px-3 py-1 text-sm text-gray-300 bg-transparent border border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <BookOpen className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-1">Microsoft Office</h3>
                <p className="text-sm text-gray-400 mb-4">Comprehensive training in the Microsoft suite</p>
                <p className="text-gray-400 mb-6">
                  Word, PowerPoint, Outlook, and more to boost your productivity and efficiency.
                </p>
                <Link href="/courses#microsoft">
                  <button className="px-3 py-1 text-sm text-gray-300 bg-transparent border border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <Keyboard className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-1">Typing Skills</h3>
                <p className="text-sm text-gray-400 mb-4">Improve your typing speed and accuracy</p>
                <p className="text-gray-400 mb-6">
                  Structured exercises and techniques to help you type faster with fewer errors.
                </p>
                <Link href="/courses#typing">
                  <button className="px-3 py-1 text-sm text-gray-300 bg-transparent border border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <Palette className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-1">Graphic Design</h3>
                <p className="text-sm text-gray-400 mb-4">Learn design principles and software</p>
                <p className="text-gray-400 mb-6">
                  Master tools like Photoshop, Illustrator, and design fundamentals for visual communication.
                </p>
                <Link href="/courses#design">
                  <button className="px-3 py-1 text-sm text-gray-300 bg-transparent border border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <BookOpen className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-1">Custom Training</h3>
                <p className="text-sm text-gray-400 mb-4">Personalized training programs</p>
                <p className="text-gray-400 mb-6">
                  Tailored courses designed specifically for your needs or your organization's requirements.
                </p>
                <Link href="/contact">
                  <button className="px-3 py-1 text-sm text-gray-300 bg-transparent border border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">
                What My Students Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Hear from people who have transformed their skills through my training
              </p>
            </div>
          </div>
          <div className="mx-auto grid  grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Ahmed K.</h3>
                <p className="text-sm text-gray-400 mb-4">Excel Advanced Course</p>
                <p className="text-gray-300">
                  "Saiful's Excel training completely transformed how I work with data. His patient teaching style and
                  practical examples made complex concepts easy to understand."
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Fatima J.</h3>
                <p className="text-sm text-gray-400 mb-4">Graphic Design Fundamentals</p>
                <p className="text-gray-300">
                  "I started with zero design knowledge, and now I'm confidently creating professional graphics for my
                  business. Saiful has a gift for making complex software approachable."
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Rahul M.</h3>
                <p className="text-sm text-gray-400 mb-4">Complete Microsoft Office</p>
                <p className="text-gray-300">
                  "The comprehensive training provided by Saiful helped me secure a better position at work. His
                  attention to detail and focus on practical applications sets him apart."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white dark">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Upgrade Your Skills?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join my courses and transform your professional capabilities
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 inline-flex items-center gap-1">
                  Browse Courses <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                  Contact for Custom Training
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

