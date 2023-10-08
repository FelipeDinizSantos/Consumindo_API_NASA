import {getNeos} from './neo_services';
import Neo from './neo';

export async function filter_API_data()
{
    const neosJSON = await getNeos();
    const sentry_objects = neosJSON['sentry_objects'];
    const neos = [];
    
    sentry_objects.forEach(neo =>
    {
        const name = neo['fullname'];
        const sentryId = neo['sentryId'];
        const year_range_max = neo['year_range_max'];
        const year_range_min = neo['year_range_min'];

        const newNeo = new Neo(sentryId, name, year_range_min, year_range_max)

        neos.push(newNeo);
    });

    return neos;
}