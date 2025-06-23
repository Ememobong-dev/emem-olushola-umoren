"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import shareIcon from "@/public/icons/share-icon.svg";
import copy from "copy-to-clipboard";
import { useTheme } from "@/src/context/ThemeContext";


const ShareButton = ({ title }: { title: string }) => {
    const { theme } = useTheme();
  
    const handleShare = async () => {
        const currentUrl = window.location.href;
    
        if (navigator.share) {
          try {
            await navigator.share({
              title,
              url: currentUrl,
            });
          } catch (error) {
            console.error("Web Share failed:", error);
          }
        } else {
          const copied = copy(currentUrl);
          if (copied) {
            alert("Link copied to clipboard!");
          } else {
            alert("Failed to copy link.");
          }
        }
      };

  return (
    <motion.button
      onClick={handleShare}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className={` ${theme === "light" ? "hover:bg-black/75 text-black" : "hover:bg-white/20"} fixed bottom-6 cursor-pointer right-6 z-[1000px] px-6 py-3 rounded-full bg-dark border border-white text-white font-azeret-mono text-sm  transition-all duration-300 flex items-center gap-2`}
    >
      <Image src={shareIcon} alt="share icon" />
      Share Article
    </motion.button>
  );
};

export default ShareButton;
