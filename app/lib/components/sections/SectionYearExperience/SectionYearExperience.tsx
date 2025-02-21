import Container from '@/components/layout/components/Container/Container';
import FlexItem from '@/components/layout/components/FlexContainer/components/FlexItem/FlexItem';
import FlexContainer from '@/components/layout/components/FlexContainer/FlexContainer';
import Section from '@/components/Section/Section';
import Paragraph from '@/components/typography/components/Paragraph/Paragraph';
import YearCounter from '@/components/YearCounter/YearCounter';
import styles from './SectonYearExperience.module.scss';

export default function SectionYearExperience() {
  return (
    <Section color="foreground" fillScreen>
      <Container
        width="default"
        fillContent
        padding={{
          mobile: { y: '800', left: '800' },
          tablet: { y: '600', left: '600' },
        }}
        className={styles['section-year-experience']}
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
                <Paragraph as="h2" size={{ mobile: '2xl', tablet: '3xl' }}>
                  Years Experience
                </Paragraph>
              </FlexItem>
            </FlexContainer>
          </FlexItem>
        </FlexContainer>
      </Container>
    </Section>
  );
}
