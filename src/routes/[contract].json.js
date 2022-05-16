import { api } from '$lib/api';



export const get = async (
	/** @type {String} */ contractAddress
) => {
	const response = await api(
		'get',
		`pairs/${contractAddress}/volume/daily/?num=${7}?from=${Math.floor(new Date().getTime()/1000.0)}`,
		''
	);
	if (response.status === 404) {
		return {
			body: {
				volume: []
			}
		};
	}

	if (response.status === 200) {
		return {
			body: {
				volume: await response.json()
			}
		};
	}
    return {
        status: response.status
    };
};
