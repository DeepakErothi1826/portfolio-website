"use client"
import type { FreelanceProjectType } from "@/lib/types"
import styles from "./freelanceProjectCard.module.css"
import Image from "next/image"
import { ArrowUpRight, Github, CheckCircle2, Lightbulb, Target, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FreelanceProjectCard({ project }: { project: FreelanceProjectType }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.imageOverlay}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              {project.status}
            </div>
            {project.client && (
              <div className={styles.clientBadge}>Client: {project.client}</div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.studyGrid}>
          <div className={styles.studyItem}>
            <div className={styles.studyIcon}>
              <Target size={16} />
            </div>
            <div>
              <span className={styles.studyLabel}>Problem</span>
              <p className={styles.studyText}>{project.problem}</p>
            </div>
          </div>

          <div className={styles.studyItem}>
            <div className={styles.studyIcon}>
              <Lightbulb size={16} />
            </div>
            <div>
              <span className={styles.studyLabel}>Solution</span>
              <p className={styles.studyText}>{project.solution}</p>
            </div>
          </div>

          <div className={styles.studyItem}>
            <div className={styles.studyIcon}>
              <CheckCircle2 size={16} />
            </div>
            <div>
              <span className={styles.studyLabel}>My Role</span>
              <p className={styles.studyText}>{project.role}</p>
            </div>
          </div>

          <div className={styles.studyItem}>
            <div className={styles.studyIcon}>
              <Award size={16} />
            </div>
            <div>
              <span className={styles.studyLabel}>Result</span>
              <p className={styles.studyText}>{project.results}</p>
            </div>
          </div>
        </div>

        <div className={styles.techStackRow}>
          {project.techStack.map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <div className={styles.featureList}>
          <span className={styles.featureLabel}>Key Features</span>
          <div className={styles.featureGrid}>
            {project.features.map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <CheckCircle2 size={14} className={styles.featureCheck} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.challengeList}>
          <span className={styles.challengeLabel}>Challenges Solved</span>
          <ul className={styles.challengeItems}>
            {project.challenges.map((challenge, i) => (
              <li key={i} className={styles.challengeItem}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className={styles.liveBtn}>
              Live Demo <ArrowUpRight size={16} />
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" className={styles.githubBtn}>
              <Github size={16} /> Source
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
