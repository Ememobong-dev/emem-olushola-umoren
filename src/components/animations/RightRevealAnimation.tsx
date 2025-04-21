import { motion } from 'framer-motion';

interface RightRevealAnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

const RightRevealAnimatedText: React.FC<RightRevealAnimatedTextProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 100 }}  // Start off-screen to the right
      whileInView={{ opacity: 1, x: 0 }}  // Animate into view from the right
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}  // Trigger animation when 20% is in view
      style={{ overflow: 'hidden' }}  // Prevent overflow during animation
    >
      {children}
    </motion.div>
  );
};

export default RightRevealAnimatedText;
