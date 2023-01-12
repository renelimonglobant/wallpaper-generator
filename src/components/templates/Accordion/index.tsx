import {
  Accordion as AccordionLib,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./accordion.css";

type AccordionProps = {
  render: Array<{ title: string; item: React.ReactNode }>;
};

const Accordion = ({ render }: AccordionProps) => {
  return (
    <AccordionLib className="Accordion" allowMultipleExpanded allowZeroExpanded>
      {render.map((i) => (
        <AccordionItem key={i.title}>
          <AccordionItemHeading>
            <AccordionItemButton>{i.title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{i.item}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </AccordionLib>
  );
};

export default Accordion;
