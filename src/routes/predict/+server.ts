import {base} from '$app/paths'

import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({url}) => {
    // parse query string
    const type = url.searchParams.get('type')
    const search = url.searchParams.get('search')

    switch (type) {
        case 'city':

    }

    return new Response();
};