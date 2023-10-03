'use client';

import { AccordionItem, Accordion } from '@nextui-org/react';
import RedirectButton from '@/components/RedirectButton';
import AddIcon from '@/assets/icons/AddIcon';
import { sitemap } from '@/lib/constants';
import { ReactNode } from 'react';

const defaultContent: Array<{
  question: ReactNode | string;
  answer: ReactNode | string;
}> = [
  {
    answer: `You may get in touch with us via the <a href="/contact">Contact Us</a> button. Key in all required information, select “Sign-Up Process” in the dropdown menu and input your message. A representative will contact you for further assistance.`,
    question: 'I did not receive the confirmation email after signing up on the website. What should I do?',
  },
  {
    answer: `You may get in touch with us via the <a href="/contact">Contact Us</a> button. Key in all required information, select “Sign-Up Process” in the dropdown menu and input your message. A representative will contact you for further assistance.`,
    question: 'I cannot submit/complete my application on your website. What should I do?',
  },
  {
    answer: `An acknowledgment email will be sent to you upon successful submission of your application for our processing. We will inform you via email notification when your policy document is ready for viewing online via our TMLS Policyholder Portal. This may take up to 7 working days from the date of your application.`,
    question: 'Why didn’t I receive the MyTengah Family Protect policy document after signing-up on the website?',
  },
  {
    answer: `You may get in touch with us via the <a href="/contact">Contact Us</a> button. Key in all required information, select “Sign-Up Process” in the dropdown menu and input your message. A representative will contact you for further assistance.`,
    question: 'I want to enquire about my MyTengah Family Protect application. What should I do?',
  },
  {
    answer: `You will receive a confirmation email with an e-reference number after a successful submission within 1 working day. If you did not receive the confirmation email, please get in touch with us via the <a href="/contact">Contact Us</a> button.`,
    question: 'How do I know if my MyTengah Family Protect application is successful?',
  },
];
export default function FAQSection({ hideFAQs = false }: { hideFAQs?: boolean }) {
  return (
    <section className="mcontainer my-24">
      <h2 className="header mb-6">Frequently Asked Questions</h2>
      {!hideFAQs && (
        <Accordion
          className="px-0 [&_button>span]:transition-transform data-[open=true]:[&_button>span]:rotate-45"
          variant="splitted"
        >
          {defaultContent.map((item, index) => {
            return (
              <AccordionItem
                className="border !px-6 py-1 !shadow-md data-[open=true]:!bg-slate-300/20 [&>h2]:!text-sm [&>h2]:font-bold"
                aria-label={item.question?.toString()}
                disableIndicatorAnimation
                indicator={<AddIcon />}
                title={item.question}
                key={index}
              >
                {typeof item.answer === 'string' ? (
                  <p
                    className="mb-2 [&_a]:text-primary [&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                ) : (
                  <p>{item.answer}</p>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
      <RedirectButton href={sitemap.faq.href} className="mt-6" as="a">
        See all FAQs
      </RedirectButton>
    </section>
  );
}
