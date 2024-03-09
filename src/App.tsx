import "./App.css";
import { useState } from "react";
import { Select, type Option } from "./components/Select";

const options = [
  {
    id: 1,
    text: "ACCOUNT",
  },
  {
    id: 2,
    text: "WALLET",
  },
  {
    id: 3,
    text: "BONUSES",
  },
  {
    id: 4,
    text: "BETS",
  },
  {
    id: 5,
    text: "HISTORY",
  },
];

function App() {
  const [chosenOption, setChosenOption] = useState<Option | null>(null);

  return (
    <div className="p-20">
      {chosenOption && JSON.stringify(chosenOption)}
      <Select
        options={options}
        defaultOption={options[0]}
        width={240}
        onChange={setChosenOption}
      />
    </div>
  );
}

export default App;
