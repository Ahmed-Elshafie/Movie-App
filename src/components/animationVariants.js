export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.01,
      ease: 'easeOut',
    },
  },
};
