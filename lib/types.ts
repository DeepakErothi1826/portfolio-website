export interface ProjectType {
    name: string,
    description: String,
    imageUrl: string,
    githubRepo?: string | null,
    liveLink: string,
    techStack: string[],
    blogLink?: string | null,
    work: string,
    status: string
}

export interface FreelanceProjectType {
  title: string
  description: string
  problem: string
  solution: string
  role: string
  techStack: string[]
  features: string[]
  challenges: string[]
  results: string
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  status: "Completed" | "In Progress"
  client?: string
}

export interface BlogType {
    // _id?: ObjectId;
    blogId: string;
    createdAt: number;
    updatedAt: number;
    ownerId: string;
    ownerName: string;
    lastEditTime: number | null,
    parentNodeIdArray?:string[]|null,
  
    viewStatus: string;
    blogTitle: string;
    blogTextContent: string;
    thumbnailUrl?: string | null;
  
    tags: string[];
    likes: string[];
    views: number;
    bookmarks: number;
    commentsNumber: number;
  }
