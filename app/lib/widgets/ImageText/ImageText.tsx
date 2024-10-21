import JohannImg from '@/assets/img/johann-main-crop.jpg';
import Avatar from '@/components/Avatar/Avatar';
import Container from '@/components/layout/components/Container/Container';
import FlexItem from '@/components/layout/components/FlexContainer/components/FlexItem/FlexItem';
import FlexContainer from '@/components/layout/components/FlexContainer/FlexContainer';
import { Heading, Paragraph } from '@/components/Typography';

export default function ImageText(): JSX.Element {
  return (
    <FlexContainer gap="xl" wrap="nowrap">
      <FlexItem align="center" grow={1}>
        <Container textAlign="right">
          <FlexContainer direction="column">
            <FlexItem>
              <Heading level={1}>Johann Vårvik</Heading>
            </FlexItem>
            <FlexItem>
              <Paragraph size="lg" color="secondary">
                Seniorkonsulent
              </Paragraph>
            </FlexItem>
          </FlexContainer>
        </Container>
      </FlexItem>
      <FlexItem>
        <Avatar size="lg" src={JohannImg.src} />
      </FlexItem>
    </FlexContainer>
  );
}
