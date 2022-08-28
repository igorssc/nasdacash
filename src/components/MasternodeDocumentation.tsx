import { Block } from "./Block";
import { Container } from "./Container";
import { Title } from "./Title";

export const MasternodeDocumentation = () => {
  return (
    <Container>
      <Title
        preTitle="Guides and"
        title="Documentation"
        resume="Looking for more details or instructions? No Problem. We got you covered."
      />
      <div className="w-1/2 mx-auto">
        <Block
          title="Masternode"
          description="Masternode Setup Guide"
          link={{ href: "/masternode-guide", text: "LEARN MORE" }}
        />
      </div>
    </Container>
  );
};
