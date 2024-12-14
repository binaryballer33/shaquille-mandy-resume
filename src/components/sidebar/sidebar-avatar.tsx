import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function SidebarAvatar() {
    return (
        <Avatar className="mb-8 h-56 w-56">
            <AvatarImage className="rounded-full object-cover" src="/profile-picture.jpg" />
            <AvatarFallback className="text-4xl">SM</AvatarFallback>
        </Avatar>
    )
}
