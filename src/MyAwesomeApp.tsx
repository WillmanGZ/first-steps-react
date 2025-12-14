import type { CSSProperties } from "react";

const firstName = "Willman";
const lastName = "Herrera";

const favoriteGames = ["Elden Ring", "Smash", "Metal Gear"];
const isActive = true;

const address = {
  zipCode: "ABC-123",
  country: "Canada",
};

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>2 + 2</p>

      <h1>{isActive}</h1>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}
