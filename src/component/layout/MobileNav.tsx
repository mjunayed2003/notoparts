// src/components/layout/MobileNav.tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 py-4">
            <Link to="/" className="text-lg font-medium">Home</Link>
            <Accordion type="single" collapsible>
              <AccordionItem value="shop">
                <AccordionTrigger className="text-lg font-medium">Shop</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-2 pl-4">
                  <Link to="/shop/category1">Category 1</Link>
                  <Link to="/shop/category2">Category 2</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="account">
                <AccordionTrigger className="text-lg font-medium">Account</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-2 pl-4">
                  <Link to="/account/profile">Profile</Link>
                  <Link to="/account/orders">Orders</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link to="/blog" className="text-lg font-medium">Blog</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav;
