import ContactForm from '@/app/(web)/contact/ContactForm';
import { address, phones, socialMidea } from '@/lib/constants';

export default function Page() {
  return (
    <section className="mcontainer flex flex-wrap-reverse gap-8 py-16 md:flex-nowrap">
      <div className="w-full max-w-xl [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-bold">
        <h1 className="header">Contact us</h1>
        <h2>Phone</h2>
        <ul className="flex max-w-sm flex-wrap gap-x-8 gap-y-3">
          {phones.map((phone, idx) => (
            <li key={phone + idx}>
              <a href={`tel:${phone.replace(/ /g, '')}`}>{phone}</a>
            </li>
          ))}
        </ul>

        <h2>Address</h2>
        <p>{address}</p>

        <h2>Social media</h2>
        <ul className="pt-2">
          {Object.values(socialMidea).map((media) => (
            <li className="mb-6 flex gap-2 text-gray-600" key={media.link}>
              <media.icon />
              <a href={media.label}>{media.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <ContactForm />
    </section>
  );
}
