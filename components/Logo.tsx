import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image 
        src="/logo.png" 
        alt="Cosmolite Beauty Logo" 
        width={160} 
        height={48} 
        className="w-auto h-8 md:h-10 object-contain"
        priority
      />
    </Link>
  );
}