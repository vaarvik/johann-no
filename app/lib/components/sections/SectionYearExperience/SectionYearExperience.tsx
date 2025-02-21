import Container from '@/components/layout/components/Container/Container';
import FlexItem from '@/components/layout/components/FlexContainer/components/FlexItem/FlexItem';
import FlexContainer from '@/components/layout/components/FlexContainer/FlexContainer';
import Section from '@/components/Section/Section';
import YearCounter from '@/components/YearCounter/YearCounter';

export default function SectionYearExperience() {
  return (
    <Section color="foreground" fillScreen>
      <Container
        width="default"
        fillContent
        padding={{ mobile: '800', tablet: '1600' }}
      >
        <FlexContainer fillContent>
          <FlexItem fillContent>
            <FlexContainer
              direction="column"
              justify="center"
              gap="400"
              fillContent
            >
              <FlexItem>
                <YearCounter
                  decimals={22}
                  size={{ desktop: '2xl', tablet: 'xl', mobile: 'lg' }}
                  startDate={new Date(2019, 1, 15)}
                />
              </FlexItem>
              <FlexItem>
                <h2 className="p--size-3xl">Years Experience</h2>
              </FlexItem>
            </FlexContainer>
          </FlexItem>
        </FlexContainer>
      </Container>
    </Section>
  );
}
