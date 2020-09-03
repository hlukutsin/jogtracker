const prefix = "https://jogtracker.herokuapp.com/api/v1";

class ApiClient {
  token = "";

  fetch = async (url, data, options) => {
    const res = await fetch(prefix + url, {
      headers: {
        Accept: "application/json",
        Authorization: this.token ? `Bearer ${this.token}` : "",
      },
      ...options,
      body: new URLSearchParams(data),
    });

    const json = await res
      .json()
      .catch(() => Promise.reject("Invalid server response"));

    if (res.ok) {
      return json;
    }

    return Promise.reject(json);
  };

  get = (url, data) => this.fetch(url, data, { method: "GET" });
  post = (url, data) => this.fetch(url, data, { method: "POST" });
  getToken = (data) => this.post("/auth/uuidLogin", data);
  getJogs = (data) => this.get("/data/sync", data);
  addJog = (data) => this.post("/data/jog", data);
}

export default new ApiClient();
