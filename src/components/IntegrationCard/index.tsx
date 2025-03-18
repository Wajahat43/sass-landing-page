import Image from "next/image";

interface IntegrationCardProps {
  name: string;
  icon: string;
  description: string;
  className?: string;
}

export const IntegrationCard = (props: IntegrationCardProps) => {
  const { name, icon, description } = props;

  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-neutral-900 p-6">
      <div className="flex justify-center">
        <Image src={icon} alt={name} className="size-24" />
      </div>

      <h3 className="text-center text-3xl">{name}</h3>
      <p className="text-center text-white/50">{description}</p>
    </div>
  );
};
