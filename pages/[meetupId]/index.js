import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';


const temporaryData = {
  '1': {
    id: '1',
    title: 'titolo1',
    image: 'https://placekitten.com/800/800',
    address: 'some address',
    description: 'lorem ipsum sit dolor'
  }
}

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return Promise.resolve(temporaryData).then((data) => {
    return {
      fallback: 'blocking',
      paths: Object.values(data).map(({id}) => ({
        params: { meetupId: id.toString() },
      })),
    };
  });
}

/**
 *
 * @param {string} meetupId
 * @returns {Promise<{props: {meetupData: {image: *, address: *, description: *, id: *, title: *}}}>}
 */
export async function getStaticProps({params: {meetupId}}) {
  return Promise.resolve(temporaryData).then((data) => {
    const selectedMeetup = data[meetupId];
    return {
      props: {
        meetupData: {
          id: selectedMeetup.id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description,
        },
      },
    };
  });
}

export default MeetupDetails;
