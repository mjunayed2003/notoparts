import { Phone, Languages, HandCoins } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const TopBar = () => {
    return (
        <div className="text-sm text-white w-full">
            <div className="grid grid-cols-3">
                <div className="bg-red-600 px-6 flex items-center gap-6 w-full py-2 justify-center">
                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>Call Us: (+880) 01939104157</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <NavLink to="/about" className="hover:underline">
                            About Us
                        </NavLink>
                        <NavLink to="/contact" className="hover:underline">
                            Contacts
                        </NavLink>
                        <NavLink to="/track-order" className="hover:underline">
                            Track Order
                        </NavLink>
                    </div>
                </div>
                <div className="relative bg-white text-gray-600 flex items-center justify-center px-6 py-2 text-xs font-semibold uppercase">
                    AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES
                    <div className="absolute left-0 top-0 h-full w-4 bg-red-600 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                    <div className="absolute right-0 top-0 h-full w-4 bg-gray-800 [clip-path:polygon(0_0,100%_0,100%_100%)]"></div>
                </div>

                <div className="px-6 py-2 flex items-center gap-6 bg-gray-800 w-full justify-center">
                    <span className="hidden lg:inline">Compare: 0</span>
                    <Select defaultValue="usd">
                        <SelectTrigger className="border-none bg-transparent focus:ring-0 text-white">
                            <div className="flex items-center gap-2">
                                <HandCoins className="text-white" size={16} />
                                <SelectValue placeholder="TK" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usd">TK</SelectItem>
                            <SelectItem value="tk">USD</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="en">
                        <SelectTrigger className="border-none bg-transparent focus:ring-0 text-white">
                            <div className="flex items-center gap-2">
                                <Languages className="text-white" size={16} />
                                <SelectValue placeholder="EN" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">EN</SelectItem>
                            <SelectItem value="bn">BN</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
