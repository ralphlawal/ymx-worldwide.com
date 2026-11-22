import { email, site } from "../../lib/content";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata("Contact", "Email YMX Worldwide for bookings, press, collaborations and general enquiries.", "/contact", "/social/contact");

const enquiries = [
  ["Booking", "Booking enquiry"],
  ["Press", "Press enquiry"],
  ["Collaborations", "Collaboration enquiry"],
  ["General enquiries", "General enquiry"],
];

export default function ContactPage() {
  return <section className="contact">
    <h1 className="display page-title">Contact</h1>
    <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
    <ul className="enquiries">{enquiries.map(([label, subject]) =>
      <li key={label}><a href={email(subject)}>{label}</a></li>,
    )}</ul>
    <a className="text-link" href={site.instagram}>@ymx.worldwide on Instagram</a>
  </section>;
}
