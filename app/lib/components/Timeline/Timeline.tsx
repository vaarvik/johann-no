'use client';

import { useGetDevice } from '@/services/hooks/useGetDevice';
import classNames from '@/services/utils/classNames';
import React from 'react';
import ScrollMorpher from '../ScrollMorpher/ScrollMorpher';
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
                    <div className={styles['timeline-item__dates']}>
                      <FlexContainer direction="column">
                        <FlexItem>
                          <Paragraph size="2xl">
                            <b>
                              {item.startDate.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                              })}
                            </b>
                          </Paragraph>
                        </FlexItem>
                        <FlexItem>
                          <Paragraph size="lg">
                            <b>End:</b>{' '}
                            {item.endDate.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                            })}
                          </Paragraph>
                        </FlexItem>
                      </FlexContainer>
                    </div>
                    <div className={styles['timeline-item__position']}>
                      <Paragraph size="lg">
                        <b>Role:</b> {item.position}
                      </Paragraph>
                    </div>
                    <div className={styles['timeline-item__company']}>
                      <Paragraph size="sm">
                        <b>Client:</b> {item.company}
                      </Paragraph>
                    </div>
                  </div>
                  <div className={styles['timeline-item__left']}>
                    <div className={styles['timeline-item__description']}>
                      <Heading level={5}>{item.title}</Heading>
                      <Paragraph size="lg" lineHeight="loose">
                        {item.summary}
                      </Paragraph>
                    </div>
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
