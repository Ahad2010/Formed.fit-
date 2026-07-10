import Image from "next/image";
import Link from "next/link";

const platform = ["How It Works", "Services", "Membership", "Tampa Bay"];
const company = ["About", "Train With Us", "FAQ", "Contact"];
const legal = ["Terms of Service", "Privacy Policy", "Liability Waiver"];

export default function Footer() {
  return (
    <footer className="bg-[#111110] font-body">
      <div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          <div>
            {/* Logo */}
            <div className="relative h-6 w-[140px] md:h-7 md:w-[164px]">
              <Image
                src="/images/logo.webp"
                alt="FORMED"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="mt-4 max-w-[240px] text-[14px] font-normal leading-[23px] text-[#C8C2B4]">
              Private, in-home personal training for busy professionals.
            </p>

            <p className="mt-6 text-[10px] font-normal uppercase tracking-[0.2em] text-[#C8C2B4]/70">
              Tampa Bay, Florida
            </p>

            <div className="mt-4 flex items-center gap-4">
              <Link href="https://www.instagram.com/getformed.fit" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#F5F2EC]/60 transition-colors hover:text-[#F5F2EC]">
                <InstagramIcon />
              </Link>
              <Link href="https://www.linkedin.com/company/getformed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#F5F2EC]/60 transition-colors hover:text-[#F5F2EC]">
                <LinkedInIcon />
              </Link>
              <Link href="https://www.facebook.com/share/18GmmXdMCH/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#F5F2EC]/60 transition-colors hover:text-[#F5F2EC]">
                <FacebookIcon />
              </Link>
            </div>
          </div>

          <FooterColumn title="Platform" links={platform} />
          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Legal" links={legal} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#F5F2EC]/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] font-normal text-[#C8C2B4]/70">
            &copy; 2026 FORMED. All rights reserved.
          </p>
          <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-[#8C8880]">
            New cities launching soon
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-[#8C8880]">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-[14px] font-normal leading-[20px] text-[#F5F2EC] transition-colors hover:text-[#F5F2EC]/70"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35C16.24 4.32 15.36 4.25 14.34 4.25c-2.13 0-3.59 1.3-3.59 3.68V10.5h-2.5v3h2.5V21h2.75z" />
    </svg>
  );
}
