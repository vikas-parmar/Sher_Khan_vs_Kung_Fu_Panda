import React, { useEffect, useState } from "react";
import Game from "./Game";

const App = () => {
  const [description, setDescription] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDescription(false);
    }, 5000);

    return clearTimeout(timer);
  }, []);

  return (
    <>
      {description && (
        <div className="intro">
          <h1>
            Step into the mesmerizing world of <br />
            Sher Khan vs Kung Fu Panda: Tic Tac Toe Showdown!
          </h1>
          <p>
            Choose your side wisely as Sher Khan and Kung Fu Panda collide in a
            battle of X and O. Strategize and make every move count in this
            thrilling encounter. Can you outmaneuver your opponent and claim
            victory? Unleash your inner tactician and relish the adrenaline rush
            as you dive into this epic clash. Prepare for an unforgettable
            journey where the fate of the game lies in your hands. Get ready for
            the ultimate Tic Tac Toe showdown!{" "}
          </p>
          <button onClick={() => setDescription(false)}>Let's Play</button>
          <a
            href="https://vikasparmar.vercel.app/"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Crafted with ❤️ by Vikas Parmar </span>
          </a>
        </div>
      )}
      {!description && <Game />}
    </>
  );
};

export default App;
