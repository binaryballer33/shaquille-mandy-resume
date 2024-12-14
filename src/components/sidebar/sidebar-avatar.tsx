import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function SidebarAvatar() {
    // TODO: use this image url path if needed
    const githubImageUrl = "https://raw.githubusercontent.com/binaryballer33/shaquille-mandy-resume/main/public/images"

    return (
        <Avatar className="mb-8 h-56 w-56">
            <AvatarImage className="rounded-full object-cover" src="/profile-picture.jpg" />
            <AvatarFallback className="text-4xl">SM</AvatarFallback>
        </Avatar>
    )
}
