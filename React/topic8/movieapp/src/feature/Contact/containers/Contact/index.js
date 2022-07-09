import { Typograph } from "../../../../shared/components/Typograph";
import { Button, ButtonSpecial, InputCheckbox, Title } from "./Contact.styled";

export const Contact = () => {
  return (
    <div>
      <h1 className="text-white">Contact</h1>;
      <Typograph size="xsmall" className="text-warning">
        Contact
      </Typograph>
      <Title size="large" > Styled Design</Title>
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <Button color="green">More</Button>
        <ButtonSpecial color="success">
          Test
        </ButtonSpecial>
        <InputCheckbox />

      </div>
    </div>
  );
};
