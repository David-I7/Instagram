import { ReactNode, useState } from "react";

type ItemProps = {
  header: string;
  content: ReactNode;
  title?: string;
};

type Item = {
  header: string;
  content: ReactNode;
};

type AccordionProps = {
  items: Item[];
  title?: string;
};

const AccordionItem = ({ header, content, title }: ItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rotateIcon = isOpen ? "rotate-chevron-icon" : "";

  return (
    <>
      <div className="Accordion-item" onClick={() => setIsOpen(!isOpen)}>
        <div className="Accordion-heading">
          <p className="Accordion-header" role="heading">
            {header}
          </p>
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${rotateIcon}`}
          >
            <title>{title ?? null}</title>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect width="24" height="24" fill="white"></rect>{" "}
              <path
                d="M17 9.5L12 14.5L7 9.5"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="Accordion-content">{isOpen && content}</div>
      </div>
    </>
  );
};

function Accordion({ items, title }: AccordionProps) {
  return (
    <section className="Accordion">
      {items.map((item) => (
        <AccordionItem
          title={title}
          key={Math.random().toString(36).substring(2, 11)}
          header={item.header}
          content={item.content}
        />
      ))}
    </section>
  );
}

export default Accordion;
