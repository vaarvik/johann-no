import Container from '@/components/layout/components/Container/Container';
import ContentPadded from '@/components/layout/components/ContentPadded/ContentPadded';
import FlexItem from '@/components/layout/components/FlexContainer/components/FlexItem/FlexItem';
import FlexContainer from '@/components/layout/components/FlexContainer/FlexContainer';
import Section from '@/components/Section/Section';
import YearCounter from '@/components/YearCounter/YearCounter';

export default function SectionYearExperience() {
  return (
    <Section color="foreground">
      <FlexContainer fitToScreen align="center" justify="center">
        <FlexItem fillContent>
          <Container width="default">
            <FlexContainer fitToParent>
              <FlexItem fillContent>
                <ContentPadded padding={{ mobile: '800', tablet: '1600' }}>
                  <FlexContainer
                    direction="column"
                    justify="center"
                    gap="400"
                    fitToParent
                  >
                    <FlexItem>
                      <YearCounter
                        decimals={15}
                        size={{ tablet: 'xl', mobile: 'lg' }}
                        startDate={new Date(2019, 1, 15)}
                      />
                    </FlexItem>

                    <FlexItem>
                      <h2 className="p--size-3xl">Years Experience</h2>
                    </FlexItem>
                  </FlexContainer>
                </ContentPadded>
              </FlexItem>
            </FlexContainer>
          </Container>
        </FlexItem>
      </FlexContainer>
    </Section>
  );
}
