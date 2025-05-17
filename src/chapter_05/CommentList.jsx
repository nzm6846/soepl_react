import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"이인제"} comment={"안녕하세요, 소플입니다"}/>
            <Comment name={"김준서"} comment={"안녕하세요, 김준서입니다"}/>
            <Comment name={"강동화"} comment={"안녕하세요, 강동화입니다"}/>
        </div>
    )
}

export default CommentList;