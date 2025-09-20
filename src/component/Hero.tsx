import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">
        Welcome to <span className="text-red-400">Nosto Parts</span>
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 bg-black/40 p-4 rounded-xl backdrop-blur-md">
        {/* Select Parts */}
        <Select>
          <SelectTrigger className="w-[220px] border-white  bg-white">
            <SelectValue placeholder="Select Parts" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
            <SelectGroup>
              <SelectLabel className="text-gray-300">Parts</SelectLabel>
              <SelectItem value="oil">Oil</SelectItem>
              <SelectItem value="engine">Engine</SelectItem>
              <SelectItem value="wheel">Wheel</SelectItem>
              <SelectItem value="seat">Seat</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Select Brands */}
        <Select>
          <SelectTrigger className="w-[220px] bg-white border-white">
            <SelectValue placeholder="Select Brands" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
            <SelectGroup>
              <SelectLabel className="">Brands</SelectLabel>
              <SelectItem value="hero">Hero</SelectItem>
              <SelectItem value="aci">ACI</SelectItem>
              <SelectItem value="suzuki">Suzuki</SelectItem>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          <Search className="h-5 w-5" /> Search
        </Button>
      </div>
    </div>
  );
};

export default Hero;
