import {
  Code2,
  BarChart3,
  ServerCog,
  Compass,
  Cpu,
  Megaphone,
  Layers,
  Database,
  Server,
  TrendingUp,
  Building2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Check,
  BadgeCheck,
  Zap,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Code2,
  BarChart3,
  ServerCog,
  Compass,
  Cpu,
  Megaphone,
  Layers,
  Database,
  Server,
  TrendingUp,
  Building2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Check,
  BadgeCheck,
  Zap,
  ChevronDown,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Zap;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
