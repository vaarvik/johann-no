import React from 'react';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';
import styles from './Timeline.module.scss';

interface TimelineItem {
  year: number;
  month: string;
  position: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div>
      <HorizontalScroll
        items={items.map(item => ({
          content: (isVisible: boolean): React.JSX.Element => {
            const classNamesItem = [styles[`timeline-item`]];
            if (isVisible)
              classNamesItem.push(styles['timeline-item--visible']);
            return (
              <div className={classNamesItem.join(' ')}>
                <div className={styles['timeline-item__content']}>
                  <div className={styles['timeline-item__year']}>
                    {item.year}
                  </div>
                  <div className={styles['timeline-item__month']}>
                    {item.month}
                  </div>
                  <div className={styles['timeline-item__position']}>
                    {item.position}
                  </div>
                </div>
              </div>
            );
          },
        }))}
      />
    </div>
  );
};

export default Timeline;
