import Link from "next/link"
import Image from "next/image"
import { Clock, Keyboard, Palette, Users } from "lucide-react"
import saiful from "../../assets/images/472656703_1663781244176959_1748064954040121215_n.jpg"
import saiful1 from "../../assets/images/480755392_1689521098269640_637299165741702518_n.jpg"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col dark">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-400">Courses</h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Comprehensive training programs to enhance your skills and boost your career
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-900" id="excel">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-blue-400">
                Excel Training
              </h2>
              <p className="max-w-[700px] text-gray-400">
                Master Microsoft Excel from basics to advanced data analysis
              </p>
            </div>
          </div>
          <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Excel Fundamentals</h3>
                <p className="text-sm text-gray-400 mb-2">For beginners</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  Beginner
                </span>
                <div className="grid gap-4">
                  <Image
                    src={saiful}
                    alt="Excel Fundamentals"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>4 weeks (8 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>Suitable for complete beginners</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Learn the basics of Excel including cell formatting, simple formulas, and creating basic charts.
                    Perfect for those new to spreadsheets.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Enroll Now - $199
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Excel Intermediate</h3>
                <p className="text-sm text-gray-400 mb-2">Level up your skills</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  Intermediate
                </span>
                <div className="grid gap-4">
                  <Image
                    src={saiful}
                    alt="Excel Intermediate"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>6 weeks (12 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>For those with basic Excel knowledge</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Master functions like VLOOKUP, IF statements, PivotTables, and data validation. Ideal for
                    professionals who use Excel regularly.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Enroll Now - $299
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Excel Advanced Analytics</h3>
                <p className="text-sm text-gray-400 mb-2">Data analysis mastery</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  Advanced
                </span>
                <div className="grid gap-4">
                  <Image
                  src={saiful}
                    alt="Excel Advanced Analytics"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>8 weeks (16 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>For experienced Excel users</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Advanced data analysis techniques including Power Query, DAX formulas, data modeling, and creating
                    interactive dashboards.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Enroll Now - $399
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-800" id="microsoft">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-blue-400">
                Microsoft Office
              </h2>
              <p className="max-w-[700px] text-gray-400">Comprehensive training in the Microsoft Office suite</p>
            </div>
          </div>
          <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Microsoft Word Mastery</h3>
                <p className="text-sm text-gray-400 mb-2">Document creation and formatting</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  All Levels
                </span>
                <div className="grid gap-4">
                  <Image
                   src={saiful}
                    alt="Microsoft Word Mastery"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>4 weeks (8 sessions)</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    From basic document creation to advanced formatting, styles, mail merge, and collaborative editing
                    features.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Enroll Now - $199
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">PowerPoint Presentations</h3>
                <p className="text-sm text-gray-400 mb-2">Create impactful presentations</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  All Levels
                </span>
                <div className="grid gap-4">
                  <Image
                   src={saiful}
                    alt="PowerPoint Presentations"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>4 weeks (8 sessions)</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Learn to design professional presentations with animations, transitions, multimedia integration, and
                    delivery techniques.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Enroll Now - $199
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Complete Office Suite</h3>
                <p className="text-sm text-gray-400 mb-2">Comprehensive training</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  All Levels
                </span>
                <div className="grid gap-4">
                  <Image
                  src={saiful}
                    alt="Complete Office Suite"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>12 weeks (24 sessions)</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Master Word, Excel, PowerPoint, and Outlook in one comprehensive course. Perfect for administrative
                    professionals.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Enroll Now - $499
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-900" id="typing">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-blue-400">
                Typing Skills
              </h2>
              <p className="max-w-[700px] text-gray-400">Improve your typing speed and accuracy</p>
            </div>
          </div>
          <div className="grid gap-6 pt-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Touch Typing Fundamentals</h3>
                <p className="text-sm text-gray-400 mb-2">Learn proper typing technique</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  Beginner
                </span>
                <div className="grid gap-4">
                  <Image
                    src={saiful}
                    alt="Touch Typing Fundamentals"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>4 weeks (8 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Keyboard className="h-4 w-4" />
                    <span>For those typing with 2-4 fingers</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Learn proper finger placement, posture, and technique to type without looking at the keyboard.
                    Includes daily practice exercises.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Enroll Now - $149
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Speed Typing Mastery</h3>
                <p className="text-sm text-gray-400 mb-2">Boost your typing speed</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  Intermediate/Advanced
                </span>
                <div className="grid gap-4">
                  <Image
                    src={saiful}
                    alt="Speed Typing Mastery"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>6 weeks (12 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Keyboard className="h-4 w-4" />
                    <span>For those who can already touch type</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Advanced techniques to increase your typing speed to 60+ WPM with high accuracy. Includes
                    specialized drills and real-world practice.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Enroll Now - $199
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-800" id="design">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-blue-400">
                Graphic Design
              </h2>
              <p className="max-w-[700px] text-gray-400">Learn design principles and professional software</p>
            </div>
          </div>
          <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Photoshop Essentials</h3>
                <p className="text-sm text-gray-400 mb-2">Photo editing and manipulation</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  Beginner
                </span>
                <div className="grid gap-4">
                  <Image
                  src={saiful}
                    alt="Photoshop Essentials"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>6 weeks (12 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Palette className="h-4 w-4" />
                    <span>No prior experience needed</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Learn the fundamentals of Photoshop including layers, selections, retouching, and basic photo
                    manipulation techniques.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Enroll Now - $249
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Illustrator Vector Graphics</h3>
                <p className="text-sm text-gray-400 mb-2">Create scalable illustrations</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  Beginner/Intermediate
                </span>
                <div className="grid gap-4">
                  <Image
                   src={saiful}
                    alt="Illustrator Vector Graphics"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>6 weeks (12 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Palette className="h-4 w-4" />
                    <span>No prior experience needed</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Master vector graphics creation including logos, illustrations, and typography using Adobe
                    Illustrator.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Enroll Now - $249
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/60 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Graphic Design Principles</h3>
                <p className="text-sm text-gray-400 mb-2">Theory and application</p>
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-4">
                  All Levels
                </span>
                <div className="grid gap-4">
                  <Image
                   src={saiful}
                    alt="Graphic Design Principles"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>8 weeks (16 sessions)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Palette className="h-4 w-4" />
                    <span>Suitable for all skill levels</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Learn fundamental design principles including color theory, typography, layout, and composition that
                    apply to all design work.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Enroll Now - $299
                </button>
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
                Need a Custom Training Program?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                I offer personalized training programs tailored to your specific needs or your organization's
                requirements
              </p>
            </div>
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                Contact Me for Custom Training
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

