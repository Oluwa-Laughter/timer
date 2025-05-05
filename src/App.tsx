import { useRef } from "react";
import Input from "./components/Input";
import Form, { FormHandleRef } from "./components/Form";
import Button from "./components/Button";

function App() {
  const customForm = useRef<FormHandleRef>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />

        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
