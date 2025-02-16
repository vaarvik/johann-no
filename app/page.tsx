'use client';

import Container from '@/components/layout/components/Container/Container';
import ContentPadded from '@/components/layout/components/ContentPadded/ContentPadded';
import Timeline from '@/components/Timeline/Timeline';
import SectionYearExperience from './lib/sections/SectionYearExperience/SectionYearExperience';

export default function Home() {
  const timelineData = [
    {
      startDate: new Date(2020, 0),
      endDate: new Date(2022, 1),
      position: 'IT Consultant',
      company: 'Company A',
      title: 'IT Consultant at Company A',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      startDate: new Date(2020, 0),
      endDate: new Date(2022, 1),
      position: 'IT Consultant',
      company: 'Company A',
      title: 'IT Consultant at Company A',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <main>
      <Container width="full" textAlign="center">
        <ContentPadded padding={{ mobile: '400', desktop: '0' }}>
          <Timeline items={timelineData} />
        </ContentPadded>
      </Container>
      <SectionYearExperience />
    </main>
  );
}
