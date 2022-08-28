import { Container } from "./Container";
import { MiningDetailsBlock } from "./MiningDetailsBlock";
import { MiningDetailsTable } from "./MiningDetailsTable";
import { Title } from "./Title";

export const MiningDetails = () => {
  return (
    <>
      <Container>
        <Title title="Mining details" />
        <div className="grid xl:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-center content-between relative z-10 rounded-lg">
            <MiningDetailsBlock />
          </div>
          <div className="relative z-10 rounded-lg bg-miningDetails overflow-auto">
            <MiningDetailsTable />
          </div>
        </div>
      </Container>
    </>
  );
};
