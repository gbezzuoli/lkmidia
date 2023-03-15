interface SocialMediaButtonProps {
  icon: React.ReactElement;
  href: string;
  alt: string;
}

export const SocialMediaButton = ({
  icon,
  href,
  alt,
}: SocialMediaButtonProps) => {
  return (
    <a
      href={href}
      className="flex flex-row items-center space-x-1 text-neutral-50 transition-all hover:scale-105 cursor-pointer"
    >
      <>
        {icon}
        <span>{alt}</span>
      </>
    </a>
  );
};
