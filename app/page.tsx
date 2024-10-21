'use client';

import Container from '@/components/layout/components/Container/Container';
import ContentPadded from '@/components/layout/components/ContentPadded/ContentPadded';
import Timeline from '@/components/Timeline/Timeline';
import ImageText from './lib/widgets/ImageText/ImageText';

export default function Home(): JSX.Element {
  const timelineData = [
    { year: 2020, month: 'January', position: 'Frontend Developer' },
    { year: 2020, month: 'June', position: 'Backend Developer' },
    { year: 2021, month: 'March', position: 'Full Stack Developer' },
    { year: 2022, month: 'September', position: 'Senior Developer' },
    { year: 2023, month: 'April', position: 'Lead Developer' },
  ];
  return (
    <main>
      <Container width="xl">
        <ContentPadded padding="xl">
          <ImageText />
        </ContentPadded>
      </Container>
      <Timeline items={timelineData} />
    </main>
  );
}
