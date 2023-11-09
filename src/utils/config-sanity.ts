import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: "vgrraf2q",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
})