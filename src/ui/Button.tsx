import Link from "next/link"

interface ButtonLinkProps {
  destination: string,
  label: string
}

export default function Button({ destination, label }: ButtonLinkProps) {
  return (
    <Link
      href={`/${destination}`}
      aria-label={label}
      className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300 font-top-secret"
    >
      {label}
    </Link>
  )
}