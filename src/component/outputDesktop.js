import { Accordion } from "react-bootstrap";

export default function OutputDesktop(props) {
  function AccordionItemGenerator() {
    return props.data.map((item) => (
      <Accordion.Item eventKey={item.title}>
        <Accordion.Header>{item.title}</Accordion.Header>
        <Accordion.Body>{item.content}</Accordion.Body>
      </Accordion.Item>
    ));
  }
  if (props.isHidden) {
    return <></>;
  }
  return (
    <Accordion defaultActiveKey={props.data[0].title}>
      {AccordionItemGenerator()}
    </Accordion>
  );
}
