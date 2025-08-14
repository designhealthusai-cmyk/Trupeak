import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-two text-white px-4 md:px-20 py-12">
      {/* Row 1: Logo */}
      <div className="mb-10 flex justify-center md:justify-start">
        <Link href="/" aria-label="Go to homepage">
          <img
            src="/images/logoondark.png"
            alt="Trupeak Health Logo"
            className="w-80 md:w-80"
          />
        </Link>
      </div>

      {/* Row 2: Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Tagline & Newsletter */}
        <div>
          <p className="text-white/80 mb-4 text-3xl">
            Transform into the <br /> new <span className="text-one font-semibold">You</span>
          </p>
          <p className="text-sm text-white/60 mb-2">Subscribe to our Newsletter</p>
          <form className="flex items-center bg-two rounded-full overflow-hidden max-w-xs border-4 border-one">
            <input
              type="email"
              placeholder="Your Email..."
              className="flex-1 px-4 py-2 text-black outline-none text-sm bg-two"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 hover:bg-primary/80 transition"
            >
              ➔
            </button>
          </form>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Locations</Link></li>
            <li><Link href="#">Media & Press</Link></li>
            <li><Link href="#">Service Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal & Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal & Policies</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Shipping Policy</Link></li>
            <li><Link href="#">Refund Policy</Link></li>
            <li><Link href="#">GDPR & Body Form Compliance</Link></li>
          </ul>
        </div>

        {/* Column 4: Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="#">At Home Services</Link></li>
            <li><Link href="#">Memberships</Link></li>
          </ul>
        </div>

      </div>

      {/* Footer bottom note */}
      <div className="mt-12 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Trupeak Health. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
