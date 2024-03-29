import { auth } from '@clerk/nextjs'

import Auth from './auth'
import MobileMenu from './mobile-menu'
import { ModeToggle } from './theme/mode-toggle'

export default function Navbar() {
    const { userId } = auth()

    return (
        <div className="sticky top-0 z-10 border-b bg-background">
            <div className="flex h-16 items-center px-4">
                <div className="md:hidden">
                    <MobileMenu userId={userId ?? ''} />
                </div>

                <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle />
                    <Auth />
                </div>
            </div>
        </div>
    )
}
