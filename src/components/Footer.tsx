const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white text-center py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Website. Built with rage :&#41;
      </p>
    </footer>
  );
};

export default Footer;
