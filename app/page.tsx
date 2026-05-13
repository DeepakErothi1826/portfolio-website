"use client"
import styles from "./root.module.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import portfolioImg from "@/assets/portfolio.png";
import movie from "@/assets/movie website.png";

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
} from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { useTheme } from "next-themes";
import ProjectCard from "@/components/projectCard/projectCard";
import type { BlogType, ProjectType, FreelanceProjectType } from "@/lib/types";
import FreelanceProjectCard from "@/components/freelanceProjectCard/freelanceProjectCard";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import DefaultBlogCard from "@/components/blogs/blogCards";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import cn from "classnames";
import GitHubContributions from "@/components/github-contributions";
import ExperienceSection from "@/components/experience-section";
import { TechIcon } from "@/components/language-icons";

const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function RotPage() {
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState("Send");
  const [mouseOver, setMouseOver] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    if (!form.current) return;

    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, EMAIL_PUBLIC_KEY)
      .then(
        () => {
          setButtonText("Sent");
          toast.success("Message Sent Successfully!");
          form.current?.reset();
        },
        (error: any) => {
          console.error(error);
          setButtonText("Send");
          toast.error("Message Failed to Send!");
        }
      );
  };
  const projectsList: ProjectType[] = [
    {
      name: "MOC Cafe  Website Project",
      imageUrl: "/MOC_Cafe.png",
      description:
        "I designed and developed the MOC Cafe website as a freelancing project to create a visually appealing and engaging online presence. The website highlights the cafe's menu, ambiance, and brand identity with a modern and responsive design. The focus was on delivering a smooth user experience, easy navigation, and fast performance across all devices.",
      liveLink: "https://moc-cafe.vercel.app/",
      work: "Solo Work",
      status: "Active",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma", "3d animation"]
    },
    {
      name: "Anna Idli Restaurant  Website Project",
      imageUrl: "/Anna - Idli.png",
      description:
        "I developed a modern and user-friendly website for Anna Idli Restaurant as a freelancing project. The goal was to create an appealing online presence that showcases the menu, highlights the brand, and makes it easy for customers to explore offerings. The design focuses on simplicity, responsiveness, and a smooth user experience across all devices.",
      liveLink: "https://anna-idli-resturant.vercel.app/",
      work: "Solo Work",
      status: "Active",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma", "3d animation"]
    },
    {
      name: "Mahima Dental Website Project",
      imageUrl: "/dental thumnail.png",
      description:
        "I designed and developed the MOC Cafe website as a freelancing project to create a visually appealing and engaging online presence. The website highlights the cafe’s menu, ambiance, and brand identity with a modern and responsive design. The focus was on delivering a smooth user experience, easy navigation, and fast performance across all devices.",
      liveLink: "https://dental-clinic-wshy.vercel.app/",
      work: "Solo Work",
      status: "Active",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma", "3d animation"]
    },
    {
      name: "Portfolio",
      imageUrl: portfolioImg.src,
      description:
        "A modern portfolio project built with TypeScript, React.js, and Next.js, showcasing clean architecture, reusable components, and performance-focused development. Designed to highlight best practices in modern frontend engineering.",
      liveLink: "https://portfolio-website-xi-blond-47.vercel.app/",
      work: "Solo Work",
      status: "Active",
      techStack: ["React", "TypeScript", "TailwindCSS"]
    },
    {
      name: "Cinematrixx",
      imageUrl: movie.src,
      description:
        "Cinematrixx is a movie discovery web app where users can explore trending, top-rated, and upcoming films with detailed overviews, trailers, genres, and cast information.",
      liveLink: "https://deepakerothi1826.github.io/Cinematrixx/",
      work: "Solo Work",
      status: "Active",
      techStack: ["React", "TypeScript", "TailwindCSS"]
    },
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
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma"]
    },
    {
      name: "Ericson Mobile Application UI/UX Design",
      imageUrl: "https://image2url.com/images/1761475416834-53186d5c-a7ee-4c9d-b743-8376f9593954.png",
      description:
        "Ericson Mobile Application UI/UX Design is a clean, user-friendly interface crafted to simplify health insurance access and management. It features intuitive login and signup flows, clear navigation, and essential service details, all presented in a modern, responsive layout for a seamless user experience across devices.",
      liveLink: "https://www.figma.com/proto/tuFr9b3Qmnc8hRGeLObBfh/Untitled?node-id=1-3&starting-point-node-id=9%3A2",
      work: "Solo Work",
      status: "Active",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma"]
    },
    {
      name: "Login page sign-up flow Ui/Ux",
      imageUrl: "https://image2url.com/images/1761475548872-7e832c30-c49a-4e7b-b81d-6ffc422170ad.png",
      description:
        "A clean and intuitive login and registration interface designed for a seamless user experience. The flow emphasizes simplicity, accessibility, and modern design principles—guiding users effortlessly through account creation and authentication. Clear visual hierarchy, engaging micro-interactions, and responsive layouts ensure consistency across devices.",
      liveLink: "https://www.figma.com/proto/bk4wze5dJnU1tVWHKaKqCx/Mobile-App-Signup-Flow?node-id=7-64&p=f&t=W9XrZpaYsE2NIzgP-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A64",
      work: "Solo Work",
      status: "Active",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma"]
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
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma"]
    },
  ]

  const freelanceProjects: FreelanceProjectType[] = [
    {
      title: "MOC Cafe — Digital Presence Transformation",
      description: "A complete website solution for MOC Cafe to establish a modern online presence, showcase their menu and ambiance, and attract more customers through a visually engaging digital storefront.",
      problem: "MOC Cafe lacked an online presence. Potential customers couldn't discover the cafe's menu, ambiance, or location online, resulting in missed foot traffic and brand visibility.",
      solution: "Designed and developed a full-featured website with a modern aesthetic, interactive menu display, location integration, and performance optimization for fast loading across all devices.",
      role: "Full-Stack Developer & UI/UX Designer — end-to-end development from wireframes to deployment.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma", "3D Animations"],
      features: [
        "Interactive menu with category filtering",
        "3D animated hero section",
        "Responsive mobile-first design",
        "Contact & location integration",
        "Performance optimized (95+ Lighthouse)",
      ],
      challenges: [
        "Achieving smooth 3D animations without affecting page load time",
        "Creating a cohesive brand identity from scratch",
        "Ensuring consistent rendering across devices",
      ],
      results: "Delivered a high-performance website that effectively communicates the cafe's brand. Client reported increased customer inquiries and positive feedback on the modern design.",
      imageUrl: "/MOC_Cafe.png",
      liveUrl: "https://moc-cafe.vercel.app/",
      status: "Completed",
      client: "MOC Cafe",
    },
    {
      title: "Anna Idli Restaurant — Online Brand Launch",
      description: "A brand-focused website for Anna Idli Restaurant, designed to bring their authentic dining experience online and make it easy for customers to explore offerings and connect with the restaurant.",
      problem: "The restaurant needed a digital presence that matched the quality of their food. Their existing setup didn't effectively showcase the menu or brand story to potential customers.",
      solution: "Built a visually rich website with a warm color palette, seamless navigation, and a focus on menu presentation. Incorporated animations for an engaging browsing experience.",
      role: "Solo Developer & Designer — handled concept, design, development, and deployment.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma", "3D Animations"],
      features: [
        "Animated food gallery with lazy loading",
        "Digital menu with pricing & categories",
        "Mobile-optimized ordering flow",
        "SEO-optimized structure",
        "Social media integration",
      ],
      challenges: [
        "Translating the restaurant's warm ambiance into a digital experience",
        "Optimizing large food photography for fast loading",
        "Balancing visual richness with performance",
      ],
      results: "Launched a production-ready website that serves as the restaurant's primary digital storefront, receiving consistent traffic and positive customer feedback.",
      imageUrl: "/Anna - Idli.png",
      liveUrl: "https://anna-idli-resturant.vercel.app/",
      status: "Completed",
      client: "Anna Idli Restaurant",
    },
    {
      title: "Mahima Dental — Professional Healthcare Website",
      description: "A professional healthcare website for Mahima Dental Clinic, designed to build trust and make it easy for patients to find services, book appointments, and learn about the clinic.",
      problem: "Mahima Dental Clinic needed a professional online presence that conveyed trustworthiness and made it simple for patients to discover services and contact the clinic.",
      solution: "Created a clean, professional website with clear service categorization, doctor profiles, appointment booking flow, and a calming color scheme appropriate for healthcare.",
      role: "Solo Developer & Designer — full ownership of design system, development, and deployment.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Figma", "3D Animations"],
      features: [
        "Service catalog with detailed descriptions",
        "Doctor/team profile section",
        "Appointment inquiry form",
        "Patient testimonial section",
        "Location & contact integration",
      ],
      challenges: [
        "Designing a healthcare site that feels warm yet professional",
        "Organizing complex medical service information clearly",
        "Ensuring accessibility and readability standards",
      ],
      results: "Delivered a polished healthcare website that establishes online credibility and provides patients with a seamless experience to learn about and connect with the clinic.",
      imageUrl: "/dental thumnail.png",
      liveUrl: "https://dental-clinic-wshy.vercel.app/",
      status: "Completed",
      client: "Mahima Dental Clinic",
    },
  ]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 4))
  const [showMoreProject, setShowMoreProject] = useState("less")

  const techStack1 = [
    { name: "Next.js" },
    { name: "Cloudinary" },
    { name: "Auth.js" },
    { name: "PostgreSQL" },
    { name: "Supabase" },
    { name: "shadcn/ui" },
  ]
  const techStack2 = [
    { name: "React Native" },
    { name: "Python" },
    { name: "MongoDB" },
    { name: "FastAPI" },
    { name: "Git" },
    { name: "Radix UI" },
  ]

  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => { setMounted(true) }, [])

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
  ]

  return (
    <div className={styles.main}>
      <div
        className={cn(
          "z-[-1]",
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "opacity: 0.25;",
          "transition-colors duration-400",
        )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-(--bgColor) mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-(--bgColor) transition-colors duration-400"></div>

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
            <p className={styles.SWEpara}>Full-Stack Developer</p>
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
              {mounted ? (currentTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />) : null}
              <p>Theme</p>
            </button>
          </div>
        </div>

        <div className={styles.ctaRow}>
          <a href="#contact" className={styles.ctaPrimary}>
            Hire Me <ArrowUpRight size={16} />
          </a>
          <a href="mailto:deepakerothi7@gmail.com" className={styles.ctaSecondary}>
            Let&apos;s Talk
          </a>
        </div>

        <div className={styles.bio}>
          <p className="font-mono tracking-tighter underline leading-7 font-light text-2xl">📍Mumbai,Maharashtra</p>
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
            className={`${styles.tabItem} ${displayTab == "freelancing" && styles.tabItemActive}`}
            onClick={() => setDisplayTab("freelancing")}
          >
            Freelancing
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "articles" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("blogs")
            }}
          >
            Contact
            <div className={styles.hoverThing} />
          </div>
        </div>

        {displayTab == "info" && (
          <>
            <div className={styles.projectsSection}>
              {/* Move GitHub contributions above the heading as requested */}
              <GitHubContributions username="DeepakErothi1826" />

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
              <h1 className="font-mono font-semibold text-4xl mb-6">My Tech-Stack</h1>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {/* Marquee 1 */}
                <Marquee pauseOnHover>
                  {techStack1.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center mx-4"
                    >
                      <TechIcon name={tech.name} size={40} />
                      <p className="mt-2 text-sm text-center">{tech.name}</p>
                    </div>
                  ))}
                </Marquee>

                {/* Marquee 2 (reverse) */}
                <Marquee reverse pauseOnHover>
                  {techStack2.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center mx-4"
                    >
                      <TechIcon name={tech.name} size={40} />
                      <p className="mt-2 text-sm text-center">{tech.name}</p>
                    </div>
                  ))}
                </Marquee>

                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent dark:from-black" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent dark:from-black" />
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

        {displayTab == "freelancing" && (
          <div className={styles.freelanceSection}>
            <div className={styles.freelanceHeader}>
              <h2 className="font-mono font-semibold underline leading-10 text-3xl">Client Work</h2>
              <p className={styles.freelanceSubtext}>
                Real-world projects delivered for businesses — from restaurants to healthcare clinics.
                Each project is a case study in problem-solving, design thinking, and clean execution.
              </p>
            </div>

            <div className={styles.freelanceGrid}>
              {freelanceProjects.map((project, i) => (
                <FreelanceProjectCard key={i} project={project} />
              ))}
            </div>

            <div className={styles.freelanceCTA}>
              <h3 className="font-mono font-semibold text-xl">Want something built?</h3>
              <p>Let&apos;s work together to bring your idea to life.</p>
              <a href="#contact" className={styles.ctaPrimary}>
                Start a Project <ArrowUpRight size={16} />
              </a>
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
        <div className={styles.testimonialSection}>
          <h2 className="font-mono font-semibold underline leading-10 text-3xl text-center mb-8">What Clients Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialText}>
                &ldquo;Deepak delivered an outstanding website for our cafe. The design perfectly captures our brand,
                and the smooth animations really wow our customers. Highly recommended!&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>M</div>
                <div>
                  <p className={styles.testimonialName}>MOC Cafe</p>
                  <p className={styles.testimonialRole}>Client — Restaurant Website</p>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialText}>
                &ldquo;Professional, responsive, and talented. Deepak took our vision and turned it into a beautiful
                website that our patients love. The appointment flow is seamless.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>M</div>
                <div>
                  <p className={styles.testimonialName}>Mahima Dental Clinic</p>
                  <p className={styles.testimonialRole}>Client — Healthcare Website</p>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialText}>
                &ldquo;The website Deepak built for our restaurant perfectly captures our vibe. Online orders
                have increased significantly since launch. Truly a game-changer for our business.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>A</div>
                <div>
                  <p className={styles.testimonialName}>Anna Idli Restaurant</p>
                  <p className={styles.testimonialRole}>Client — Restaurant Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="contact"
          className="mt-20 mb-20 w-[100%] md:w-[70%] lg:w-[70%] mx-auto transition-all duration-300"
          onMouseOver={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
          style={{
            borderRadius: mouseOver ? "0" : "30px",
            transform: mouseOver ? "scale(1.02)" : "scale(1)",
            boxShadow: mouseOver
              ? "0 0 25px rgba(255,255,255,0.15)"
              : "0 0 10px rgba(255,255,255,0.05)",
          }}
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-center underline mb-6">
              Get In Touch
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 text-left"
            >
              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-md px-3 py-2 bg-transparent border border-white/20 focus:border-white/40 outline-none"
              />
              <input
                name="user_email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md px-3 py-2 bg-transparent border border-white/20 focus:border-white/40 outline-none"
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                rows={4}
                required
                className="w-full rounded-md px-3 py-2 bg-transparent border border-white/20 focus:border-white/40 outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="mt-4 py-2 px-6 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </section>
        {/* {styles.pageFooter} */}
        <div className={styles.footerCTA}>
          <h3 className="font-mono font-semibold text-xl">Available for Freelance Projects</h3>
          <p className="opacity-70 text-sm">Let&apos;s build something great together.</p>
          <div className={styles.footerCtaRow}>
            <a href="mailto:deepakerothi7@gmail.com" className={styles.ctaPrimary}>
              Hire Me <ArrowUpRight size={16} />
            </a>
            <Link href="/resume" className={styles.ctaSecondary}>
              View Resume <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-white/10 pt-4 text-sm text-muted-foreground">
          <p className="text-center opacity-[0.7] max-w-[580px] font-mono font-semibold text-base tracking-tight">
            Built by Deepak Erati | Last Updated: October 28, 2025.
          </p>
        </div>
      </div>
    </div>
  )
}

