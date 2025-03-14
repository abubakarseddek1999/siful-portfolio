import Link from "next/link"
import Image from "next/image"
import { Building, Clock, Laptop, Users } from "lucide-react"
import saiful from "../../assets/images/480755392_1689521098269640_637299165741702518_n.jpg"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col dark">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-400">Training Services</h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Flexible training options to meet your learning needs and schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Laptop className="h-8 w-8 text-blue-400" />
                  <h2 className="text-xl font-bold text-white">Online Training</h2>
                </div>
                <p className="text-sm text-gray-400 mb-6">Learn from anywhere in the world</p>
                <div className="space-y-4">
                  <Image
                    src={saiful}
                    alt="Online Training"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <div className="space-y-2">
                    <h3 className="font-medium text-white">Features:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Live interactive sessions via Zoom</li>
                      <li>Screen sharing for demonstrations</li>
                      <li>Recorded sessions for review</li>
                      <li>Digital course materials</li>
                      <li>Flexible scheduling</li>
                      <li>One-on-one support</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-white">Benefits:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Learn from the comfort of your home</li>
                      <li>Save time and money on commuting</li>
                      <li>Access to recordings for review</li>
                      <li>Personalized attention</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>Sessions typically 1-2 hours</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <Link href="/contact" className="w-full">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Inquire About Online Training
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-8 w-8 text-blue-400" />
                  <h2 className="text-xl font-bold text-white">In-Person Training</h2>
                </div>
                <p className="text-sm text-gray-400 mb-6">Face-to-face learning experience</p>
                <div className="space-y-4">
                  <Image
                    src={saiful}
                    alt="In-Person Training"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <div className="space-y-2">
                    <h3 className="font-medium text-white">Features:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Hands-on, interactive learning</li>
                      <li>Direct assistance with exercises</li>
                      <li>Physical course materials provided</li>
                      <li>Comfortable learning environment</li>
                      <li>Group discussions and peer learning</li>
                      <li>Immediate feedback and support</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-white">Benefits:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Direct interaction with the instructor</li>
                      <li>Networking opportunities with other learners</li>
                      <li>Focused learning environment</li>
                      <li>Personalized attention and guidance</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>Sessions typically 2-3 hours</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <Link href="/contact" className="w-full">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Inquire About In-Person Training
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-400">Corporate Training</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Specialized training programs for businesses and organizations
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">On-Site Corporate Training</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6">Training at your workplace</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Features:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Customized curriculum for your team's needs</li>
                      <li>Training conducted at your office location</li>
                      <li>Flexible scheduling to minimize disruption</li>
                      <li>Group exercises tailored to your industry</li>
                      <li>Progress reports and assessments</li>
                    </ul>
                  </div>
                  <p className="text-gray-400">
                    I'll come to your workplace and deliver training sessions tailored specifically to your team's
                    requirements and skill levels. This option minimizes disruption to your workflow and allows for
                    training that directly addresses your organization's unique challenges.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <Link href="/contact" className="w-full">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Request Corporate Training
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Team Skills Assessment</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6">Identify training needs</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Features:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Comprehensive skills evaluation</li>
                      <li>Identification of knowledge gaps</li>
                      <li>Personalized training recommendations</li>
                      <li>Detailed assessment report</li>
                      <li>ROI analysis for training investment</li>
                    </ul>
                  </div>
                  <p className="text-gray-400">
                    Before designing a training program, I can assess your team's current skill levels to identify
                    specific areas for improvement. This ensures that your training investment targets the exact skills
                    your team needs to enhance productivity and performance.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <Link href="/contact" className="w-full">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Schedule an Assessment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Enhance Your Skills?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact me today to discuss your training needs and find the perfect solution
              </p>
            </div>
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

