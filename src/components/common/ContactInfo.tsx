interface ContactInfoProps {
  icon: string;
  title: string;
  info: string;
  bgColor: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  info,
  bgColor,
}) => {
  return (
    <div className="flex items-center justify-center md:justify-start space-x-4">
      <div
        className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white`}
      >
        {icon}
      </div>
      <div className="text-left">
        <div className="font-semibold text-gray-800 dark:text-white">
          {title}
        </div>
        <div className="text-gray-600 dark:text-gray-300">{info}</div>
      </div>
    </div>
  );
};
