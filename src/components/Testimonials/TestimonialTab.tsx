import Image from "next/image";

interface TesmotialTabProps {
  name: string;
  selected: string;
  setSelected: (value: string) => void;
  image: any;
  role: string;
  company: string;
}

export const TestimonialTab = ({
  name,
  company,
  selected,
  setSelected,
  role,
  image,
}: TesmotialTabProps) => {
  const isSelected = selected === name;
  return (
    <div
      className={
        "flex space-x-4 items-center flex-1 pb-6 border-b-2 " +
        (isSelected
          ? " border-green-300 "
          : " border-neutral-600 cursor-pointer")
      }
      onClick={() => setSelected(name)}
    >
      <Image
        src={image}
        className="w-16 h-16 rounded-full object-fill"
        alt="Coworker image"
      />
      <div>
        <h1 className="font-tech">{name}</h1>
        <h2 className="text-sm text-neutral-500">
          {role}, <span className="text-green-300">{company}</span>
        </h2>
      </div>
    </div>
  );
};
