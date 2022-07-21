import { makeRequest } from "./makeRequest"

export function getPosts() {
  return makeRequest("/posts")
}

export function getPost(id) {
  return makeRequest(`/posts/${id}`)
}
