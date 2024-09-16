import { Button } from '@/common/components/ui/button'
import { Star } from 'lucide-react'

export default function GithubStarButton() {
    return (
        <Button size="sm" asChild>
            <a
                href="https://github.com/romatallinn/create-tauri-core"
                rel="noreferrer"
                target="_blank"
            >
                <Star size={16} className="mr-1" /> Star Github
            </a>
        </Button>
    )
}
