"use client"
import styles from "./root.module.css"
import Image from "next/image"
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Github,
  Linkedin,
  Mail,
  Moon,
  Rss,
  Sun,
  Briefcase,
  Award,
} from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { useTheme } from "next-themes"
import ProjectCard from "@/components/projectCard/projectCard"
import type { BlogType, ProjectType } from "@/lib/types"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import DefaultBlogCard from "@/components/blogs/blogCards"
import Link from "next/link"
import { useState, useEffect } from "react"
import cn from "classnames"
import GitHubContributions from "@/components/github-contributions"
import ExperienceSection from "@/components/experience-section"

export default function RotPage() {
  const projectsList: ProjectType[] = [
    {
      name: "Smoke&Jones Restaurant Mobile Appication",
      imageUrl:
        "https://image2url.com/images/1761475063565-ac287aae-0d25-4f73-acfa-905124af7aa2.png",
      description:
        "Smoke&Jones Restaurant Mobile Application is a modern food ordering app that offers an intuitive and visually engaging interface for browsing menus, customizing orders, and completing secure payments — delivering a seamless and enjoyable dining experience right from your phone.",
      liveLink: "https://www.figma.com/proto/Ttpb8odZezsB2TO4H4JQCj/Restaurant-menu?node-id=70-554&starting-point-node-id=48%3A300",
      work: "Solo Work",
      status: "Active",
       techStack: ["React", "TypeScript", "TailwindCSS"]
    },
    {
      name: "FruityBuss Parallax Experience",
      imageUrl: "https://image2url.com/images/1761475251018-8f59f8b4-5f52-4806-84ac-4ff915158521.png",
      description:
        "FruityBuss is a parallax-based UI/UX design project showcasing a vibrant, interactive beverage website with smooth animations and engaging user experience.",
      liveLink: "https://www.figma.com/proto/cblPAFb9yEOMISie1zJDjf/Untitled?node-id=0-1&fuid=1412720828761625255",
      work: "Solo Work",
      status: "Active",
       techStack: ["React", "TypeScript", "TailwindCSS"]
    },
        {
      name: "Ericson Mobile Application UI/UX Design",
      imageUrl: "https://image2url.com/images/1761475416834-53186d5c-a7ee-4c9d-b743-8376f9593954.png",
      description:
        "Ericson Mobile Application UI/UX Design is a clean, user-friendly interface crafted to simplify health insurance access and management. It features intuitive login and signup flows, clear navigation, and essential service details, all presented in a modern, responsive layout for a seamless user experience across devices.",
      liveLink: "https://www.figma.com/proto/tuFr9b3Qmnc8hRGeLObBfh/Untitled?node-id=1-3&starting-point-node-id=9%3A2",
      work: "Solo Work",
      status: "Active",
       techStack: ["React", "TypeScript", "TailwindCSS"]
    },
    {
      name: "Login page sign-up flow Ui/Ux",
      imageUrl: "https://image2url.com/images/1761475548872-7e832c30-c49a-4e7b-b81d-6ffc422170ad.png",
      description:
        "A clean and intuitive login and registration interface designed for a seamless user experience. The flow emphasizes simplicity, accessibility, and modern design principles—guiding users effortlessly through account creation and authentication. Clear visual hierarchy, engaging micro-interactions, and responsive layouts ensure consistency across devices.",
      liveLink: "https://www.figma.com/proto/bk4wze5dJnU1tVWHKaKqCx/Mobile-App-Signup-Flow?node-id=7-64&p=f&t=W9XrZpaYsE2NIzgP-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A64",
      work: "Solo Work",
      status: "Active",
       techStack: ["React", "TypeScript", "TailwindCSS"]
    },
    {
      name: "MarvelVerse Cinematic Hero Showcase",
      imageUrl:
        "https://image2url.com/images/1761476171243-73066e0e-1c64-45fd-bcf7-629d04f9c3c4.png",
      description:
        "A Marvel-themed responsive website with a bold, cinematic UI, showcasing iconic superheroes through striking visuals, smooth navigation, and immersive storytelling.",
      liveLink: "https://www.figma.com/proto/Kgyl7WjNQudULBvdlEssWr/Untitled?node-id=3-2&starting-point-node-id=3%3A2&scaling=scale-down&content-scaling=fixed",
      work: "Solo Work",
      status: "Active",
       techStack: ["React", "TypeScript", "TailwindCSS"]
    },
  ]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 3))
  const [showMoreProject, setShowMoreProject] = useState("less")

  const techStack1 = [
    {
      name: "Next.js",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764539/nextjs_gyqxdo.png",
    },
    {
      name: "Cloudinary",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/cloudinary_jcjz1e.webp",
    },
    {
      name: "Auth.js",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/authjs_g9rfwm.webp",
    },
    {
      name: "PostgreSQL",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/psotgresql_ggzxtu.png",
    },
    {
      name: "Supabase",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/supabase_eban6b.png",
    },
    {
      name: "shadCn",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765234/shadcn_xvjz01.png",
    },
  ]
  const techStack2 = [
    {
      name: "React Native",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/react_fxopt7.png",
    },
    {
      name: "Python",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/python_gtxoax.webp",
    },
    {
      name: "MongoDB",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg",
    },
    {
      name: "FastAPI",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/FastAPI_prcozs.png",
    },
    {
      name: "Git",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764943/gitlogo_ozinof.png",
    },
    {
      name: "Radix UI",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765176/radixui_nmbq9s.png",
    },
  ]

  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 140)
  })

  const [displayTab, setDisplayTab] = useState("info")

  const [blogsArray, setBlogsArray] = useState<BlogType[] | null>(null)
  useEffect(() => {
    const a = async () => {
      const res = await fetch("/api/getBlogs")
      if (res.ok) {
        const blogsArray = await res.json()
        setBlogsArray(blogsArray)
        console.log("blogs: ", blogsArray)
      }
    }
    a()
  }, [])

  type CertificationType = {
    title: string
    issuer: string
    imageUrl?: string
    proofUrl?: string
    summary?: string
  }

  const certifications: CertificationType[] = [
       {
      title: "Ericson : Mobile Application Developer",
      issuer: "UPenn | 2024",
      imageUrl: "/images/Ericson Certif.jpg",
      proofUrl: "https://image2url.com/images/1761580990285-1c0e6b44-1f99-4e7d-ba9d-4736fad2c039.jpg",
      summary: "Mobile Application Development, UI Implementation, API Integration, and Performance Optimization for Android Applications.",
    },
       {
      title: "Shunayaverse : Full-Stack Developer",
      issuer: "UPenn | 2024",
      imageUrl: "/images/Shunayaverse Experience.png",
      proofUrl: "https://image2url.com/images/1761580139853-0c9ec924-0637-4e86-9f6c-8a2d92beeef3.png",
      summary: "UI/UX Design, Wireframing, Prototyping, User Research, and Visual Design using Figma.",
    },
    {
      title: "CodeSoft: UI/UX Designer",
      issuer: "UPenn | 2024",
      imageUrl: "/images/CodeSoft Certif.png",
      proofUrl: "https://drive.google.com/file/d/1thxWx5jHpOp5aBkWnZa7ZQ4kNM26aCgy/view",
      summary: "UI/UX Design, Wireframing, Prototyping, User Research, and Visual Design using Figma.",
    },
    // {
    //   title: "Robotics: Computational Motion Planning",
    //   issuer: "UPenn | 2024",
    //   imageUrl: "/images/upenn.jpg",
    //   proofUrl: "https://image2url.com/images/1761580139853-0c9ec924-0637-4e86-9f6c-8a2d92beeef3.png",
    //   summary: "Graph Theory and Computational Logic, MATLAB and Network Routing, Computational Thinking with AI.",
    // },
    // {
    //   title: "Robotic Process Automation",
    //   issuer: "UiPath | 2024",
    //   imageUrl: "/images/uipath.jpg",
    //   proofUrl: "https://coursera.org/share/f82b4a523d8a2ffdaf25008475f943d1",
    //   summary: "UiRPA, Web Scraping and Data Manipulation, UI and UI Components, Test Automation.",
    // },
  ]

  return (
    <div className={styles.main}>
      <div
        className={cn(
          "z-[-1]",
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "[opacity:0.25]",
          "transition-colors duration-400",
        )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bgColor)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[var(--bgColor)] transition-colors duration-400"></div>

      <div className={styles.detailsHolder}>
        <div className={styles.heroSection}>
          <motion.div
            style={{
              transition: "all 0.1s ease",
              zIndex: 10,
              maxWidth: 650,
              width: "100%",
              borderRadius: "0px 0px 10px 10px",
            }}
            animate={isScrolled ? "scrolled" : "normal"}
            variants={{
              normal: { position: "static" },
              scrolled: { top: 0, position: "fixed", height: 60, backdropFilter: "blur(10px)" },
            }}
          >
            <motion.div className="relative h-full w-full flex items-center justify-end px-[15px]">
                <motion.img
                  // src="https://image2url.com/images/1761469062549-cafd14bb-7bde-41e0-8d0f-08288f537421.jpg"
                  src="https://image2url.com/images/1761469279402-9e0ba78f-50e9-4919-a49d-020336fe14ed.png"
                  alt="Profile photo of Aayush Mishra"
                  initial={{ height: 200, width: 200, borderRadius: 9999, margin: "0px auto", position: "static" }}
                  animate={isScrolled ? "scrolled" : "normal"}
                  variants={{
                    normal: { height: 200, width: 200, borderRadius: 9999 },
                    scrolled: { height: 40, width: 40, borderRadius: 9999, position: "absolute", top: 10, left: 10 },
                  }}
                  whileHover={{ boxShadow: "0 0 30px 2px rgba(255, 255, 255, 0.5)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ objectFit: "cover", transition: "box-shadow 0.1s" }}
                />
              </motion.div>
          </motion.div>

          <div className="flex flex-col items-center gap-0.5">
            <h1 className="font-mono font-semibold leading-10 text-3xl">Deepak Erati</h1>
            <p className={styles.SWEpara}>Front-End Developer</p>
          </div>

          <div className={styles.socialsDiv}>
            <Link href="https://x.com/DeepakErati18" target="_blank">
              <div className={styles.socialsItem}>
                <Image height={15} width={15} alt="" src="/x-social-media-white-icon.svg" unoptimized />
                <p>X app</p>
              </div>
            </Link>

            <Link href="https://github.com/DeepakErothi1826" target="_blank">
              <div className={styles.socialsItem}>
                <Github size={15} color="white" />
                <p>Github</p>
              </div>
            </Link>

            <Link href="mailto:deepakerothi7@gmail.com" target="_blank">
              <div className={styles.socialsItem}>
                <Mail size={15} color="white" />
                <p>Mail</p>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/deepakerothi/" target="_blank">
              <div className={styles.socialsItem}>
                <Linkedin size={15} color="white" />
                <p>LinkedIn</p>
              </div>
            </Link>

            <button
              type="button"
              className={styles.socialsItem}
              onClick={() => setCurrentTheme(currentTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
            >
              {currentTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              <p>Theme</p>
            </button>
          </div>
        </div>

        <div className={styles.bio}>
          <p className="font-mono tracking-tighter underline leading-7 font-light text-2xl">📍Mumbai, Maharashtra</p>
        </div>

        <div className={styles.tabsHolder}>
          <div
            className={`${styles.tabItem} ${displayTab == "info" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("info")
            }}
          >
            Info
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "experience" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("experience")
            }}
          >
            Experience
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "certifications" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("certifications")
            }}
          >
            Certifications
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "articles" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("blogs")
            }}
          >
            Blogs
            <div className={styles.hoverThing} />
          </div>
        </div>

        {displayTab == "info" && (
          <>
            <div className={styles.projectsSection}>
              {/* Move GitHub contributions above the heading as requested */}
              <GitHubContributions username="https://github.com/DeepakErothi1826" />

              <h1 className="font-mono font-semibold underline leading-10 text-3xl">Projects</h1>

              <div className={styles.projectsHolder}>
                {projectDisplayList.map((project, index) => (
                  <div key={index} className="flex flex-col gap-2.5">
                    <ProjectCard projectDetails={project} />
                    {index < projectDisplayList.length - 1 && (
                      <div className="bg-(--fgColor) w-[90%] opacity-[0.4] font-semibold h-0.5 mx-6 my-0"></div>
                    )}
                  </div>
                ))}
                <div
                  onClick={() => {
                    if (showMoreProject == "less") {
                      setProjectDisplayList(projectsList)
                      setShowMoreProject("more")
                    } else {
                      setProjectDisplayList(projectsList.slice(0, 3))
                      setShowMoreProject("less")
                    }
                  }}
                  className={styles.showMore}
                >
                  {showMoreProject == "less" && (
                    <>
                      Show More <ChevronRight size={20} />
                    </>
                  )}
                  {showMoreProject == "more" && (
                    <>
                      <ChevronLeft size={20} />
                      Show less
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.techStack}>
              <h1 className="font-mono font-semibold text-4xl">My Tech-Stack</h1>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:35s]">
                  {techStack1.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={20} width={20} unoptimized />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:35s]">
                  {techStack2.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={20} width={20} unoptimized />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-(--bgColor)"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-(--bgColor)"></div>
              </div>
            </div>
          </>
        )}

        {displayTab == "experience" && (
          <>
            <div className="mt-[30px] w-full mx-auto max-w-[1100px] px-4 sm:px-6">
              <ExperienceSection />
            </div>
          </>
        )}

        {displayTab == "certifications" && (
          <div className="mt-[30px] w-full mx-auto max-w-[1100px]">
            <h2 className="text-[22px] font-semibold mb-4 font-mono">Certifications</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((c, i) => (
                <div key={i} className="rounded-xl border border-white/10 p-4 bg-white/5">
                  {c.proofUrl ? (
                    <Link
                      href={c.proofUrl}
                      target="_blank"
                      className="group relative block aspect-16/10 overflow-hidden rounded-md"
                      aria-label={`Open certificate proof: ${c.title}`}
                    >
                      <Image
                        src={c.imageUrl || "/placeholder.svg"}
                        alt={`${c.title} preview`}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div
                        className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-black/70 p-2 text-white
                                   group-hover:bg-black/80 transition"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="group relative block aspect-16/10 overflow-hidden rounded-md"
                      aria-hidden="true"
                    >
                      <Image
                        src={c.imageUrl || "/placeholder.svg"}
                        alt={`${c.title} preview`}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div
                        className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-black/70 p-2 text-white
                                   group-hover:bg-black/80 transition"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <h3 className="font-mono font-bold text-lg">{c.title}</h3>
                    <p className="opacity-80 text-base underline">{c.issuer}</p>
                    <p className="opacity-70 mt-1 text-sm">{c.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {displayTab == "articles" && (
          <>
            <div className="flex flex-col mx-auto gap-2.5 w-full max-w-[500px] mt-[50px]">
              {blogsArray && blogsArray.map((blog, index) => <DefaultBlogCard blogData={blog} key={index} />)}
            </div>
          </>
        )}

        <div className={styles.pageFooter}>
          <Link href="/resume">
            <p className={`flex items-center gap-[5px] underline font-mono font-bold text-2xl leading-[0.55rem] ${styles.resumeBtn}`}>
              Resume <ArrowUpRight className="w-auto h-[26px]" size={16} />
            </p>
          </Link>
          <p className="text-center opacity-[0.7] max-w-[580px] font-mono font-semibold text-base tracking-tight">
            Built by Deepak Erati | Last Updated: August 31, 2025.
          </p>
        </div>
      </div>
    </div>
  )
}
