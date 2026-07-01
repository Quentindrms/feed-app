export class Fetcher {
	protected BASE_URL: string;

	constructor() {
		this.BASE_URL = "http://localhost:4000";
	}

	private async handleFetch(endpoint: string): Promise<Response> {
		const response = await fetch(`${this.BASE_URL}/${endpoint}`);
		return response;
	}

	private async handleJsonResponse<T = never>(response: Response): Promise<T> {
		try {
			const data = await response.json();
			return data as T;
		} catch (error) {
			console.trace(error);
			throw new Error("An error as occured while parsing JSON response");
		}
	}

	async get<T = never>(endpoint: string) {
		const response = await this.handleFetch(endpoint);
		return this.handleJsonResponse<T>(response);
	}
}
