import VerticalTimelineLib from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';

const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineLib;

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backdropFilter: 'blur(10px)', // Tailwind's backdrop-blur
    borderRadius: '0.5rem', // Tailwind's rounded-lg
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Tailwind's shadow-[0_4px_30px_rgba(0,0,0,0.1)]
    backgroundColor: '#ffffff29', // Tailwind's border-[#ffffff29]
    backgroundColorDark: '#1e293b', // Tailwind's dark:bg-slate-900
    padding: '1.5rem', // Tailwind's p-6
    border: '1px solid #ffffff29', // Tailwind's border (border with color)
    zIndex: '10', // Tailwind's intersect-once
  };

const buttonClass = 'w-auto mx-auto py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'

export default function VerticalTimelineComponent ( timelineData ) {
    // // Destructure items from timelineData
    // const { items } = timelineData;
    // console.log('items', JSON.stringify(timelineData));

    return (
    <VerticalTimeline
        layout='2-columns'
        lineColor='grey'
        animate={false}
    >
      {timelineData.items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={item.className || 'vertical-timeline-element--work'}
          contentStyle={item.contentStyle || contentStyle}
          contentArrowStyle={item.contentArrowStyle || { borderRight: '7px solid rgb(200, 200, 255)' }}
          date={item.date}
          shadowSize='large'
          icon={
                <Icon icon={item.icon} size='lg' />
          }
          iconStyle={item.iconStyle || { background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className='font-bold leading-tighter tracking-tighter font-heading text-heading text-xl'>{item.title}</h3>
          <h4 className='mt-4 text-muted text-lg'>{item.subtitle}</h4>
          <p>{item.description}</p>
          <br />
          {item.youtubeURL && <iframe width='100%' height='100%' loading="lazy" src={item.youtubeURL} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>}
          <br />
          {item.link && <a href={item.link} target='_blank' type='button' class={buttonClass}>Open Link</a>}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
