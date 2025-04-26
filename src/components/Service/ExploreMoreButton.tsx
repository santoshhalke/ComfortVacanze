"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const ExploreMoreButton = () => {
  return (
    <motion.div
      className="mt-20 pt-4 items-center flex justify-center"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay: 1.4, duration: 1.8 }}
    >
      <Link href="/about" passHref>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="items-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#EB7C19] hover:bg-orange-700 transition-colors duration-200"
        >
          Explore More
        </motion.div>
      </Link>
    </motion.div>
  );
};
