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
      className={`relative ${sizeClassName} shrink-0 overflow-hidden rounded-[1.35rem] border border-blue-100 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.18)] ${className}`}
    >
      <Image
        src="/logo.svg"
        alt="SRPSS Logo"
        fill
        className="object-contain p-1.5"
        priority
      />
    </div>
  );
}
