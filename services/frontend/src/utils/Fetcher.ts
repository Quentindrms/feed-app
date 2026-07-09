export class Fetcher {
	protected BASE_URL: string;

	constructor() {
		this.BASE_URL = "http://localhost:4000";
	}

	private async handleFetch(endpoint: string, init?: RequestInit): Promise<Response> {
		const response = await fetch(`${this.BASE_URL}/${endpoint}`, {
			...init,
			headers: { ...init?.headers },
		});
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

	async patch<T = never, K = unknown>(endpoint: string, body?: K): Promise<T> {
		const response = await this.handleFetch(endpoint, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});
		return this.handleJsonResponse(response);
	}
}
