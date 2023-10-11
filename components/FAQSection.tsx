'use client';

import { AccordionItem, Accordion } from '@nextui-org/react';
import RedirectButton from '@/components/RedirectButton';
import AddIcon from '@/assets/icons/AddIcon';
import { sitemap, topFAQs } from '@/lib/constants';

export default function FAQSection({ hideFAQs = false, faqs = topFAQs }: { hideFAQs?: boolean; faqs: typeof topFAQs }) {
  return (
    <section className="mcontainer my-24">
      <h2 className="header mb-6">Frequently Asked Questions</h2>
      {!hideFAQs && (
        <Accordion
          className="px-0 [&_button>span]:transition-transform data-[open=true]:[&_button>span]:rotate-45"
          variant="splitted"
        >
          {faqs.map((item, index) => {
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
