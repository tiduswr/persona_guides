import { SocialLinkHeader } from "@/components/social-link-header"
import { SocialLinksGrid } from "@/components/social-links-grid"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SocialLinkHeader />
      <SocialLinksGrid />
    </div>
  )
}
