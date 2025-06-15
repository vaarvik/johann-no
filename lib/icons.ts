import type { LucideIcon } from "lucide-react"
import {
  AlertCircle,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  AtSign,
  Bookmark,
  Calendar,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Cloud,
  Code,
  Copy,
  Database,
  DollarSign,
  Download,
  Edit,
  ExternalLink,
  Eye,
  File,
  Filter,
  Flag,
  Folder,
  FolderOpen,
  Github,
  Globe,
  Grid,
  Hash,
  Heart,
  Home,
  Image,
  Info,
  Key,
  Linkedin,
  List,
  Lock,

  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Music,
  Palette,
  Percent,
  Phone,
  Plus,
  Search,
  Send,
  Server,
  Settings,
  Share,
  Shield,
  Star,
  Tag,
  Trash2,
  Unlock,
  Upload,
  Users,
  Video,
  X,
  Zap
} from "lucide-react"
import React from "react"

// Define all available icons
export const icons = {
  // Development & Tech
  code: Code,
  github: Github,
  database: Database,
  server: Server,
  cloud: Cloud,
  globe: Globe,

  // Navigation
  home: Home,
  menu: Menu,
  x: X,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,

  // Social & Contact
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  messageCircle: MessageCircle,
  send: Send,

  // UI & Design
  palette: Palette,
  users: Users,
  zap: Zap,
  star: Star,
  heart: Heart,
  eye: Eye,
  bookmark: Bookmark,
  flag: Flag,

  // Actions
  download: Download,
  upload: Upload,
  share: Share,
  settings: Settings,
  plus: Plus,
  minus: Minus,
  check: Check,
  edit: Edit,
  copy: Copy,
  trash2: Trash2,
  externalLink: ExternalLink,
  search: Search,
  filter: Filter,

  // Layout
  grid: Grid,
  list: List,

  // Media
  camera: Camera,
  image: Image,
  video: Video,
  music: Music,

  // Files & Folders
  file: File,
  folder: Folder,
  folderOpen: FolderOpen,
  archive: Archive,

  // Security
  shield: Shield,
  lock: Lock,
  unlock: Unlock,
  key: Key,

  // Location & Time
  mapPin: MapPin,
  calendar: Calendar,
  clock: Clock,

  // Alerts & Status
  alertCircle: AlertCircle,
  info: Info,

  // Symbols
  tag: Tag,
  hash: Hash,
  atSign: AtSign,
  dollarSign: DollarSign,
  percent: Percent,
} as const

// Type for icon names
export type IconName = keyof typeof icons

// Type for icon props
export interface IconProps {
  name: IconName
  className?: string
  size?: number
}

// Icon component that renders the specified icon
export function Icon({ name, className, size = 16 }: IconProps): React.ReactElement | null {
  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return React.createElement(IconComponent, { className, size })
}

// Helper function to get icon component by name
export function getIcon(name: IconName): LucideIcon {
  return icons[name]
}
