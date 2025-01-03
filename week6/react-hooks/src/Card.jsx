import React from 'react';
// we can use inner component and children for card wrapper but children is more easy to use and more readable and better practice
function CardWrapper({ innerComponent }) {
  return (
    <div style={{ border: "2px solid blue", padding: "2px" }}>
      {innerComponent}
    </div>
  );
}

function TextComponent() {
  return <p>Text Component</p>;
}

function CardWrape({ children }) {
  return (
    <div style={{ border: "2px solid orange", padding: "2px" }}>
      {children}

    </div>
  );

}


const Card = () => {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrape>
        <div>
          Hello from children
          <TextComponent />
        </div>
      </CardWrape>
    </div>
  );
};

export default Card;
