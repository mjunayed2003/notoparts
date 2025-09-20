import * as React from "react"
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

import MobileNav from "./MobileNav";

// UserActionIcon
const UserActionIcon = ({
    icon: Icon,
    count,
    title,
    subtitle,
    to,
}: {
    icon: React.ElementType;
    count?: number;
    title: string;
    subtitle: string;
    to: string;
}) => (
    <Link to={to} className="flex items-center gap-3 group">
        <div className="relative">
            <Icon className="h-7 w-7 text-gray-600 group-hover:text-red-600 transition-colors" />
            {count !== undefined && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {count}
                </span>
            )}
        </div>
        <div className="hidden lg:block">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="font-semibold text-gray-800">{subtitle}</p>
        </div>
    </Link>
);

const MainHeader = () => {
    return (
        <header className="bg-white border-b">
            <div className="container mx-auto py-4 flex justify-between items-center relative">
                {/* Left Navigation */}
                <div className="flex items-center gap-6">
                    <MobileNav />

                    {/* Example Dropdown Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <Menu />
                                Menu
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuItem asChild>
                                <Link to="/shop/cars">Cars</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/shop/trucks">Trucks</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/shop/motorcycles">Motorcycles</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Main Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList className="hidden md:flex gap-6 font-medium">
                           <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-red-600 transition-colors">
                                    Home
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white p-2 shadow-md rounded-md">
                                    <ul className="grid w-[100px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                        <Link to="/" className="block px-3 py-2 hover:bg-gray-100 rounded">
                                            Home One
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="/shop/list" className="block px-3 py-2 hover:bg-gray-100 rounded">
                                            Home Two
                                        </Link>
                                    </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-red-600 transition-colors">
                                    Shop
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white p-2 shadow-md rounded-md">
                                    <NavigationMenuLink asChild>
                                        <Link to="/shop/grid" className="block px-3 py-2 hover:bg-gray-100 rounded">
                                            Shop Grid
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="/shop/list" className="block px-3 py-2 hover:bg-gray-100 rounded">
                                            Shop List
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        to="/blog"
                                        className="text-gray-700 hover:text-red-600 transition-colors"
                                    >
                                        Blog
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-red-600 transition-colors">
                                    Account
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white p-2 shadow-md rounded-md">
                                    <NavigationMenuLink asChild>
                                        <Link to="/account" className="block px-3 py-2 hover:bg-gray-100 rounded">
                                            My Account
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="/login" className="block px-3 py-2 hover:bg-gray-100 rounded">
                                            Login
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Center Logo */}
                <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
                    <Link to="/" className="text-3xl font-bold tracking-wider">
                        <span className="text-red-600">NOSTO</span>
                        <span className="text-gray-800">PARTS</span>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <Link to="/wishlist" className="relative hidden sm:block group">
                        <Heart className="h-7 w-7 text-gray-600 group-hover:text-red-600" />
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            0
                        </span>
                    </Link>
                    <UserActionIcon
                        icon={User}
                        title="Hello, Log In"
                        subtitle="My Account"
                        to="/account"
                    />
                    <UserActionIcon
                        icon={ShoppingCart}
                        count={0}
                        title="Shopping Cart"
                        subtitle="৳0.00"
                        to="/cart"
                    />
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
