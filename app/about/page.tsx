import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Calendar, Clock, FileSpreadsheet, Palette } from "lucide-react"
import saiful from "../../assets/images/saiful.jpg"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col dark">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-400">About Me</h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 10 years of experience in training and education, I've helped hundreds of students master
                  essential computer skills and software applications.
                </p>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>
                  My journey began as a computer science graduate with a passion for teaching. I noticed that many
                  people struggled with technology that could significantly improve their productivity and career
                  prospects. This inspired me to develop training programs that break down complex concepts into
                  manageable, practical skills.
                </p>
                <p>
                  I specialize in Microsoft Office applications, particularly Excel, where I help students move from
                  basic formulas to advanced data analysis. My graphic design courses focus on both the technical
                  aspects of design software and the fundamental principles that make designs effective.
                </p>
                <p>
                  My teaching philosophy centers on practical, hands-on learning. I believe that real mastery comes from
                  doing, not just watching, which is why all my courses include extensive exercises and real-world
                  projects.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={saiful}
                alt="Saiful Islam"
                width={450}
                height={550}
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">
                My Qualifications
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Professional certifications and educational background
              </p>
            </div>
          </div>
          <div className="mx-auto grid  grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <Award className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">Microsoft Certified Trainer</h3>
              <p className="text-sm text-gray-400 mb-4">Official Microsoft certification</p>
              <p className="text-gray-300">
                Certified to deliver official Microsoft training programs with expertise in the entire Office suite.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <Palette className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">Adobe Certified Expert</h3>
              <p className="text-sm text-gray-400 mb-4">Photoshop & Illustrator</p>
              <p className="text-gray-300">
                Advanced certification in Adobe's creative applications, demonstrating mastery of professional design
                tools.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <BookOpen className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">BSc in Computer Science</h3>
              <p className="text-sm text-gray-400 mb-4">University of Technology</p>
              <p className="text-gray-300">
                Comprehensive education in computer systems, programming, and information technology fundamentals.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <FileSpreadsheet className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">Advanced Excel Specialist</h3>
              <p className="text-sm text-gray-400 mb-4">Data analysis certification</p>
              <p className="text-gray-300">
                Specialized certification in advanced Excel functions, including data modeling, analysis, and
                visualization.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <Clock className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">10+ Years Experience</h3>
              <p className="text-sm text-gray-400 mb-4">Professional training</p>
              <p className="text-gray-300">
                Over a decade of hands-on experience training individuals and corporate teams in various technical
                skills.
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden p-6">
              <Calendar className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">500+ Courses Delivered</h3>
              <p className="text-sm text-gray-400 mb-4">Training achievement</p>
              <p className="text-gray-300">
                Successfully delivered hundreds of courses to students from diverse backgrounds and skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Learn?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Explore my courses or get in touch for personalized training options
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                  View All Courses
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

