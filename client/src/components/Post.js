import { usePost } from "../contexts/PostContext"
import { useAsyncFn } from "../hooks/useAsync"
import { createComment } from "../services/comments"
import { CommentForm } from "./CommentForm"
import { CommentList } from "./CommentList"

export function Post() {
  const { post, rootComments, createLocalComment } = usePost()
  const { loading, error, execute: createCommentFn } = useAsyncFn(createComment)

  function onCommentCreate(message) {
    return createCommentFn({ postId: post.id, message }).then(
      createLocalComment
    )
  }

  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className="comments-title">Comments</h3>
      <section>
        <CommentForm
          loading={loading}
          error={error}
          onSubmit={onCommentCreate}
        />
        {rootComments != null && rootComments.length > 0 && (
          <div className="mt-4">
            <CommentList comments={rootComments} />
          </div>
        )}
      </section>
    </>
  )
}
