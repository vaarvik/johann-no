import Timeline from '@/components/Timeline/Timeline';
import Container from '@/components/layout/components/Container/Container';
import SectionHero from '@/components/sections/SectionHero/SectionHero';
import SectionYearExperience from './lib/components/sections/SectionYearExperience/SectionYearExperience';

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
      <SectionHero />
      <SectionYearExperience />
      <Container
        width="full"
        textAlign="center"
        padding={{ mobile: '400', tablet: '0' }}
      >
        <Timeline items={timelineData} />
      </Container>
    </main>
  );
}
