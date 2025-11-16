import { useParams, useNavigate } from "react-router";

import Container from "../Components/Container";

const ArticlePage = () => {
  const { articleId } = useParams();
  console.log(articleId)
  return (
    <Container>
      <div>Title</div>
    </Container>
  )
}

export default ArticlePage