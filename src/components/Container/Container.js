import "./Container.css";

function Container(props) {
  const { children } = props;
  return <div className="wrapper">{children}</div>;
}

export default Container;
