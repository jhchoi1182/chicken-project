import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StBtn from "../ui/buttons/StBtn";
import { addPost, getPost } from "../../redux/modules/postsSlice";
import { useParams } from "react-router";

const PostDetail = ({ btnText, postId, mode, setMode }) => {
  const dispatch = useDispatch();
  const id = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { post } = useSelector((state) => state.posts.post);
  console.log(post);
  // const reTitle = post.title ?? "fff";
  // console.log(reTitle);

  useEffect(() => {
    dispatch(getPost({ id, postId }));
  }, [dispatch, id, postId]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const createClickHandler = () => {
    dispatch(
      addPost({
        title,
        content,
        id,
      })
    );
    setTitle("");
    setContent("");
    setMode(null);
  };

  return (
    <>
      <div>
        {mode === "create" ? (
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ border: "2px solid #e67700" }}
          >
            <div>
              <input
                name="title"
                onChange={titleChangeHandler}
                value={title}
                placeholder="제목을 작성해주세요"
                required
                style={{
                  border: "2px solid #e67700",
                  width: "22rem",
                  height: "2rem",
                  borderRadius: "10px",
                  margin: "20px 0px 20px 18px",
                }}
              />
            </div>
            <div>
              <input
                name="content"
                onChange={contentChangeHandler}
                value={content}
                placeholder="내용을 입력해주세요"
                required
                style={{
                  border: "2px solid #e67700",
                  width: "22rem",
                  height: "2rem",
                  borderRadius: "10px",
                  margin: "0px 0px 20px 18px",
                }}
              />
            </div>
            <div>
              <StBtn
                margin={"0 18px 10px 18px"}
                width={"91%"}
                onClick={createClickHandler}
              >
                등록
              </StBtn>
            </div>
          </form>
        ) : mode === "update" ? (
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ border: "2px solid #e67700" }}
          >
            <div>
              <input
                name="title"
                onChange={titleChangeHandler}
                value={""}
                placeholder="제목을 작성해주세요"
                required
                style={{
                  border: "2px solid #e67700",
                  width: "22rem",
                  height: "2rem",
                  borderRadius: "10px",
                  margin: "20px 0px 20px 18px",
                }}
              />
            </div>
            <div>
              <input
                name="content"
                onChange={contentChangeHandler}
                value={content}
                placeholder="내용을 입력해주세요"
                required
                style={{
                  border: "2px solid #e67700",
                  width: "22rem",
                  height: "2rem",
                  borderRadius: "10px",
                  margin: "0px 0px 20px 18px",
                }}
              />
            </div>
            <div>
              <StBtn
                margin={"0 18px 10px 18px"}
                width={"91%"}
                onClick={createClickHandler}
              >
                수정완료
              </StBtn>
            </div>
          </form>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default PostDetail;
