import {Fragment, SyntheticEvent} from 'react';
import { useRouter } from 'next/router'

import {NextPage, GetStaticProps} from 'next';
import {temporaryDataMap} from "@interfaces";

import {Row, Col} from 'antd';
import PloggCard from '@components/cards/PloggCard'

import Head from 'next/head';
import './archive.module.scss';

import {temporaryData} from "@api/temp";


/**
 * Static page statically generated at BUILD
 *
 * @param {Object} context
 */
export const getStaticProps: GetStaticProps<{ ploggs: temporaryDataMap[] }> = async (context) => {
    return Promise.resolve(temporaryData).then((data) => {
        return {
            props: {
                ploggs: Object.values(data)
            },
        };
    });
};


const Archive: NextPage<{ ploggs: temporaryDataMap[] }> = (props) => {
    const { ploggs = [] } = props;
    const router = useRouter()

    function clickGoToItem(e :SyntheticEvent, id :string){
        e.preventDefault();
        router.push('/plogg/' + id);
    }

    return (
        <Fragment>
            <Head>
                <title>Archive</title>
                <meta name="description" content="lorem ipsum"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1>ARCHIVE PAGE (COMING SOON)</h1>

                <Row justify="start">
                    {ploggs.map(({id, address, image, description}) => (
                        <Col key={'col_' + id} md={6} sm={12} xs={24}>
                            <PloggCard
                                key={'plogg_' + id}
                                id={id}
                                image={image}
                                title={address}
                                description={description}

                                clickGoToItem={clickGoToItem}
                            />
                        </Col>
                    ))}
                </Row>
            </main>
        </Fragment>
    )
}

export default Archive
