import type { NextPage } from "next";
import react, { useState } from "react";
import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
`;

const Home: NextPage = () => {
  const [text, updateText] = useState("");
  const C2 = react.memo(Component2);
  return (
    <div>
      <Component1A text={text} updateText={updateText} />
      <Component1B />
      <C2 />
    </div>
  );
};

const Component1A = ({ text, updateText }) => {
  return (
    <div style={{ margin: "20px" }}>
      component1
      <form>
        <textarea
          name="text"
          id="text"
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => updateText(e.target.value)}
        />
      </form>
    </div>
  );
};

const Component1B = () => {
  const [text, updateText] = useState("");
  return (
    <div style={{ margin: "20px" }}>
      component1
      <form>
        <textarea
          name="text"
          id="text"
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => updateText(e.target.value)}
        />
      </form>
    </div>
  );
};

const Component2 = () => {
  return <div style={{ margin: "20px" }}>component2</div>;
};

export default Home;
