import React from "react";
import { useParams } from "react-router-dom";
const WordDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <div>WordDetail {id}</div>;
};

export default WordDetail;
