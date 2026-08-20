import { Navbar } from "@/components/shared/Navbar"

export default function PublicLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
