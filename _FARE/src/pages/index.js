import { Fragment } from 'react';
import Head from 'next/head';

import MeetupList from '../../../src/pages/plogg/insert/BBB/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

const temporaryData = {
  '1': {
    id: '1',
    title: 'titolo1',
    image: 'https://placekitten.com/800/800',
    address: 'some address',
    description: 'lorem ipsum sit dolor'
  }
};

export async function getStaticProps() {
  return Promise.resolve(temporaryData).then((data) => {
    return {
      props: {
        meetups: Object.values(data)
            .map((meetup) => ({
              title: meetup.title,
              address: meetup.address,
              image: meetup.image,
              id: meetup.id.toString(),
            })),
      },
      revalidate: 1,
    };
  });
}

export default HomePage;
