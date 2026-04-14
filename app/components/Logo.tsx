import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-14 h-14 shrink-0">
        <Image src="/logo.png" alt="SRPSS Logo" fill className="object-contain" />
      </div>

      <div className="hidden sm:block border-l-2 border-gray-300 pl-3">
        <p className="text-xs font-bold text-blue-900 leading-none">SRPSS</p>
        <p className="text-xs text-amber-600 font-bold">Since 1986</p>
      </div>
    </div>
  );
}
