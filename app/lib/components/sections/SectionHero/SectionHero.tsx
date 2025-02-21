import Container from '@/components/layout/components/Container/Container';
import FlexItem from '@/components/layout/components/FlexContainer/components/FlexItem/FlexItem';
import FlexContainer from '@/components/layout/components/FlexContainer/FlexContainer';
import Section from '@/components/Section/Section';
import Heading from '@/components/typography/components/Heading/Heading';
import Paragraph from '@/components/typography/components/Paragraph/Paragraph';
import SectionHeroImage from './components/SectionHeroImage/SectionHeroImage';

export default function SectionHero() {
  return (
    <Section fillScreen color="background">
      <FlexContainer
        fillContent
        gap={{ tablet: '600' }}
        wrap="nowrap"
        direction={{ tablet: 'row', mobile: 'column-reverse' }}
        justify="center"
        align="center"
      >
        <FlexItem>
          <Container
            width="default"
            padding={{
              mobile: { x: '600', y: '1200' },
              tablet: { y: '2400', left: '1200' },
            }}
          >
            <FlexContainer
              gap={{ mobile: '800', tablet: '1600' }}
              wrap="nowrap"
              direction={{ tablet: 'row', mobile: 'column' }}
              justify="center"
            >
              <FlexItem align="center">
                <SectionHeroImage />
              </FlexItem>
              <FlexItem>
                <Container
                  width="text"
                  textAlign={{ mobile: 'center', tablet: 'left' }}
                >
                  <Heading level={1}>Johann Vårvik</Heading>
                  <Heading level={5} color="primary" uppercased>
                    Fullstack developer / IT Manager
                  </Heading>
                  <Paragraph size="lg" lineHeight="loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Paragraph>
                </Container>
              </FlexItem>
            </FlexContainer>
          </Container>
        </FlexItem>
      </FlexContainer>
    </Section>
  );
}
