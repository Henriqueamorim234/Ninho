import { Aside } from "./components/Aside";
import { Main } from "./components/Main";

const user = {
  name: "Henrique Amorim",
  user: "henriqueamorim194",
  followers: "1.2k",
  following: "300",
  post: "235",
};

function App() {
  return (
    <>
      <Main>
        <Aside user={user} />
      </Main>
    </>
  );
}

export default App;
