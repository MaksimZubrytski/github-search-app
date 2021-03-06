import { USER_URL } from "../constants/githubApi";

export const userApiBuildUrl = (login) => (
  `${USER_URL}/${login}`
);

export const repositoriesApiBuildUrl = (login, currentPage, pageSize) => (
  `${USER_URL}/${login}/repos?page=${currentPage}&per_page=${pageSize}`
);
