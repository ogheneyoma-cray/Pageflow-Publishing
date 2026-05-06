import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/pisired-logo.svg"
        alt="Pisired"
        width={150}
        height={40}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}