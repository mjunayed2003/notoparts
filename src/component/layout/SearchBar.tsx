// src/components/layout/SearchBar.tsx
import { Car, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const SearchBar = () => {
  return (
    <div className="bg-white pb-4">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto">
          <div
            className="flex items-center bg-white shadow-lg p-2 border border-gray-200"
            style={{
              clipPath:
                "polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)",
            }}
          >
            {/* Vehicle Selector */}
            <Select defaultValue="all">
              <SelectTrigger className="border-none bg-transparent focus:ring-0 w-[180px]">
                <div className="flex items-center gap-2 text-gray-500">
                  <Car size={20} />
                  <SelectValue placeholder="Select Vehicle" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Vehicles</SelectItem>
                <SelectItem value="cars">Cars</SelectItem>
                <SelectItem value="trucks">Trucks</SelectItem>
                <SelectItem value="motorcycles">Motorcycles</SelectItem>
              </SelectContent>
            </Select>

            <Separator orientation="vertical" className="h-6 mx-2" />

            {/* Input */}
            <Input
              type="text"
              placeholder="Enter Keyword or Part Number"
              className="flex-grow border-none focus-visible:ring-0 shadow-none text-base h-10"
            />

            {/* Button */}
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:bg-gray-100"
            >
              <Search className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
