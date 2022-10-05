import { Fragment } from 'react';
import { GetStaticPaths, GetStaticProps, GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import classes from './details.module.scss';
import Head from 'next/head';

import { temporaryDataMap } from '@interfaces';
import { temporaryData } from "@api/temp";

interface PathParams extends ParsedUrlQuery {
    id: string;
}

/**
 *
 */
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
    return Promise.resolve(temporaryData).then((data) => {
        return {
            fallback: 'blocking',
            paths: Object.values(data).map(({id}) => ({
                params: { id: id.toString() },
            })),
        };
    });
};

/**
 * Static page statically generated at BUILD
 *
 * @param {Object} context
 */
export const getStaticProps: GetStaticProps<temporaryDataMap, PathParams> = async (context) => {
    const { params: { id = '' } = {} } = context;

    // const res = await fetch(`https://swapi.dev/api/people/${id}`);
    // const person = (await res.json()) as Person;

    return Promise.resolve(temporaryData).then((data) => {
        const selectedPlogg = data[id];
        if (!selectedPlogg) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false
                }
            }
        }
        return {
            props: {
                id: selectedPlogg.id,
                address: selectedPlogg.address,
                image: selectedPlogg.image,
                description: selectedPlogg.description,
            },
        };
    });
};

const PloggDetails: NextPage<temporaryDataMap> = ({ id, address, image, description }) => {
    return (
        <Fragment>
            <Head>
                <title>Plogg {address}</title>
                <meta name='description' content={description} />
            </Head>

            <main className={classes.detail}>
                <h1>PLOGG DETAIL (COMING SOON)</h1>
                <h3>{id + address + description}</h3>
                <img src={image}/>
            </main>
        </Fragment>
    )
}

export default PloggDetails;