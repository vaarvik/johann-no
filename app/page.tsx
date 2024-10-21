'use client';

import HorizontalScroll from '@/components/HorizontalScroll/HorizontalScroll';
import Container from '@/components/layout/components/Container/Container';
import ContentPadded from '@/components/layout/components/ContentPadded/ContentPadded';
import ImageText from './lib/widgets/ImageText/ImageText';

export default function Home(): JSX.Element {
  return (
    <main>
      <Container width="xl">
        <ContentPadded padding="xl">
          <ImageText />
        </ContentPadded>
      </Container>
      <HorizontalScroll
        gap="xl"
        items={[
          {
            content: isVisible => (
              <div
                style={{
                  width: '1000px',
                  height: '50vh',
                  background: isVisible ? 'yellow' : 'green',
                }}
                className={isVisible ? 'visible' : ''}
              />
            ),
          },
          {
            content: isVisible => (
              <div
                style={{
                  width: '1000px',
                  height: '50vh',
                  background: isVisible ? 'yellow' : 'red',
                }}
                className={isVisible ? 'visible' : ''}
              />
            ),
          },
          {
            content: isVisible => (
              <div
                style={{
                  width: '1000px',
                  height: '50vh',
                  background: isVisible ? 'yellow' : 'green',
                }}
                className={isVisible ? 'visible' : ''}
              />
            ),
          },
          {
            content: isVisible => (
              <div
                style={{
                  width: '1000px',
                  height: '50vh',
                  background: isVisible ? 'yellow' : 'blue',
                }}
                className={isVisible ? 'visible' : ''}
              />
            ),
          },
          {
            content: isVisible => (
              <div
                style={{
                  width: '1000px',
                  height: '50vh',
                  background: isVisible ? 'yellow' : 'green',
                }}
                className={isVisible ? 'visible' : ''}
              />
            ),
          },
        ]}
      />
    </main>
  );
}
