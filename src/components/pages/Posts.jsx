import React, { useEffect, useState } from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import lv3 from "../../images/LV3.webp";
import StBtn from "../ui/buttons/StBtn";
import { useParams } from "react-router";
import { getPosts, delPost } from "../../redux/modules/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import PostDetail from "./PostDetail";

const Posts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [postId, setPostId] = useState("");
  const [mode, setMode] = useState(null);

  const { posts } = useSelector((state) => state.posts.posts);

  const delClickHandler = (postId) => {
    const deldata = {
      postId,
      id,
    };
    dispatch(delPost(deldata));
  };

  const updateClickHandler = (postId) => {
    setPostId(postId);
  };

  const createClickHandler = () => {
    setMode("create");
  };

  useEffect(() => {
    dispatch(getPosts(id));
  }, [dispatch, id]);

  return (
    <div>
      <PostDetail postId={postId} mode={mode} setMode={setMode} />

      <Header />
      <Chick src={lv3} />
      <div style={{ display: "flex" }}>
        <StBtn margin={"0 10px"} color={"#e67700"}>
          todo
        </StBtn>
        <StBtn margin={"0 10px"} color={"#e67700"}>
          내 이야기
        </StBtn>
        <StBtn margin={"0 10px"} color={"#e67700"}>
          양계장이웃들
        </StBtn>
      </div>
      <div
        style={{
          color: "#e67700",
          borderRadius: "15px",
          height: "250px",
          border: "2px solid #e67700",
          marginTop: "15px",
          width: "100%",
        }}
      >
        {posts === undefined ? (
          <>
            <span style={{ textAlign: "center", marginTop: "50px" }}>
              데이터 없음
            </span>
          </>
        ) : (
          <>
            <div
              style={{
                margin: "15px 15px",
                overflow: "scroll",
                height: "230px",
              }}
            >
              {posts.map((post) => {
                return (
                  <div key={post.id}>
                    <div style={{ display: "flex" }}>
                      <div key={post.postId} style={{ marginBottom: "5px" }}>
                        {post.title}
                      </div>
                      <StBtn
                        width={"3rem"}
                        height={"1.3rem"}
                        margin={"0 2px"}
                        color={"#e67700"}
                        fontSize={"13px"}
                        onClick={() => {
                          setMode("update");
                          updateClickHandler(post.postId);
                        }}
                      >
                        수정
                      </StBtn>
                      <StBtn
                        width={"3rem"}
                        height={"1.3rem"}
                        color={"#e67700"}
                        fontSize={"13px"}
                        onClick={() => delClickHandler(post.postId)}
                      >
                        삭제
                      </StBtn>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <div>
        <StBtn width={"100%"} margin={"15px 0"} onClick={createClickHandler}>
          CREATE
        </StBtn>
      </div>
    </div>
  );
};

export default Posts;
