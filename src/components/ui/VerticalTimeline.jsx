import VerticalTimelineLib from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';

const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineLib;

export default function VerticalTimelineComponent ( timelineData ) {
    // // Destructure items from timelineData
    // const { items } = timelineData;
    // console.log('items', JSON.stringify(timelineData));

    return (
    <VerticalTimeline>
      {timelineData.items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={item.className || "vertical-timeline-element--work"}
          contentStyle={item.contentStyle || { background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={item.contentArrowStyle || { borderRight: '7px solid rgb(33, 150, 243)' }}
          date={item.date}
          icon={
                <Icon icon={item.icon} size="lg" />
          }
          iconStyle={item.iconStyle || { background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
