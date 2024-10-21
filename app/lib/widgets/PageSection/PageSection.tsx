import FlexItem from '@/components/layout/components/FlexContainer/components/FlexItem/FlexItem';
import FlexContainer from '@/components/layout/components/FlexContainer/FlexContainer';
import Section, { SectionProps } from '@/components/Section/Section';

export default function PageSection({
  as,
  ...props
}: SectionProps): JSX.Element {
  return (
    <FlexContainer
      fitToScreen
      direction="column"
      align="center"
      justify="center"
      as={as}
    >
      <FlexItem fillContent>
        <Section {...props} />
      </FlexItem>
    </FlexContainer>
  );
}
