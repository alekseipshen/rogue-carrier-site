import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-rogue-black border-t border-white/5">
      {/* Red accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-rogue-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Rogue Carrier"
              width={240}
              height={58}
              className="h-14 w-auto mb-4"
            />
            <p className="text-rogue-silver text-sm leading-relaxed mt-4">
              Freight Without Limits. 400+ trucks delivering across 48 states with modern equipment and dedicated routes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/benefits', label: 'Benefits' },
                { href: '/apply', label: 'Apply Now' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-rogue-silver hover:text-rogue-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-rogue-silver">
              <li>
                <a href="tel:7737183282" className="hover:text-rogue-red transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-rogue-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (773) 718-3282
                </a>
              </li>
              <li>
                <a href="tel:7737183354" className="hover:text-rogue-red transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-rogue-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (773) 718-3354
                </a>
              </li>
              <li>
                <a href="mailto:hr@roguecarrierinc.com" className="hover:text-rogue-red transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-rogue-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hr@roguecarrierinc.com
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <svg className="w-4 h-4 text-rogue-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1312 Marquette Dr, Ste E<br />Romeoville, IL 60446</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Ready to Drive?</h3>
            <p className="text-rogue-silver text-sm mb-4">
              Join 400+ drivers earning competitive pay on dedicated routes.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rogue-red/20"
            >
              Truck Yeah! Apply Now
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-rogue-silver text-xs">
            &copy; {new Date().getFullYear()} Rogue Carrier Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/people/Rogue-Carrier/61582010114565/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rogue-silver hover:text-rogue-red transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
