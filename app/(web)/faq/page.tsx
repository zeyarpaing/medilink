'use client';
import AddIcon from '@/assets/icons/AddIcon';
import FAQSection from '@/components/FAQSection';
import { topFAQs } from '@/lib/constants';
import { debounce } from '@/lib/utils';
import { Accordion, AccordionItem, Input } from '@nextui-org/react';
import { useState } from 'react';

export default function Page() {
  const [search, setSearch] = useState('');

  const filteredFaqs = topFAQs.filter((item) => {
    return item.question?.toString().toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="mcontainer py-12">
      <h1 className="header mb-8">Frequently Asked Questions </h1>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        startContent={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className="mr-2 h-6 w-6"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            fill="none"
          >
            <path
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        }
        classNames={{
          inputWrapper: '!bg-white shadow-none',
          input: 'shadow-none appearance-none',
        }}
        className="my-12 max-w-lg  rounded-lg border !bg-white px-3 py-2"
        placeholder="Search FAQs"
        type="search"
        size="lg"
      />
      {search && !filteredFaqs.length ? (
        <h3>
          Sorry, no FAQs found for your keyword <b>&ldquo;{search}&rdquo;</b>
        </h3>
      ) : (
        <Accordion
          className="px-0 [&_button>span]:transition-transform data-[open=true]:[&_button>span]:rotate-45"
          variant="splitted"
        >
          {filteredFaqs.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                aria-label={item.question?.toString()}
                title={item.question}
                className="border !px-6 py-1 !shadow-md data-[open=true]:!bg-slate-300/20"
                classNames={{
                  title: 'text-sm md:text-base font-bold',
                }}
                disableIndicatorAnimation
                indicator={<AddIcon />}
              >
                {typeof item.answer === 'string' ? (
                  <p
                    className="prose  lg:prose-xl mb-2 w-full text-sm md:text-base [&_a]:text-primary"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                ) : (
                  <p className="text-sm md:text-base">{item.answer}</p>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </section>
  );
}
