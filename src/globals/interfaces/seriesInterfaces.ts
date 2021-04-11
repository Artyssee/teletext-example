interface SeriesStateInterface {
	allSeries: ShowPageInterface[];
	filteredSeries: ShowInterface[];
	filter: string;
	api: string;
}

interface ShowPageInterface {
	score: number;
	show: {
		externals: {
			imdb: string;
			thetvdb: number;
			tvrage: number;
		};
		genres: string[];
		id: number;
		image: {
			medium: string;
			original: string;
		};
		language: string;
		name: string;
		network: {
			id: number;
			name: string;
			country: {
				code: string;
				name: string;
				timezone: string;
			};
		};
		officialSite: string;
		premiered: string;
		rating: {
			average: null | number;
		};
		runtime: number;
		schedule: {
			time: string;
			days: string[];
		};
		status: string;
		summary: string;
		type: string;
		updated: number;
		url: string;
		webChannel: string | null;
		weight: number;
		_links: {
			previousEpisode: {
				href: string;
			};
			self: {
				href: string;
			};
		};
	};
}

interface ShowInterface {
	score: number;
	show: {
		externals: {
			imdb: string;
			thetvdb: number;
			tvrage: number | null;
		};
		genres: string[];
		id: number;
		image: {
			medium: string | undefined;
			original: string | undefined;
		};
		language: string;
		name: string;
		network: {
			country: {
				code: string;
				name: string;
				timezone: string;
			};
			id: number;
			name: string;
		};
		officialSite: string | null;
		premiered: string;
		rating: {
			average: number | null;
		};
		runtime: number;
		schedule: {
			days: string[];
			time: string;
		};
		status: string;
		summary: string;
		type: string;
		updated: number;
		url: string;
		webChannel: string | null;
		weight: number;
		_links: {
			previousepisode: {
				href: string;
			};
		};
		self: {
			href: string;
		};
	};
}

export { SeriesStateInterface, ShowInterface };
