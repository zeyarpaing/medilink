'use client';

import AddIcon from '@/assets/icons/AddIcon';
import RedirectButton from '@/components/RedirectButton';
import { sitemap, topFAQs } from '@/lib/constants';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function FAQSection({
  faqs = topFAQs,
  hideFAQs = false,
}: {
  faqs?: typeof topFAQs;
  hideFAQs?: boolean;
}) {
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
                aria-label={item.question?.toString()}
                className="border !px-6 py-1 !shadow-md data-[open=true]:!bg-slate-300/20 [&>h2]:!text-sm [&>h2]:font-bold"
                disableIndicatorAnimation
                indicator={<AddIcon />}
                key={index}
                title={item.question}
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
      <RedirectButton className="mt-6" href={sitemap.faq.href} isLink>
        See all FAQs
      </RedirectButton>
    </section>
  );
}
