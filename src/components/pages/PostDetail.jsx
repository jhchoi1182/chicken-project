import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StBtn from "../ui/buttons/StBtn";
import { addPost, getPost, updatePost } from "../../redux/modules/postsSlice";
import { useParams } from "react-router";

const PostDetail = ({ btnText, postId, mode, setMode }) => {
  const dispatch = useDispatch();
  const id = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postData = useSelector((state) => state.posts);
  const post = postData.post?.post;
  const [inputDis, setInputDis] = useState(true);

  const inputModeHandler = () => {
    if (inputDis) {
      // console.log(1); //작성됨
      setInputDis(!inputDis);
    } else {
      //input 작성안됨
      dispatch(updatePost({ title, content, id, postId: post.postId }));
      setInputDis(!inputDis);
      setMode(null);
    }
  };

  useEffect(() => {
    setTitle(post?.title);
    setContent(post?.content);
  }, [postData.isLoading]);

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
        ) : mode === "detail" ? (
          <div>
            <form
              onSubmit={(event) => event.preventDefault()}
              style={{ border: "2px solid #e67700" }}
            >
              <div>
                <input
                  readOnly={inputDis}
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
                  readOnly={inputDis}
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
                  style={{ color: "#e67700" }}
                  margin={"0 18px 10px 18px"}
                  width={"91%"}
                  onClick={inputModeHandler}
                >
                  수정
                </StBtn>
                {/* <StBtn
                margin={"0 18px 10px 18px"}
                width={"91%"}
                onClick={updateClickHandler}
              >
                수정
              </StBtn> */}
                {/* <StBtn
                margin={"0 18px 10px 18px"}
                width={"91%"}
                onClick={updateClickHandler}
              >
                수정완료
              </StBtn> */}
              </div>
            </form>
            <div>
              <div>
                <ul>
                  <li>gggg</li>
                </ul>
              </div>
              <div>
                <form style={{ display: "flex" }}>
                  <input
                    style={{
                      height: "1.3rem",
                      border: "2px solid #e67700",
                      borderRadius: "5px",
                      width: "70%",
                      margin: "10px",
                    }}
                  />
                  <StBtn
                    width={"5rem"}
                    height={"1.8rem"}
                    margin={"9px"}
                    color={"#e67700"}
                  >
                    댓글추가
                  </StBtn>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default PostDetail;
