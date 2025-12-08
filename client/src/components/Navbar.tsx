import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/WhatsApp_Image_2025-12-06_at_16.29.21_5c430c44_1765027956774.jpg";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "عن الجمعية", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "التوجه الاستراتيجي", href: "/strategy" },
    { name: "الهيكل التنظيمي", href: "/structure" },
    { name: "المبادرات", href: "/initiatives" },
    { name: "أصحاب المصلحة", href: "/stakeholders" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="شعار الجمعية" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-lg font-bold text-primary hidden lg:block">
              جمعية دعم النقل
              <br />
              <span className="text-sm font-normal text-muted-foreground">والخدمات اللوجستية الأهلية</span>
            </span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  location === link.href ? "text-primary font-bold" : "text-foreground/80"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-white">
              تواصل معنا
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t p-4 bg-background">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-base font-medium py-2",
                    location === link.href ? "text-primary font-bold" : "text-foreground/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-secondary text-white">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
