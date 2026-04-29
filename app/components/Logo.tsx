import Image from 'next/image';

type LogoProps = {
  sizeClassName?: string;
  className?: string;
};

export default function Logo({
  sizeClassName = 'h-[64px] w-[64px]',
  className = '',
}: LogoProps) {
  return (
    <div
      className={`relative ${sizeClassName} shrink-0 overflow-hidden rounded-full border-2 border-amber-400 bg-blue-950 shadow-[0_4px_18px_rgba(30,58,138,0.35)] ${className}`}
    >
      <Image
        src="/logo.svg"
        alt="SRPSS — Shri Rama Prasad Singh Shiksha Sansthan"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
