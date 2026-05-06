import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src="/logo.png" 
        alt="Pageflow Publishing" 
        width={120} 
        height={32} 
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}