import { FiAward, FiBriefcase, FiCheckCircle, FiClock, FiCode, FiFigma, FiLayers, FiServer, FiShield, FiSmartphone, FiStar, FiTool, FiUsers, FiZap } from "react-icons/fi";

const icons = {
  award: FiAward,
  briefcase: FiBriefcase,
  check: FiCheckCircle,
  clock: FiClock,
  code: FiCode,
  figma: FiFigma,
  layers: FiLayers,
  server: FiServer,
  shield: FiShield,
  smartphone: FiSmartphone,
  star: FiStar,
  tool: FiTool,
  users: FiUsers,
  zap: FiZap,
};

export const getIcon = (name) => icons[name] ?? FiStar;
