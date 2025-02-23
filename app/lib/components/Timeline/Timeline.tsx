'use client';

import { useGetDevice } from '@/services/hooks/useGetDevice';
import classNames from '@/services/utils/classNames';
import React from 'react';
import ScrollMorpher from '../ScrollMorpher/ScrollMorpher';
import ContentPadded from '../layout/components/ContentPadded/ContentPadded';
import FlexContainer from '../layout/components/FlexContainer/FlexContainer';
import FlexItem from '../layout/components/FlexContainer/components/FlexItem/FlexItem';
import Heading from '../typography/components/Heading/Heading';
import Paragraph from '../typography/components/Paragraph/Paragraph';
import styles from './Timeline.module.scss';

interface TimelineItem {
  startDate: Date;
  endDate: Date;
  position: string;
  company: string;
  title: string;
  summary: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const device = useGetDevice();

  return (
    <div>
      <ScrollMorpher
        direction={device === 'mobile' ? 'vertical' : 'horizontal'}
        items={items.map(item => ({
          content: (isVisible: boolean): React.JSX.Element => {
            return (
              <div
                className={classNames(
                  styles['timeline-item'],
                  isVisible && styles['timeline-item--visible'],
                )}
              >
                <div className={styles['timeline-item__pole']}>
                  <div className={styles['timeline-item__right']}>
                    <ContentPadded
                      className={styles['timeline-item__dates']}
                      padding={{ mobile: '300', tablet: '400' }}
                    >
                      <FlexContainer direction="column">
                        <FlexItem>
                          <Paragraph size={{ mobile: 'xl', tablet: '2xl' }}>
                            <b>
                              {item.startDate.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                              })}
                            </b>
                          </Paragraph>
                        </FlexItem>
                        <FlexItem>
                          <Paragraph size={{ tablet: 'lg' }}>
                            <b>End:</b>{' '}
                            {item.endDate.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                            })}
                          </Paragraph>
                        </FlexItem>
                      </FlexContainer>
                    </ContentPadded>
                    <ContentPadded
                      className={styles['timeline-item__position']}
                      padding={{ mobile: '300', tablet: '400' }}
                    >
                      <Paragraph size={{ tablet: 'lg' }}>
                        <b>Role:</b> {item.position}
                      </Paragraph>
                    </ContentPadded>
                    <ContentPadded
                      className={styles['timeline-item__company']}
                      padding={{ mobile: '300', tablet: '400' }}
                    >
                      <Paragraph size="sm">
                        <b>Client:</b> {item.company}
                      </Paragraph>
                    </ContentPadded>
                  </div>
                  <div className={styles['timeline-item__left']}>
                    <ContentPadded
                      className={styles['timeline-item__description']}
                      padding={{ mobile: '600', tablet: '800' }}
                    >
                      <Heading level={5}>{item.title}</Heading>
                      <Paragraph size={{ tablet: 'lg' }} lineHeight="loose">
                        {item.summary}
                      </Paragraph>
                    </ContentPadded>
                  </div>
                </div>
              </div>
            );
          },
        }))}
      />
    </div>
  );
}
