import { Tab, Tabs } from "react-bootstrap";

export default function OutputMobile(props) {
  function TabGenerator() {
    return props.data.map((item) => (
      <Tab eventKey={item.title} title={item.title}>
        {item.content}
      </Tab>
    ));
  }
  if (props.isHidden) {
    return <></>;
  }
  return (
    <Tabs className="tabs" defaultActiveKey={props.data[0].title} fill>
      {TabGenerator()}
    </Tabs>
  );
}
