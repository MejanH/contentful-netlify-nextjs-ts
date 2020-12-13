import Link from "next/link"

export default function Navbar() {
    return (
        <div className="text-gray-800 my-12 flex flex-row items-center justify-between">
            <div className="font-bold text-4xl">
                <Link href="/">
                    Maarten de Haas
                </Link>
            </div>
            <nav>
                <ul className="flex flex-row font-medium text-lg">
                    <li className="ml-7">Home</li>
                    <li className="ml-7">Services</li>
                    <li className="ml-7">About</li>
                    <li className="ml-7">Contact</li>
                </ul>
            </nav>
        </div>
    )
}